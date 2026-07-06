import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import multer from 'multer';
import nodemailer from 'nodemailer';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { schemes, roadmaps } from './data/schemes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.GEMINI_API_KEY) {
  try {
    const envExamplePath = path.join(__dirname, '.env.example');
    if (fs.existsSync(envExamplePath)) {
      const content = fs.readFileSync(envExamplePath, 'utf8');
      const match = content.match(/GEMINI_API_KEY=['"]?([^'\n\r"]+)['"]?/);
      if (match && match[1]) {
        process.env.GEMINI_API_KEY = match[1].trim();
        console.log("Loaded GEMINI_API_KEY from .env.example");
      }
    }
  } catch (err) {
    console.error("Could not load backup API Key:", err.message);
  }
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- File Upload Config ---
const UPLOADS_DIR = path.join(__dirname, 'uploads', 'grievances');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const safeName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, safeName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, JPG, PNG, DOC files are allowed.'));
  }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Email Transporter ---
let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  console.log("Email transporter configured.");
} else {
  console.log("No SMTP config found. Email notifications will be logged to console.");
}

async function sendEmail({ to, subject, html }) {
  if (transporter) {
    try {
      const info = await transporter.sendMail({ from: process.env.SMTP_FROM || '"NagrikSeva" <noreply@nagrikseva.up.gov.in', to, subject, html });
      console.log(`Email sent to ${to}: ${info.messageId}`);
      return true;
    } catch (err) {
      console.error(`Failed to send email to ${to}:`, err.message);
      return false;
    }
  } else {
    console.log(`[EMAIL LOG] To: ${to} | Subject: ${subject} | Body: ${html}`);
    return true;
  }
}

// --- Auto-Escalation ---
const ESCALATION_DAYS = parseInt(process.env.ESCALATION_DAYS || '7');

function autoEscalateGrievances() {
  const grievances = readDataFile(GRIEVANCES_FILE, []);
  const now = new Date();
  let changed = false;

  grievances.forEach(g => {
    if (g.status === 'Open' || g.status === 'In Progress') {
      const created = new Date(g.date);
      const diffDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
      if (diffDays >= ESCALATION_DAYS) {
        g.status = 'Escalated';
        g.escalatedOn = now.toISOString().split('T')[0];
        changed = true;
      }
    }
  });

  if (changed) {
    writeDataFile(GRIEVANCES_FILE, grievances);
    console.log(`Auto-escalation check: escalated ${changed} grievance(s) older than ${ESCALATION_DAYS} days.`);
  }
}

setInterval(autoEscalateGrievances, 60 * 60 * 1000);

// Initialize Gemini Client
let genAI = null;
let isAIEnabled = false;

if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.includes('AQ.')) {
  try {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    isAIEnabled = true;
    console.log("Gemini AI Client initialized successfully.");
  } catch (error) {
    console.error("Gemini initialization failed:", error.message);
  }
} else {
  console.log("No valid Gemini API key found. Running in Simulator Mode (Offline AI).");
}

function cleanAndParseJSON(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```json\s*/i, '').replace(/```$/, '').trim();
  }
  return JSON.parse(cleaned);
}

async function callGeminiJSON(prompt, systemInstruction = '') {
  if (!isAIEnabled || !genAI) {
    throw new Error("AI not active");
  }
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: systemInstruction + " Output must be strictly valid JSON. Do not include markdown codeblocks or text before/after JSON."
  });
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return cleanAndParseJSON(text);
}

// --- Schemes Directory ---
app.get('/api/schemes', (req, res) => {
  res.json(schemes);
});

// --- Eligibility Finder ---
app.post('/api/eligibility', (req, res) => {
  const { age, gender, income, category, occupation } = req.body;
  const ageNum = parseInt(age, 10);
  const incomeNum = parseInt(income, 10);

  const matched = schemes.filter(s => {
    const e = s.eligibility;
    if (ageNum < e.minAge || ageNum > e.maxAge) return false;
    if (e.gender !== 'any' && e.gender !== gender) return false;
    if (e.maxIncome && incomeNum > e.maxIncome) return false;
    if (e.categories && !e.categories.includes('all') && !e.categories.includes(category)) return false;
    if (e.occupations && !e.occupations.includes('all') && !e.occupations.includes(occupation)) return false;
    return true;
  });

  res.json(matched);
});

// --- Service Roadmaps ---
app.get('/api/roadmaps/:id', (req, res) => {
  const roadmap = roadmaps[req.params.id];
  if (!roadmap) {
    return res.status(404).json({ error: 'Roadmap not found' });
  }
  res.json(roadmap);
});

// --- SevaMitra Chat with LLM Guard ---
app.post('/api/chat', async (req, res) => {
  const { message, lang = 'en' } = req.body;
  if (!message) return res.status(400).json({ reply: 'Message is required.', citations: [] });

  const query = message.toLowerCase();

  const hiEnMap = {
    बेरोजगार: 'unemployed', छात्र: 'student', किसान: 'farmer', विधवा: 'widow',
    गर्भवती: 'pregnant_woman', दिव्यांग: 'disabled', श्रमिक: 'laborer',
    व्यवसाय: 'business', शिक्षा: 'education', पेंशन: 'pension',
    कृषि: 'agriculture', स्वास्थ्य: 'health', आवास: 'housing',
    छात्रवृत्ति: 'scholarship', लोन: 'loan', ऋण: 'loan',
    सब्सिडी: 'subsidy', आधार: 'aadhaar', राशन: 'ration',
    भत्ता: 'allowance', योजना: 'scheme', आवेदन: 'application',
    प्रमाण: 'certificate', निःशुल्क: 'free', मुफ्त: 'free'
  };
  let expandedQuery = query;
  for (const [hi, en] of Object.entries(hiEnMap)) {
    if (query.includes(hi)) expandedQuery += ' ' + en;
    if (query.includes(en)) expandedQuery += ' ' + hi;
  }

  const relevant = schemes.filter(s => {
    const searchFields = [
      s.name.en.toLowerCase(),
      s.name.hi,
      s.category,
      s.benefits.en?.toLowerCase() || '',
      s.benefits.hi || '',
      s.procedure.en?.toLowerCase() || '',
      s.procedure.hi || '',
      ...(s.eligibility.occupations || []),
      ...(s.documents || []).flatMap(d => [d.en.toLowerCase(), d.hi])
    ];
    const text = searchFields.join(' ');
    return text.includes(expandedQuery);
  }).slice(0, 5);

  const context = relevant.map(s =>
    `[${s.id}] ${s.name.en} - ${s.benefits.en} (Official: ${s.officialUrl})`
  ).join('\n') || 'No matching schemes found.';

  if (!isAIEnabled) {
    if (relevant.length === 0) {
      return res.json({
        reply: lang === 'hi'
          ? 'क्षमा करें, आपकी क्वेरी से मेल खाने वाली कोई योजना नहीं मिली। कृपया अलग कीवर्ड आज़माएँ।'
          : "Sorry, I couldn't find any scheme matching your query. Try different keywords.",
        citations: []
      });
    }
    const s = relevant[0];
    const reply = lang === 'hi'
      ? `${s.name.hi}: ${s.benefits.hi}\n\nस्रोत: ${s.officialUrl}`
      : `${s.name.en}: ${s.benefits.en}\n\nSource: ${s.officialUrl}`;
    return res.json({ reply, citations: relevant.map(s => s.officialUrl) });
  }

  const systemInstruction = `You are SevaMitra, an AI assistant for UP government schemes.
Answer in ${lang === 'hi' ? 'Hindi' : 'English'}. Be concise and helpful.

CRITICAL: You MUST cite which scheme you reference by [ID] at the end of each claim.
If no scheme matches the question, say so honestly - never invent or guess schemes.
If the user asks something outside government schemes, politely redirect.

Available schemes for context:
${context}

Output JSON: { "answer": "your response here", "citations": ["url1", "url2"] }`;

  try {
    const result = await callGeminiJSON(
      JSON.stringify({ question: message }),
      systemInstruction
    );
    res.json({
      reply: result.answer,
      citations: result.citations || relevant.map(s => s.officialUrl)
    });
  } catch (err) {
    console.error('Chat AI error:', err.message);
    const s = relevant[0];
    if (s) {
      res.json({
        reply: lang === 'hi'
          ? `${s.name.hi}: ${s.benefits.hi}\n\nस्रोत: ${s.officialUrl}`
          : `${s.name.en}: ${s.benefits.en}\n\nSource: ${s.officialUrl}`,
        citations: relevant.map(s => s.officialUrl)
      });
    } else {
      res.json({
        reply: lang === 'hi'
          ? 'क्षमा करें, अभी उत्तर नहीं दे सकता। कृपया बाद में पुनः प्रयास करें।'
          : "Sorry, I can't respond right now. Please try again later.",
        citations: []
      });
    }
  }
});

// --- Persistence Helper Functions ---
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const APPLICATIONS_FILE = path.join(__dirname, 'data', 'applications.json');
const GRIEVANCES_FILE = path.join(__dirname, 'data', 'grievances.json');
const STATS_FILE = path.join(__dirname, 'data', 'scheme_stats.json');

function readDataFile(filePath, defaultVal = []) {
  try {
    if (fs.existsSync(filePath)) {
      let data = fs.readFileSync(filePath, 'utf8');
      data = data.replace(/^\uFEFF/, '');
      return JSON.parse(data || JSON.stringify(defaultVal));
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return defaultVal;
}

function writeDataFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

function getUserEmail(username) {
  const users = readDataFile(USERS_FILE, []);
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
  return user ? user.email : null;
}

// --- Auth Endpoints ---
app.post('/api/auth/register', (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Username, password and email are required.' });
  }

  const users = readDataFile(USERS_FILE, []);
  const exists = users.find(u => u.username.toLowerCase() === username.toLowerCase() || u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return res.status(400).json({ error: 'Username or email already exists.' });
  }

  const newUser = {
    username,
    password,
    email,
    profile: {
      age: '',
      gender: 'any',
      income: '',
      category: 'General',
      occupation: 'general_public'
    },
    bookmarks: []
  };

  users.push(newUser);
  writeDataFile(USERS_FILE, users);

  const { password: _, ...userWithoutPassword } = newUser;
  res.json({ success: true, user: userWithoutPassword });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  const users = readDataFile(USERS_FILE, []);
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
  if (!user) {
    return res.status(400).json({ error: 'Invalid username or password.' });
  }

  const { password: _, ...userWithoutPassword } = user;
  res.json({ success: true, user: userWithoutPassword });
});

app.post('/api/auth/profile', (req, res) => {
  const { username, profile } = req.body;
  if (!username || !profile) {
    return res.status(400).json({ error: 'Username and profile are required.' });
  }

  const users = readDataFile(USERS_FILE, []);
  const userIndex = users.findIndex(u => u.username.toLowerCase() === username.toLowerCase());
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found.' });
  }

  users[userIndex].profile = {
    age: profile.age || '',
    gender: profile.gender || 'any',
    income: profile.income || '',
    category: profile.category || 'General',
    occupation: profile.occupation || 'general_public'
  };

  writeDataFile(USERS_FILE, users);

  const { password: _, ...userWithoutPassword } = users[userIndex];
  res.json({ success: true, user: userWithoutPassword });
});

app.post('/api/auth/bookmarks', (req, res) => {
  const { username, schemeId } = req.body;
  if (!username || !schemeId) {
    return res.status(400).json({ error: 'Username and schemeId are required.' });
  }

  const users = readDataFile(USERS_FILE, []);
  const userIndex = users.findIndex(u => u.username.toLowerCase() === username.toLowerCase());
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const user = users[userIndex];
  if (!user.bookmarks) {
    user.bookmarks = [];
  }

  const idx = user.bookmarks.indexOf(schemeId);
  if (idx > -1) {
    user.bookmarks.splice(idx, 1);
  } else {
    user.bookmarks.push(schemeId);
  }

  writeDataFile(USERS_FILE, users);
  res.json({ success: true, bookmarks: user.bookmarks });
});

// --- Application Tracker Endpoints ---
app.post('/api/applications/submit', (req, res) => {
  const {
    username,
    schemeId,
    schemeName,
    district,
    applicantName,
    applicantAge,
    applicantGender,
    applicantIncome,
    applicantCategory,
    applicantOccupation
  } = req.body;

  if (!username || !schemeId || !schemeName || !district || !applicantName) {
    return res.status(400).json({ error: 'Missing required application fields.' });
  }

  const applications = readDataFile(APPLICATIONS_FILE, []);
  const randomId = Math.floor(1000 + Math.random() * 9000);
  const applicationId = `APP-UP-2026-${randomId}`;

  const newApp = {
    applicationId,
    username,
    schemeId,
    schemeName,
    district,
    applicantName,
    applicantAge,
    applicantGender,
    applicantIncome,
    applicantCategory,
    applicantOccupation,
    status: 'Submitted',
    date: new Date().toISOString().split('T')[0]
  };

  applications.push(newApp);
  writeDataFile(APPLICATIONS_FILE, applications);

  res.json({ success: true, application: newApp });
});

app.get('/api/applications', (req, res) => {
  const { username } = req.query;
  const applications = readDataFile(APPLICATIONS_FILE, []);

  if (username) {
    const filtered = applications.filter(app => app.username.toLowerCase() === username.toLowerCase());
    return res.json(filtered);
  }

  res.json(applications);
});

app.post('/api/applications/update-status', (req, res) => {
  const { applicationId, status } = req.body;
  if (!applicationId || !status) {
    return res.status(400).json({ error: 'ApplicationId and status are required.' });
  }

  const applications = readDataFile(APPLICATIONS_FILE, []);
  const appIndex = applications.findIndex(app => app.applicationId === applicationId);
  if (appIndex === -1) {
    return res.status(404).json({ error: 'Application not found.' });
  }

  applications[appIndex].status = status;
  writeDataFile(APPLICATIONS_FILE, applications);

  res.json({ success: true });
});

// --- Grievance Portal Endpoints ---
app.post('/api/grievances/submit', upload.array('attachments', 3), async (req, res) => {
  const { username, district, cscCenter, category, description } = req.body;
  if (!username || !district || !cscCenter || !category || !description) {
    return res.status(400).json({ error: 'Missing required grievance fields.' });
  }

  const grievances = readDataFile(GRIEVANCES_FILE, []);
  const randomId = Math.floor(1000 + Math.random() * 9000);
  const ticketId = `GRV-UP-2026-${randomId}`;

  const files = (req.files || []).map(f => ({
    filename: f.filename,
    originalName: f.originalname,
    path: `/uploads/grievances/${f.filename}`,
    size: f.size
  }));

  const newGrievance = {
    ticketId,
    username,
    district,
    cscCenter,
    category,
    description,
    files,
    status: 'Open',
    date: new Date().toISOString().split('T')[0]
  };

  grievances.push(newGrievance);
  writeDataFile(GRIEVANCES_FILE, grievances);

  autoEscalateGrievances();

  const email = getUserEmail(username);
  if (email) {
    const fileList = files.length > 0
      ? `<p><strong>Attachments:</strong> ${files.map(f => f.originalName).join(', ')}</p>`
      : '';
    sendEmail({
      to: email,
      subject: `Grievance Filed: ${ticketId}`,
      html: `<h2>Grievance Confirmation</h2>
<p>Dear ${username},</p>
<p>Your grievance has been filed successfully.</p>
<table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
<tr><td><strong>Ticket ID</strong></td><td>${ticketId}</td></tr>
<tr><td><strong>Category</strong></td><td>${category}</td></tr>
<tr><td><strong>CSC Center</strong></td><td>${cscCenter} (${district})</td></tr>
<tr><td><strong>Status</strong></td><td>Open</td></tr>
<tr><td><strong>Date</strong></td><td>${newGrievance.date}</td></tr>
</table>
${fileList}
<p>You can track the status using your ticket ID. If unresolved after ${ESCALATION_DAYS} days, it will be auto-escalated.</p>
<p>Regards,<br>NagrikSeva Team</p>`
    });
  }

  res.json({ success: true, grievance: newGrievance });
});

app.get('/api/grievances', (req, res) => {
  const { username } = req.query;
  const grievances = readDataFile(GRIEVANCES_FILE, []);

  if (username) {
    const filtered = grievances.filter(grv => grv.username.toLowerCase() === username.toLowerCase());
    return res.json(filtered);
  }

  res.json(grievances);
});

app.post('/api/grievances/update-status', async (req, res) => {
  const { ticketId, status } = req.body;
  if (!ticketId || !status) {
    return res.status(400).json({ error: 'TicketId and status are required.' });
  }

  const validStatuses = ['Open', 'In Progress', 'Resolved', 'Escalated', 'Rejected'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
  }

  const grievances = readDataFile(GRIEVANCES_FILE, []);
  const idx = grievances.findIndex(g => g.ticketId === ticketId);
  if (idx === -1) {
    return res.status(404).json({ error: 'Grievance not found.' });
  }

  const oldStatus = grievances[idx].status;
  grievances[idx].status = status;
  writeDataFile(GRIEVANCES_FILE, grievances);

  const email = getUserEmail(grievances[idx].username);
  if (email && status !== oldStatus) {
    sendEmail({
      to: email,
      subject: `Grievance Status Updated: ${ticketId}`,
      html: `<h2>Grievance Status Update</h2>
<p>Dear ${grievances[idx].username},</p>
<p>Your grievance status has been updated.</p>
<table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
<tr><td><strong>Ticket ID</strong></td><td>${ticketId}</td></tr>
<tr><td><strong>Old Status</strong></td><td>${oldStatus}</td></tr>
<tr><td><strong>New Status</strong></td><td>${status}</td></tr>
</table>
<p>Regards,<br>NagrikSeva Team</p>`
    });
  }

  res.json({ success: true, grievance: grievances[idx] });
});

// --- Analytics Telemetry Endpoints ---
app.post('/api/analytics/track-view', (req, res) => {
  const { schemeId } = req.body;
  if (!schemeId) {
    return res.status(400).json({ error: 'SchemeId is required.' });
  }

  const stats = readDataFile(STATS_FILE, {});
  stats[schemeId] = (stats[schemeId] || 0) + 1;
  writeDataFile(STATS_FILE, stats);

  res.json({ success: true });
});

app.get('/api/analytics/data', (req, res) => {
  const stats = readDataFile(STATS_FILE, {});
  const applications = readDataFile(APPLICATIONS_FILE, []);
  const users = readDataFile(USERS_FILE, []);
  const grievances = readDataFile(GRIEVANCES_FILE, []);

  const mostViewed = Object.keys(stats).map(id => {
    const scheme = schemes.find(s => s.id === id);
    return {
      id,
      nameEn: scheme ? scheme.name.en : id,
      nameHi: scheme ? scheme.name.hi : id,
      views: stats[id]
    };
  }).sort((a, b) => b.views - a.views).slice(0, 5);

  const districtDistribution = {};
  applications.forEach(app => {
    districtDistribution[app.district] = (districtDistribution[app.district] || 0) + 1;
  });

  res.json({
    success: true,
    analytics: {
      mostViewed,
      districtDistribution,
      counts: {
        users: users.length,
        applications: applications.length,
        grievances: grievances.length
      }
    }
  });
});

// Serve SPA Frontend for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NagrikSeva server listening at http://localhost:${PORT}`);
  autoEscalateGrievances();
});
