// State variables
let currentLanguage = 'en';
let schemesData = [];
let activeTab = 'home-panel';
let speechSynthesizerEnabled = false;

// District data with tehsils/blocks
const districtList = [
  { id: "Lucknow", nameEn: "Lucknow", nameHi: "लखनऊ", tehsils: ["Sadar Lucknow", "Mohanlalganj"] },
  { id: "Kanpur", nameEn: "Kanpur", nameHi: "कानपुर", tehsils: ["Sadar Kanpur", "Bilhaur"] },
  { id: "Varanasi", nameEn: "Varanasi", nameHi: "वाराणसी", tehsils: ["Sadar Varanasi", "Pindra"] },
  { id: "Prayagraj", nameEn: "Prayagraj", nameHi: "प्रयागराज", tehsils: ["Sadar Prayagraj", "Karchhana", "Handia", "Phulpur"] },
  { id: "Gorakhpur", nameEn: "Gorakhpur", nameHi: "गोरखपुर", tehsils: ["Sadar Gorakhpur", "Chauri Chaura", "Bansgaon", "Gola"] },
  { id: "Agra", nameEn: "Agra", nameHi: "आगरा", tehsils: ["Sadar Agra", "Fatehabad", "Kheragarh", "Etmadpur"] },
  { id: "Meerut", nameEn: "Meerut", nameHi: "मेरठ", tehsils: ["Sadar Meerut", "Mawana", "Sardhana"] },
  { id: "Ghaziabad", nameEn: "Ghaziabad", nameHi: "गाजियाबाद", tehsils: ["Sadar Ghaziabad", "Modinagar", "Garhmukteshwar"] },
  { id: "Ballia", nameEn: "Ballia", nameHi: "बलिया", tehsils: ["Sadar Ballia", "Bansdih", "Rasra"] },
  { id: "Azamgarh", nameEn: "Azamgarh", nameHi: "आज़मगढ़", tehsils: ["Sadar Azamgarh", "Lalganj", "Mehnagar", "Sagri"] },
  { id: "Jaunpur", nameEn: "Jaunpur", nameHi: "जौनपुर", tehsils: ["Sadar Jaunpur", "Machhlishahr", "Shahganj", "Kerakat"] },
  { id: "Mau", nameEn: "Mau", nameHi: "मऊ", tehsils: ["Sadar Mau", "Ghosi", "Madhuban"] },
  { id: "Deoria", nameEn: "Deoria", nameHi: "देवरिया", tehsils: ["Sadar Deoria", "Salempur", "Kaptanganj", "Rudrapur"] },
  { id: "Basti", nameEn: "Basti", nameHi: "बस्ती", tehsils: ["Sadar Basti", "Harraiya", "Bhanpur"] },
  { id: "Siddharthnagar", nameEn: "Siddharthnagar", nameHi: "सिद्धार्थनगर", tehsils: ["Sadar Siddharthnagar", "Naugarh", "Bansi", "Domariyaganj"] },
  { id: "Maharajganj", nameEn: "Maharajganj", nameHi: "महाराजगंज", tehsils: ["Sadar Maharajganj", "Nautanwa", "Nichlaul"] },
  { id: "Kushinagar", nameEn: "Kushinagar", nameHi: "कुशीनगर", tehsils: ["Sadar Kushinagar", "Padrauna", "Hata", "Kasia"] },
  { id: "Ayodhya", nameEn: "Ayodhya", nameHi: "अयोध्या", tehsils: ["Sadar Ayodhya", "Milkipur", "Bikapur", "Sohawal"] },
  { id: "Sultanpur", nameEn: "Sultanpur", nameHi: "सुल्तानपुर", tehsils: ["Sadar Sultanpur", "Lambhua", "Kadipur", "Musafirkhana"] },
  { id: "Barabanki", nameEn: "Barabanki", nameHi: "बाराबंकी", tehsils: ["Sadar Barabanki", "Fatehpur", "Nawabganj", "Ramsanehighat"] },
  { id: "Mathura", nameEn: "Mathura", nameHi: "मथुरा", tehsils: ["Sadar Mathura", "Chhata", "Mahavan"] },
  { id: "Aligarh", nameEn: "Aligarh", nameHi: "अलीगढ़", tehsils: ["Sadar Aligarh", "Khair", "Atrauli", "Iglas"] },
  { id: "Moradabad", nameEn: "Moradabad", nameHi: "मुरादाबाद", tehsils: ["Sadar Moradabad", "Bilari", "Kanth", "Thakurdwara"] },
  { id: "Bareilly", nameEn: "Bareilly", nameHi: "बरेली", tehsils: ["Sadar Bareilly", "Baheri", "Faridpur", "Aonla"] },
  { id: "Jhansi", nameEn: "Jhansi", nameHi: "झाँसी", tehsils: ["Sadar Jhansi", "Mauranipur", "Moth", "Garautha"] },
  { id: "Saharanpur", nameEn: "Saharanpur", nameHi: "सहारनपुर", tehsils: ["Sadar Saharanpur", "Deoband", "Gangoh", "Nakud"] }
];

// Jan Seva Kendra database with tehsil tagging
const jskDatabase = {
  Lucknow: [
    { name: "Sadar Jan Seva Kendra", address: "Kaiserbagh Chauraha, Near Court, Lucknow", phone: "+91 94150 12345", tehsil: "Sadar Lucknow" },
    { name: "Hazratganj CSC Digital Zone", address: "2nd Floor, Tej Kumar Plaza, Hazratganj", phone: "+91 98390 67890", tehsil: "Sadar Lucknow" },
    { name: "Mohanlalganj Block CSC", address: "Block Office Campus, Mohanlalganj", phone: "+91 88742 11223", tehsil: "Mohanlalganj" }
  ],
  Kanpur: [
    { name: "Kanpur Sadar CSC", address: "Civil Lines, Near DM Office, Kanpur", phone: "+91 99190 22334", tehsil: "Sadar Kanpur" },
    { name: "Kalyanpur Digital Seva", address: "GT Road, Near Kalyanpur Station, Kanpur", phone: "+91 94501 55667", tehsil: "Sadar Kanpur" },
    { name: "Bilhaur Tehsil CSC", address: "Bilhaur Town, Near Bus Stand", phone: "+91 98380 33445", tehsil: "Bilhaur" }
  ],
  Varanasi: [
    { name: "Kashi e-District Center", address: "Lahurabir Crossing, Varanasi", phone: "+91 97921 88990", tehsil: "Sadar Varanasi" },
    { name: "Sarnath CSC Portal", address: "Near Sarnath Museum, Varanasi", phone: "+91 95544 33221", tehsil: "Sadar Varanasi" },
    { name: "Pindra Block CSC", address: "Pindra Tehsil Office, Varanasi", phone: "+91 98877 66554", tehsil: "Pindra" }
  ],
  Prayagraj: [
    { name: "Sangam Digital Center", address: "Civil Lines, Near Subhash Chauraha, Prayagraj", phone: "+91 93350 44556", tehsil: "Sadar Prayagraj" },
    { name: "Katara e-Seva Point", address: "University Road, Katra, Prayagraj", phone: "+91 98890 99887", tehsil: "Sadar Prayagraj" },
    { name: "Karchhana Block Kendra", address: "Karchhana Tehsil, Near Police Station", phone: "+91 94321 11234", tehsil: "Karchhana" },
    { name: "Handia e-Seva Kendra", address: "Handia Town, Near Nagar Panchayat", phone: "+91 93456 78901", tehsil: "Handia" }
  ],
  Gorakhpur: [
    { name: "Gorakhpur Sadar CSC", address: "Town Hall, Gorakhpur", phone: "+91 94152 77889", tehsil: "Sadar Gorakhpur" },
    { name: "Medical College Road CSC", address: "Near BRD Medical College, Gorakhpur", phone: "+91 99360 11224", tehsil: "Sadar Gorakhpur" },
    { name: "Chauri Chaura Block Office", address: "Chauri Chaura, Near Tehsil", phone: "+91 98370 99881", tehsil: "Chauri Chaura" },
    { name: "Bansgaon e-Seva", address: "Bansgaon Tehsil, Near Bus Stop", phone: "+91 95588 77664", tehsil: "Bansgaon" }
  ],
  Agra: [
    { name: "Taj Digital Center", address: "Sanjay Place, Agra", phone: "+91 90440 55660", tehsil: "Sadar Agra" },
    { name: "Fatehabad Tehsil CSC", address: "Fatehabad Road, Near Railway Crossing", phone: "+91 97110 22334", tehsil: "Fatehabad" },
    { name: "Kheragarh Block Center", address: "Kheragarh Town, Near SDM Office", phone: "+91 99770 88990", tehsil: "Kheragarh" }
  ],
  Meerut: [
    { name: "Meerut Cantt CSC", address: "Mall Road, Near Cantt Board, Meerut", phone: "+91 92350 88990", tehsil: "Sadar Meerut" },
    { name: "Mawana e-Seva Kendra", address: "Mawana, Near Bus Stand, Meerut", phone: "+91 98970 66554", tehsil: "Mawana" },
    { name: "Sardhana Block Office", address: "Sardhana Tehsil, Near Police Chauki", phone: "+91 94120 33449", tehsil: "Sardhana" }
  ],
  Ghaziabad: [
    { name: "Indirapuram e-Seva Kendra", address: "Kala Patthar Road, Indirapuram", phone: "+91 98180 77665", tehsil: "Sadar Ghaziabad" },
    { name: "Modinagar Digital Seva", address: "Modinagar, Near Tehsil Office", phone: "+91 98370 55443", tehsil: "Modinagar" },
    { name: "Garhmukteshwar Block CSC", address: "Garhmukteshwar, Near Bus Stand", phone: "+91 99560 11223", tehsil: "Garhmukteshwar" }
  ],
  Ballia: [
    { name: "Ballia Sadar CSC", address: "Near District Court, Ballia", phone: "+91 94152 99887", tehsil: "Sadar Ballia" },
    { name: "Bansdih Tehsil Center", address: "Bansdih, Near Block Office", phone: "+91 99350 56789", tehsil: "Bansdih" },
    { name: "Rasra e-Sewa Kendra", address: "Rasra, Near Nagar Panchayat", phone: "+91 94522 33445", tehsil: "Rasra" }
  ],
  Azamgarh: [
    { name: "Azamgarh City CSC", address: "Civil Lines, Near DM Office, Azamgarh", phone: "+91 95450 66778", tehsil: "Sadar Azamgarh" },
    { name: "Lalganj Tehsil Center", address: "Lalganj, Near Railway Station", phone: "+91 98760 99881", tehsil: "Lalganj" },
    { name: "Mehnagar Block CSC", address: "Mehnagar, Near Police Station", phone: "+91 96780 44332", tehsil: "Mehnagar" },
    { name: "Sagri e-Seva Kendra", address: "Sagri, Nizamabad Road", phone: "+91 99123 77885", tehsil: "Sagri" }
  ],
  Jaunpur: [
    { name: "Jaunpur Sadar Kendra", address: "Near Kutchery, Jaunpur City", phone: "+91 94530 44556", tehsil: "Sadar Jaunpur" },
    { name: "Machhlishahr Block Office", address: "Machhlishahr, Near Bus Stand", phone: "+91 98350 66778", tehsil: "Machhlishahr" },
    { name: "Shahganj e-District Center", address: "Shahganj, Near Tehsil", phone: "+91 97650 22334", tehsil: "Shahganj" },
    { name: "Kerakat Seva Kendra", address: "Kerakat, Near Block Office", phone: "+91 98900 99887", tehsil: "Kerakat" }
  ],
  Mau: [
    { name: "Mau Sadar CSC", address: "Gannipur, Near DM Office, Mau", phone: "+91 94150 33445", tehsil: "Sadar Mau" },
    { name: "Ghosi Tehsil Kendra", address: "Ghosi, Near Bus Stand", phone: "+91 98710 55667", tehsil: "Ghosi" },
    { name: "Madhuban Block CSC", address: "Madhuban, Near Panchayat Bhavan", phone: "+91 99670 77889", tehsil: "Madhuban" }
  ],
  Deoria: [
    { name: "Deoria Sadar CSC", address: "Near District Hospital, Deoria", phone: "+91 94152 66778", tehsil: "Sadar Deoria" },
    { name: "Salempur e-Seva Center", address: "Salempur, Near Railway Station", phone: "+91 98890 22334", tehsil: "Salempur" },
    { name: "Rudrapur Block Kendra", address: "Rudrapur, Near Tehsil Office", phone: "+91 97930 99881", tehsil: "Rudrapur" },
    { name: "Kaptanganj Center", address: "Kaptanganj, Near Bus Stop", phone: "+91 96540 44556", tehsil: "Kaptanganj" }
  ],
  Basti: [
    { name: "Basti City CSC", address: "Civil Lines, Near DM Office, Basti", phone: "+91 94520 55667", tehsil: "Sadar Basti" },
    { name: "Harraiya Tehsil Center", address: "Harraiya, Near Police Station", phone: "+91 98360 77889", tehsil: "Harraiya" },
    { name: "Bhanpur Block CSC", address: "Bhanpur, Near Panchayat Office", phone: "+91 99750 11223", tehsil: "Bhanpur" }
  ],
  Siddharthnagar: [
    { name: "Siddharthnagar Sadar", address: "Naugarh Town, Near Collectorate", phone: "+91 94150 99887", tehsil: "Sadar Siddharthnagar" },
    { name: "Bansi Tehsil Kendra", address: "Bansi, Near Bus Stand", phone: "+91 98760 33445", tehsil: "Bansi" },
    { name: "Domariyaganj Center", address: "Domariyaganj, Near Block Office", phone: "+91 97890 55667", tehsil: "Domariyaganj" }
  ],
  Maharajganj: [
    { name: "Maharajganj Sadar CSC", address: "Near Collectorate, Maharajganj", phone: "+91 94152 22334", tehsil: "Sadar Maharajganj" },
    { name: "Nautanwa Border Center", address: "Nautanwa, Near Bus Stop", phone: "+91 98390 77889", tehsil: "Nautanwa" },
    { name: "Nichlaul Block CSC", address: "Nichlaul, Near Police Station", phone: "+91 99450 44556", tehsil: "Nichlaul" }
  ],
  Kushinagar: [
    { name: "Kushinagar Sadar Kendra", address: "Near Bus Stand, Kushinagar", phone: "+91 94150 66778", tehsil: "Sadar Kushinagar" },
    { name: "Padrauna Tehsil Center", address: "Padrauna, Near SDM Office", phone: "+91 98760 99881", tehsil: "Padrauna" },
    { name: "Hata Block CSC", address: "Hata, Near Market", phone: "+91 97880 11223", tehsil: "Hata" },
    { name: "Kasia e-Seva Kendra", address: "Kasia, Near Buddha Temple Road", phone: "+91 96670 33445", tehsil: "Kasia" }
  ],
  Ayodhya: [
    { name: "Ayodhya City CSC", address: "Near Ram Path, Ayodhya", phone: "+91 94152 44556", tehsil: "Sadar Ayodhya" },
    { name: "Milkipur Tehsil Office", address: "Milkipur, Near Bus Stand", phone: "+91 98350 66778", tehsil: "Milkipur" },
    { name: "Bikapur Block Center", address: "Bikapur, Near SDM Office", phone: "+91 99780 99881", tehsil: "Bikapur" },
    { name: "Sohawal e-Seva", address: "Sohawal, Near Police Station", phone: "+91 98890 22334", tehsil: "Sohawal" }
  ],
  Sultanpur: [
    { name: "Sultanpur Sadar CSC", address: "Civil Lines, Near DM Office, Sultanpur", phone: "+91 94150 77889", tehsil: "Sadar Sultanpur" },
    { name: "Lambhua Tehsil Center", address: "Lambhua, Near Bus Stand", phone: "+91 97960 22334", tehsil: "Lambhua" },
    { name: "Kadipur Block CSC", address: "Kadipur, Near Panchayat Bhavan", phone: "+91 96540 55667", tehsil: "Kadipur" },
    { name: "Musafirkhana Center", address: "Musafirkhana, Near Tehsil", phone: "+91 99120 99887", tehsil: "Musafirkhana" }
  ],
  Barabanki: [
    { name: "Barabanki City CSC", address: "Near DM Office, Barabanki", phone: "+91 94152 11223", tehsil: "Sadar Barabanki" },
    { name: "Fatehpur Block Center", address: "Fatehpur, Near Bus Stand", phone: "+91 98360 33445", tehsil: "Fatehpur" },
    { name: "Nawabganj Tehsil CSC", address: "Nawabganj, Near Police Station", phone: "+91 99770 55667", tehsil: "Nawabganj" },
    { name: "Ramsanehighat Kendra", address: "Ramsanehighat, Near Market", phone: "+91 96550 77889", tehsil: "Ramsanehighat" }
  ],
  Mathura: [
    { name: "Mathura City Center", address: "Near Collector Office, Mathura", phone: "+91 94150 99887", tehsil: "Sadar Mathura" },
    { name: "Chhata Tehsil CSC", address: "Chhata, Near Bus Stand", phone: "+91 98760 11223", tehsil: "Chhata" },
    { name: "Mahavan Block Kendra", address: "Mahavan, Near Sri Krishna Janmabhoomi Road", phone: "+91 97850 33445", tehsil: "Mahavan" }
  ],
  Aligarh: [
    { name: "Aligarh Sadar CSC", address: "Near DM Office, Aligarh", phone: "+91 94152 44556", tehsil: "Sadar Aligarh" },
    { name: "Khair Tehsil Center", address: "Khair, Near Bus Stand", phone: "+91 98370 66778", tehsil: "Khair" },
    { name: "Atrauli Block CSC", address: "Atrauli, Near Tehsil Office", phone: "+91 99780 99881", tehsil: "Atrauli" },
    { name: "Iglas e-Seva Kendra", address: "Iglas, Near Police Station", phone: "+91 96560 22334", tehsil: "Iglas" }
  ],
  Moradabad: [
    { name: "Moradabad City CSC", address: "Civil Lines, Near DM Office, Moradabad", phone: "+91 94150 55667", tehsil: "Sadar Moradabad" },
    { name: "Bilari Tehsil Center", address: "Bilari, Near Bus Stand", phone: "+91 98760 77889", tehsil: "Bilari" },
    { name: "Kanth Block CSC", address: "Kanth, Near Police Station", phone: "+91 97890 11223", tehsil: "Kanth" },
    { name: "Thakurdwara e-Seva", address: "Thakurdwara, Near SDM Office", phone: "+91 99450 33445", tehsil: "Thakurdwara" }
  ],
  Bareilly: [
    { name: "Bareilly Sadar CSC", address: "Near DM Office, Civil Lines, Bareilly", phone: "+91 94152 66778", tehsil: "Sadar Bareilly" },
    { name: "Baheri Tehsil Center", address: "Baheri, Near Bus Stand", phone: "+91 98350 99881", tehsil: "Baheri" },
    { name: "Faridpur Block CSC", address: "Faridpur, Near Market", phone: "+91 99760 22334", tehsil: "Faridpur" },
    { name: "Aonla e-Seva Kendra", address: "Aonla, Near Railway Station", phone: "+91 96540 44556", tehsil: "Aonla" }
  ],
  Jhansi: [
    { name: "Jhansi City Kendra", address: "Near Collector Office, Jhansi", phone: "+91 94150 99887", tehsil: "Sadar Jhansi" },
    { name: "Mauranipur Tehsil CSC", address: "Mauranipur, Near Bus Stand", phone: "+91 98760 11223", tehsil: "Mauranipur" },
    { name: "Moth Block Office", address: "Moth, Near SDM Office", phone: "+91 97850 33445", tehsil: "Moth" },
    { name: "Garautha e-Seva", address: "Garautha, Near Police Station", phone: "+91 96670 55667", tehsil: "Garautha" }
  ],
  Saharanpur: [
    { name: "Saharanpur Sadar CSC", address: "Near DM Office, Saharanpur", phone: "+91 94152 77889", tehsil: "Sadar Saharanpur" },
    { name: "Deoband Tehsil Center", address: "Deoband, Near Bus Stand", phone: "+91 98360 22334", tehsil: "Deoband" },
    { name: "Gangoh Block CSC", address: "Gangoh, Near Nagar Palika", phone: "+91 99770 55667", tehsil: "Gangoh" },
    { name: "Nakud e-Seva Kendra", address: "Nakud, Near Market", phone: "+91 96550 99887", tehsil: "Nakud" }
  ]
};

// Initial setup on window load
window.addEventListener('DOMContentLoaded', async () => {
  setupLanguageSwitcher();
  setupTabSystem();
  setupEligibilityWizard();
  setupRoadmapsSystem();
  setupChatSystem();
  setupJskLocator();
  
  // Load schemes from backend API
  await fetchSchemes();
});

// 1. Language Toggle Logic
function setupLanguageSwitcher() {
  const langToggle = document.getElementById('langToggle');
  const buttons = langToggle.querySelectorAll('.lang-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentLanguage = btn.dataset.lang;
      applyLanguage(currentLanguage);
    });
  });
}

function applyLanguage(lang) {
  // Update HTML tag lang
  document.documentElement.lang = lang;
  
  // Translate standard translation hooks
  const elements = document.querySelectorAll('[data-en], [data-hi]');
  elements.forEach(el => {
    if (lang === 'hi' && el.dataset.hi) {
      el.textContent = el.dataset.hi;
    } else if (lang === 'en' && el.dataset.en) {
      el.textContent = el.dataset.en;
    }
  });

  // Translate Input Placeholders
  const inputs = document.querySelectorAll('[data-en-placeholder], [data-hi-placeholder]');
  inputs.forEach(input => {
    if (lang === 'hi' && input.dataset.hiPlaceholder) {
      input.placeholder = input.dataset.hiPlaceholder;
    } else if (lang === 'en' && input.dataset.enPlaceholder) {
      input.placeholder = input.dataset.enPlaceholder;
    }
  });

  // Translate Options inside dropdowns
  const options = document.querySelectorAll('option[data-en]');
  options.forEach(opt => {
    if (lang === 'hi' && opt.dataset.hi) {
      opt.textContent = opt.dataset.hi;
    } else if (opt.dataset.en) {
      opt.textContent = opt.dataset.en;
    }
  });

  // Re-render schemes list grid to apply dynamic language details
  renderSchemesGrid(schemesData);
  
  // Re-render roadmap system (dropdown + sidebar)
  setupRoadmapsSystem();
  
  // Re-populate district & tehsil dropdowns for language update
  const currDist = document.getElementById('districtSelect').value;
  populateDistrictDropdown();
  document.getElementById('districtSelect').value = currDist;
  populateTehsilDropdown(currDist);
  updateJskCentersList();
}

// 2. Tab Navigation System
function setupTabSystem() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      
      tabLinks.forEach(l => l.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      link.classList.add('active');
      document.getElementById(target).classList.add('active');
      activeTab = target;
    });
  });
}

// Global helper to switch tabs programmatically
window.switchTab = function(tabId) {
  const link = document.querySelector(`.tab-link[data-target="${tabId}"]`);
  if (link) {
    link.click();
  }
};

// 3. Schemes Data & Search Directory
async function fetchSchemes() {
  try {
    const response = await fetch('/api/schemes');
    schemesData = await response.json();
    renderSchemesGrid(schemesData);
    setupSearchAndFilters();
  } catch (error) {
    console.error("Failed to load schemes: ", error);
  }
}

function renderSchemesGrid(list, containerId = 'schemesListGrid') {
  const grid = document.getElementById(containerId);
  grid.innerHTML = '';
  
  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 12px; color: var(--text-muted);"></i>
        <p data-en="No schemes found matching the criteria." data-hi="कोई भी योजना मानदंड के अनुरूप नहीं मिली।">${currentLanguage === 'hi' ? 'कोई भी योजना मानदंड के अनुरूप नहीं मिली।' : 'No schemes found matching the criteria.'}</p>
      </div>
    `;
    return;
  }
  
  list.forEach(scheme => {
    const card = document.createElement('div');
    card.className = 'glass-card scheme-card';
    
    const name = currentLanguage === 'hi' ? scheme.name.hi : scheme.name.en;
    const benefits = currentLanguage === 'hi' ? scheme.benefits.hi : scheme.benefits.en;
    const feeText = currentLanguage === 'hi' ? scheme.fee.hi : scheme.fee.en;
    const timeText = currentLanguage === 'hi' ? scheme.processingTime.hi : scheme.processingTime.en;
    
    // Category mapping strings
    const categoryName = currentLanguage === 'hi' ? getCategoryNameHindi(scheme.category) : getCategoryNameEnglish(scheme.category);

    card.innerHTML = `
      <div>
        <span class="scheme-tag ${scheme.category}">${categoryName}</span>
        <h3>${name}</h3>
        <p>${benefits.substring(0, 110)}${benefits.length > 110 ? '...' : ''}</p>
        
        <div class="scheme-meta-details">
          <div class="meta-info-item">
            <span data-en="Application Fee" data-hi="आवेदन शुल्क">${currentLanguage === 'hi' ? 'आवेदन शुल्क' : 'Application Fee'}</span>
            <span>${feeText}</span>
          </div>
          <div class="meta-info-item">
            <span data-en="Processing Time" data-hi="प्रोसेसिंग समय">${currentLanguage === 'hi' ? 'प्रोसेसिंग समय' : 'Processing Time'}</span>
            <span>${timeText}</span>
          </div>
        </div>
      </div>
      
      <div class="scheme-actions">
        <button class="btn btn-primary" onclick="openDetailsModal('${scheme.id}')" style="flex: 1;">
          <i class="fa-solid fa-circle-info"></i> <span data-en="View Details" data-hi="विवरण देखें">${currentLanguage === 'hi' ? 'विवरण देखें' : 'View Details'}</span>
        </button>
        <a href="${scheme.officialUrl}" target="_blank" class="btn btn-secondary btn-icon" title="Go to official portal">
          <i class="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function getCategoryNameEnglish(cat) {
  const mapping = {
    education: 'Education',
    agriculture: 'Agriculture',
    pension: 'Pensions',
    welfare: 'Welfare',
    business: 'Business',
    'health-housing': 'Health & Housing',
    'essential-documents': 'Documents'
  };
  return mapping[cat] || cat;
}

function getCategoryNameHindi(cat) {
  const mapping = {
    education: 'शिक्षा',
    agriculture: 'कृषि',
    pension: 'पेंशन',
    welfare: 'कल्याण',
    business: 'व्यवसाय',
    'health-housing': 'स्वास्थ्य एवं आवास',
    'essential-documents': 'दस्तावेज'
  };
  return mapping[cat] || cat;
}

function schemeMatchesOccupation(scheme, occ) {
  const occs = scheme.eligibility.occupations || [];
  return occs.includes(occ) || occs.includes('all');
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById('schemeSearch');
  const filterChips = document.querySelectorAll('#categoryFilter .filter-chip');
  
  let activeCategory = 'all';
  let searchQuery = '';
  
  function applyFilters() {
    const filtered = schemesData.filter(s => {
      if (activeCategory === 'all') {
        const text = `${s.name.en} ${s.name.hi} ${s.benefits.en} ${s.benefits.hi} ${s.category}`.toLowerCase();
        const matchSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
        return matchSearch;
      }
      
      if (activeCategory.startsWith('occ:')) {
        const occ = activeCategory.slice(4);
        const matchOcc = schemeMatchesOccupation(s, occ);
        const text = `${s.name.en} ${s.name.hi} ${s.benefits.en} ${s.benefits.hi} ${s.category}`.toLowerCase();
        const matchSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
        return matchOcc && matchSearch;
      }
      
      const matchCategory = s.category === activeCategory;
      const text = `${s.name.en} ${s.name.hi} ${s.benefits.en} ${s.benefits.hi} ${s.category}`.toLowerCase();
      const matchSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
    
    renderSchemesGrid(filtered);
  }
  
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      applyFilters();
    });
  });
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });
}

// 4. Modal Details Viewer
window.openDetailsModal = function(schemeId) {
  const scheme = schemesData.find(s => s.id === schemeId);
  if (!scheme) return;
  
  const modal = document.getElementById('detailModal');
  const body = document.getElementById('modalBody');
  
  const name = currentLanguage === 'hi' ? scheme.name.hi : scheme.name.en;
  const benefits = currentLanguage === 'hi' ? scheme.benefits.hi : scheme.benefits.en;
  const procedure = currentLanguage === 'hi' ? scheme.procedure.hi : scheme.procedure.en;
  const feeText = currentLanguage === 'hi' ? scheme.fee.hi : scheme.fee.en;
  const timeText = currentLanguage === 'hi' ? scheme.processingTime.hi : scheme.processingTime.en;
  
  // Format documents list
  let docItems = '';
  scheme.documents.forEach(doc => {
    const docName = currentLanguage === 'hi' ? doc.hi : doc.en;
    docItems += `<li><i class="fa-solid fa-check"></i> ${docName}</li>`;
  });
  
  body.innerHTML = `
    <h2>${name}</h2>
    
    <div>
      <div class="modal-section-title" data-en="Benefits / Description" data-hi="लाभ / विवरण">${currentLanguage === 'hi' ? 'लाभ / विवरण' : 'Benefits / Description'}</div>
      <p style="font-size: 0.95rem; line-height: 1.7;">${benefits}</p>
    </div>
    
    <div class="info-grid-3">
      <div>
        <span data-en="Application Fee" data-hi="आवेदन शुल्क">${currentLanguage === 'hi' ? 'आवेदन शुल्क' : 'Application Fee'}</span>
        <span>${feeText}</span>
      </div>
      <div>
        <span data-en="Processing Time" data-hi="प्रोसेसिंग समय">${currentLanguage === 'hi' ? 'प्रोसेसिंग समय' : 'Processing Time'}</span>
        <span>${timeText}</span>
      </div>
      <div>
        <span data-en="Mode of Apply" data-hi="आवेदन का माध्यम">${currentLanguage === 'hi' ? 'आवेदन का माध्यम' : 'Mode of Apply'}</span>
        <span>${scheme.officialUrl.includes('edistrict') ? 'e-District / CSC' : 'Online Portal'}</span>
      </div>
    </div>

    <div>
      <div class="modal-section-title" data-en="Required Documents" data-hi="आवश्यक दस्तावेज">${currentLanguage === 'hi' ? 'आवश्यक दस्तावेज' : 'Required Documents'}</div>
      <ul class="doc-list">
        ${docItems}
      </ul>
    </div>
    
    <div>
      <div class="modal-section-title" data-en="Application Procedure" data-hi="आवेदन प्रक्रिया">${currentLanguage === 'hi' ? 'आवेदन प्रक्रिया' : 'Application Procedure'}</div>
      <p style="font-size: 0.9rem; line-height: 1.7; white-space: pre-line;">${procedure}</p>
    </div>
    
    <div style="display: flex; gap: 12px; margin-top: 12px;">
      <a href="${scheme.officialUrl}" target="_blank" class="btn btn-primary" style="flex: 1;">
        <i class="fa-solid fa-up-right-from-square"></i> <span data-en="Apply Now (Official Website)" data-hi="अभी आवेदन करें (आधिकारिक वेबसाइट)">${currentLanguage === 'hi' ? 'अभी आवेदन करें (आधिकारिक वेबसाइट)' : 'Apply Now (Official Website)'}</span>
      </a>
      <button class="btn btn-secondary" onclick="shareToWhatsApp('${scheme.id}')">
        <i class="fa-brands fa-whatsapp"></i> <span data-en="Share to WhatsApp" data-hi="व्हाट्सएप पर भेजें">${currentLanguage === 'hi' ? 'व्हाट्सएप पर भेजें' : 'Share to WhatsApp'}</span>
      </button>
    </div>
  `;
  
  modal.classList.add('active');
};

window.closeModal = function() {
  document.getElementById('detailModal').classList.remove('active');
};

window.shareToWhatsApp = function(schemeId) {
  const scheme = schemesData.find(s => s.id === schemeId);
  if (!scheme) return;
  
  const name = currentLanguage === 'hi' ? scheme.name.hi : scheme.name.en;
  const benefits = currentLanguage === 'hi' ? scheme.benefits.hi : scheme.benefits.en;
  const url = scheme.officialUrl;
  
  let text = `*NagrikSeva UP Welfare Alert*\n\nScheme Name: *${name}*\nBenefits: ${benefits}\nApply Official Link: ${url}`;
  if (currentLanguage === 'hi') {
    text = `*नागरिकसेवा उत्तर प्रदेश जानकारी*\n\nयोजना का नाम: *${name}*\nलाभ: ${benefits}\nआवेदन करने का लिंक: ${url}`;
  }
  
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
};

// Close modal when clicking outside content card
document.getElementById('detailModal').addEventListener('click', (e) => {
  if (e.target.id === 'detailModal') {
    closeModal();
  }
});


// 5. Eligibility Form Wizard Logic
function setupEligibilityWizard() {
  const steps = document.querySelectorAll('.wizard-step-panel');
  const indicators = document.querySelectorAll('.progress-step');
  const progressBar = document.getElementById('wizardProgressBar');
  const btnNext = document.getElementById('btnWizardNext');
  const btnPrev = document.getElementById('btnWizardPrev');
  const form = document.getElementById('eligibilityForm');
  const resultsContainer = document.getElementById('eligibilityResults');
  
  let currentStep = 1;
  const maxSteps = 3;
  
  function updateWizardUI() {
    steps.forEach(step => {
      step.classList.remove('active');
      if (parseInt(step.dataset.step, 10) === currentStep) {
        step.classList.add('active');
      }
    });
    
    indicators.forEach(ind => {
      const stepNum = parseInt(ind.dataset.step, 10);
      ind.classList.remove('active', 'completed');
      if (stepNum === currentStep) {
        ind.classList.add('active');
      } else if (stepNum < currentStep) {
        ind.classList.add('completed');
      }
    });
    
    // Update progress line length
    const widthPercentage = ((currentStep - 1) / (maxSteps - 1)) * 100;
    progressBar.style.width = `${widthPercentage}%`;
    
    // Handle back button visibility
    if (currentStep === 1) {
      btnPrev.style.visibility = 'hidden';
    } else {
      btnPrev.style.visibility = 'visible';
    }
    
    // Handle next button labels
    if (currentStep === maxSteps) {
      btnNext.innerHTML = `${currentLanguage === 'hi' ? 'पात्रता खोजें' : 'Find Schemes'} <i class="fa-solid fa-magnifying-glass"></i>`;
      btnNext.style.background = 'linear-gradient(135deg, var(--accent-green) 0%, #059669 100%)';
    } else {
      btnNext.innerHTML = `${currentLanguage === 'hi' ? 'आगे' : 'Next'} <i class="fa-solid fa-arrow-right"></i>`;
      btnNext.style.background = '';
    }
  }
  
  btnNext.addEventListener('click', async () => {
    // Validate current step inputs
    const activePanel = document.querySelector('.wizard-step-panel.active');
    const inputs = activePanel.querySelectorAll('input, select');
    let valid = true;
    
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.reportValidity();
        valid = false;
      }
    });
    
    if (!valid) return;
    
    if (currentStep < maxSteps) {
      currentStep++;
      updateWizardUI();
    } else {
      // Submit wizard details to backend
      const age = document.getElementById('inputAge').value;
      const gender = document.getElementById('inputGender').value;
      const income = document.getElementById('inputIncome').value;
      const category = document.getElementById('inputCategory').value;
      const occupation = document.getElementById('inputOccupation').value;
      
      try {
        const response = await fetch('/api/eligibility', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ age, gender, income, category, occupation })
        });
        
        const matchedSchemes = await response.json();
        
        // Render results
        const matchedGrid = document.getElementById('matchedSchemesGrid');
        renderSchemesGrid(matchedSchemes, 'matchedSchemesGrid');
        
        const label = document.getElementById('matchCountLabel');
        if (currentLanguage === 'hi') {
          label.textContent = `आपकी पात्रता से मेल खाती हुई ${matchedSchemes.length} योजनाएं मिलीं।`;
        } else {
          label.textContent = `Found ${matchedSchemes.length} schemes matching your profile details.`;
        }
        
        resultsContainer.style.display = 'block';
        
        // Scroll to results cleanly
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        console.error("Error checking eligibility: ", err);
      }
    }
  });
  
  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateWizardUI();
    }
  });
}


// 6. Service Roadmaps System
const roadmapListIds = ['get-aadhaar', 'get-pan', 'get-voter-id', 'get-ration-card', 'get-certificates', 'start-business', 'apply-scholarships'];

function setupRoadmapsSystem() {
  const selectEl = document.getElementById('roadmapSelect');
  selectEl.innerHTML = '';
  
  const labels = {
    'get-aadhaar': { en: 'Apply for Aadhaar Card', hi: 'आधार कार्ड के लिए आवेदन' },
    'get-pan': { en: 'Apply for PAN Card', hi: 'पैन कार्ड के लिए आवेदन' },
    'get-voter-id': { en: 'Register for Voter ID', hi: 'वोटर आईडी के लिए पंजीकरण' },
    'get-ration-card': { en: 'Apply for Ration Card', hi: 'राशन कार्ड के लिए आवेदन' },
    'get-certificates': { en: 'Essential Certificates (Income/Caste/Domicile)', hi: 'प्रमाण पत्र (आय/जाति/निवास)' },
    'start-business': { en: 'Starting a Small Business', hi: 'लघु व्यवसाय शुरू करना' },
    'apply-scholarships': { en: 'Applying for Scholarships', hi: 'छात्रवृत्ति के लिए आवेदन' }
  };
  
  roadmapListIds.forEach((id) => {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = currentLanguage === 'hi' ? labels[id].hi : labels[id].en;
    selectEl.appendChild(opt);
  });
  
  function changeRoadmap() {
    const id = selectEl.value;
    document.getElementById('activeRoadmapTitle').textContent = currentLanguage === 'hi' ? labels[id].hi : labels[id].en;
    loadRoadmap(id);
  }
  
  selectEl.addEventListener('change', changeRoadmap);
  
  // Load first roadmap as default
  changeRoadmap();
}

async function loadRoadmap(id) {
  try {
    const response = await fetch(`/api/roadmaps/${id}`);
    const roadmap = await response.json();
    
    const titleEl = document.getElementById('activeRoadmapTitle');
    titleEl.textContent = currentLanguage === 'hi' ? roadmap.title.hi : roadmap.title.en;
    
    const timeline = document.getElementById('activeTimeline');
    timeline.innerHTML = '';
    
    roadmap.steps.forEach((step, index) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.id = `roadmap-${id}-step-${index}`;
      
      const stepTitle = currentLanguage === 'hi' ? step.title.hi : step.title.en;
      const stepDesc = currentLanguage === 'hi' ? (step.desc.desc_hi || step.desc.hi || step.desc.en) : step.desc.en;
      
      let linkHtml = '';
      if (step.links && step.links.length > 0) {
        step.links.forEach(lnk => {
          linkHtml += `<a href="${lnk.url}" target="_blank" class="btn btn-secondary" style="font-size:0.75rem; padding: 6px 12px; display:inline-flex; width:fit-content; margin-top:8px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${lnk.name}</a>`;
        });
      }

      item.innerHTML = `
        <div class="timeline-marker" onclick="toggleRoadmapStep('${id}', ${index})">
          <i class="fa-solid fa-check"></i>
        </div>
        <div class="timeline-content">
          <h4>${stepTitle}</h4>
          <p>${stepDesc}</p>
          ${linkHtml}
        </div>
      `;
      timeline.appendChild(item);
    });
  } catch (error) {
    console.error("Error loading roadmap: ", error);
  }
}

window.toggleRoadmapStep = function(roadmapId, stepIdx) {
  const item = document.getElementById(`roadmap-${roadmapId}-step-${stepIdx}`);
  if (item) {
    item.classList.toggle('completed');
  }
};


// 7. SevaMitra AI Chat Logic & Speech API
function setupChatSystem() {
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const btnSend = document.getElementById('btnChatSend');
  const btnVoice = document.getElementById('btnVoiceInput');
  const btnToggleSpeech = document.getElementById('btnToggleSpeech');
  
  // Voice Synthesis Toggle (Read Aloud)
  btnToggleSpeech.addEventListener('click', () => {
    speechSynthesizerEnabled = !speechSynthesizerEnabled;
    btnToggleSpeech.classList.toggle('active', speechSynthesizerEnabled);
    if (speechSynthesizerEnabled) {
      btnToggleSpeech.style.background = 'var(--accent-saffron-glow)';
      btnToggleSpeech.style.color = '#fff';
      btnToggleSpeech.style.borderColor = 'var(--accent-saffron)';
    } else {
      btnToggleSpeech.style.background = '';
      btnToggleSpeech.style.color = '';
      btnToggleSpeech.style.borderColor = '';
      window.speechSynthesis.cancel(); // Stop talking instantly
    }
  });

  async function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    // Add user bubble
    appendMessage(text, 'user');
    chatInput.value = '';
    
    // Add bot loading bubble
    const loadingId = appendMessage(`<div class="typing-indicator" style="display:flex; gap: 4px; padding: 4px;"><span style="width:8px; height:8px; background:var(--text-secondary); border-radius:50%; animation: bounce 1.4s infinite both;"></span><span style="width:8px; height:8px; background:var(--text-secondary); border-radius:50%; animation: bounce 1.4s infinite both; animation-delay: 0.2s;"></span><span style="width:8px; height:8px; background:var(--text-secondary); border-radius:50%; animation: bounce 1.4s infinite both; animation-delay: 0.4s;"></span></div>`, 'bot');
    
    // CSS bounce style inject for typing
    injectTypingAnimationStyles();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, lang: currentLanguage })
      });
      
      const data = await response.json();
      
      // Remove loading indicator
      document.getElementById(loadingId).remove();
      
      // Add official response
      appendMessage(data.reply, 'bot', true);
    } catch (err) {
      console.error(err);
      document.getElementById(loadingId).remove();
      appendMessage(currentLanguage === 'hi' ? 'क्षमा करें, सर्वर कनेक्शन में त्रुटि है।' : 'Sorry, there was an issue connecting to the assistant server.', 'bot');
    }
  }

  btnSend.addEventListener('click', handleSendMessage);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  });

  // Speech-to-Text Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';

    btnVoice.addEventListener('click', () => {
      // Update language configuration dynamically
      recognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
      
      if (btnVoice.classList.contains('listening')) {
        recognition.stop();
      } else {
        btnVoice.classList.add('listening');
        recognition.start();
      }
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      chatInput.value = transcript;
    };

    recognition.onend = () => {
      btnVoice.classList.remove('listening');
    };

    recognition.onerror = (e) => {
      console.error("Speech Recognition Error: ", e.error);
      btnVoice.classList.remove('listening');
    };
  } else {
    // Hide mic button if browser doesn't support Web Speech API
    btnVoice.style.display = 'none';
  }
}

function appendMessage(text, sender, isMarkdown = false) {
  const container = document.getElementById('chatMessages');
  const bubble = document.createElement('div');
  const id = `msg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  
  bubble.className = `message ${sender}`;
  bubble.id = id;
  
  if (isMarkdown && sender === 'bot') {
    bubble.innerHTML = formatMarkdown(text);
    
    // Add speak-back buttons for bot answers
    const actionRow = document.createElement('div');
    actionRow.className = 'chat-actions';
    actionRow.innerHTML = `
      <button class="chat-action-btn" onclick="speakMessageText('${id}')"><i class="fa-solid fa-volume-high"></i> Speak</button>
    `;
    bubble.appendChild(actionRow);
    
    // Auto speak if globally enabled
    if (speechSynthesizerEnabled) {
      const plainText = text.replace(/[\*\#\-\_\[\]\(\)]/g, '');
      speakText(plainText);
    }
  } else {
    bubble.textContent = text;
  }
  
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
  return id;
}

// Global Text-to-speech speaker
window.speakMessageText = function(msgId) {
  const bubble = document.getElementById(msgId);
  if (!bubble) return;
  
  // Strip buttons and HTML tags to get pure text for TTS
  const clone = bubble.cloneNode(true);
  const actions = clone.querySelector('.chat-actions');
  if (actions) actions.remove();
  
  const text = clone.innerText || clone.textContent;
  speakText(text);
};

function speakText(text) {
  window.speechSynthesis.cancel(); // Stop any active reading
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
  
  // Try to find a matching native voice
  const voices = window.speechSynthesis.getVoices();
  const matchingVoice = voices.find(v => v.lang.includes(currentLanguage === 'hi' ? 'hi' : 'en'));
  if (matchingVoice) {
    utterance.voice = matchingVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// Simple Markdown formatting helper for chatbot replies
function formatMarkdown(text) {
  let html = text;
  
  // Bold headings/subheadings (e.g. ### Header or **bold**)
  html = html.replace(/\#\#\#\s*(.*?)\n/g, '<h4 style="color:#fff; margin:10px 0 6px 0;">$1</h4>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Lists
  html = html.replace(/^\s*🔹\s*(.*?)$/gm, '<li style="margin-left:14px; list-style-type:square; margin-bottom:4px;">$1</li>');
  html = html.replace(/^\s*\-\s*(.*?)$/gm, '<li style="margin-left:14px; margin-bottom:4px;">$1</li>');
  
  // Linebreaks
  html = html.replace(/\n/g, '<br>');
  
  return html;
}

function injectTypingAnimationStyles() {
  if (document.getElementById('typing-bounce-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'typing-bounce-styles';
  style.textContent = `
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1.0); }
    }
  `;
  document.head.appendChild(style);
}


// 8. Jan Seva Kendra Locator
function getTehsilLabel(tehsil) {
  const prefixes = ["Sadar ", "Tehsil ", "Block "];
  let cleaned = tehsil;
  for (const p of prefixes) {
    if (cleaned.startsWith(p)) {
      cleaned = cleaned.replace(p, "").trim();
      break;
    }
  }
  return currentLanguage === 'hi' ? tehsil : cleaned;
}

function populateDistrictDropdown() {
  const select = document.getElementById('districtSelect');
  select.innerHTML = '';
  districtList.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.textContent = currentLanguage === 'hi' ? `${d.nameHi} / ${d.nameEn}` : `${d.nameEn} / ${d.nameHi}`;
    select.appendChild(opt);
  });
}

function populateTehsilDropdown(districtId) {
  const select = document.getElementById('tehsilSelect');
  select.innerHTML = '';
  const district = districtList.find(d => d.id === districtId);
  if (!district) return;
  
  district.tehsils.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = getTehsilLabel(t);
    select.appendChild(opt);
  });
}

function setupJskLocator() {
  populateDistrictDropdown();
  populateTehsilDropdown(districtList[0].id);
  
  const districtSelect = document.getElementById('districtSelect');
  const tehsilSelect = document.getElementById('tehsilSelect');
  
  districtSelect.addEventListener('change', () => {
    populateTehsilDropdown(districtSelect.value);
    updateJskCentersList();
  });
  tehsilSelect.addEventListener('change', () => {
    updateJskCentersList();
  });
  
  updateJskCentersList();
}

function updateJskCentersList() {
  const district = document.getElementById('districtSelect').value;
  const selectedTehsil = document.getElementById('tehsilSelect').value;
  const list = document.getElementById('centersList');
  list.innerHTML = '';
  
  let centers = jskDatabase[district] || [];
  
  if (selectedTehsil) {
    centers = centers.filter(c => c.tehsil === selectedTehsil);
  }
  
  if (centers.length === 0) {
    list.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;" data-en="No centers listed for this selection." data-hi="इस चयन के लिए कोई केंद्र सूचीबद्ध नहीं हैं।">${currentLanguage === 'hi' ? 'इस चयन के लिए कोई केंद्र सूचीबद्ध नहीं हैं।' : 'No centers listed for this selection.'}</p>`;
    return;
  }
  
  centers.forEach(center => {
    const card = document.createElement('div');
    card.className = 'center-card';
    
    card.innerHTML = `
      <div class="center-card-info">
        <h5>${center.name}</h5>
        <p><i class="fa-solid fa-location-dot" style="margin-right: 4px;"></i> ${center.address}</p>
      </div>
      <a href="tel:${center.phone.replace(/\s+/g, '')}" class="center-phone"><i class="fa-solid fa-phone"></i> ${center.phone}</a>
    `;
    list.appendChild(card);
  });
}
