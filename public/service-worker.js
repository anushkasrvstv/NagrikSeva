const CACHE_NAME = 'nagrikseva-v1';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg'
];

const API_CACHE = 'nagrikseva-api-v1';
const CDN_CACHE = 'nagrikseva-cdn-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== API_CACHE && k !== CDN_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Chat API - network only (can't work offline)
  if (url.pathname === '/api/chat') {
    return;
  }

  // Static API data - cache first
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(cacheFirst(request, API_CACHE));
    return;
  }

  // CDN resources (fonts, icons) - cache first with longer TTL
  if (
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('cdnjs.cloudflare.com')
  ) {
    event.respondWith(cacheFirst(request, CDN_CACHE));
    return;
  }

  // Navigation & same-origin assets - network first with cache fallback
  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(request));
    return;
  }
});

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'You are offline. Cached data may be unavailable.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response(
      `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline - NagrikSeva</title><style>body{font-family:sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;background:#FFF9F5;color:#0F172A;text-align:center;padding:20px}.card{background:white;padding:40px;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,.1);max-width:400px}h2{color:#FF9933;margin-bottom:8px}p{color:#475569}</style></head><body><div class="card"><h2>📡 You're Offline</h2><p>NagrikSeva is in offline mode. You can still browse schemes and roadmaps that were loaded earlier. Reconnect to use all features.</p></div></body></html>`,
      { status: 200, headers: { 'Content-Type': 'text/html; charset=UTF-8' } }
    );
  }
}
