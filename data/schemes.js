export const schemes = [
  {
    id: "up-post-matric-scholarship",
    name: {
      en: "UP Post-Matric Scholarship",
      hi: "यूपी पोस्ट-मैट्रिक छात्रवृत्ति"
    },
    category: "education",
    eligibility: {
      minAge: 15,
      maxAge: 35,
      occupations: ["student"],
      categories: ["all"],
      maxIncome: 200000,
      gender: "any"
    },
    benefits: {
      en: "Full/partial tuition fee reimbursement and a monthly maintenance allowance of up to ₹1,200.",
      hi: "पूर्ण/आंशिक ट्यूशन शुल्क प्रतिपूर्ति और ₹1,200 प्रति माह तक का रखरखाव भत्ता।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Income Certificate (issued by Tehsil)", hi: "आय प्रमाण पत्र (तहसील द्वारा जारी)" },
      { en: "Caste Certificate (if applicable)", hi: "जाति प्रमाण पत्र (यदि लागू हो)" },
      { en: "Fee Receipt & College Bonafide", hi: "फीस रसीद और कॉलेज बोनाफाइड" },
      { en: "Mark Sheet of Last Qualifying Exam", hi: "पिछली परीक्षा की अंकतालिका" },
      { en: "Bank Passbook Linked with Aadhaar", hi: "आधार से लिंक बैंक पासबुक" }
    ],
    procedure: {
      en: "1. Register on the scholarship.up.gov.in portal.\n2. Fill the application form, upload documents, and submit.\n3. Print the draft copy, verify it at your college, and submit the final hard copy with documents.",
      hi: "1. scholarship.up.gov.in पोर्टल पर पंजीकरण करें।\n2. आवेदन पत्र भरें, दस्तावेज अपलोड करें और सबमिट करें।\n3. ड्राफ्ट कॉपी प्रिंट करें, अपने कॉलेज में सत्यापित करें, और दस्तावेजों के साथ अंतिम हार्ड कॉपी जमा करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "60-90 Days", hi: "60-90 दिन" },
    officialUrl: "https://scholarship.up.gov.in"
  },
  {
    id: "up-pre-matric-scholarship",
    name: {
      en: "UP Pre-Matric Scholarship (Class 9-10)",
      hi: "यूपी प्री-मैट्रिक छात्रवृत्ति (कक्षा 9-10)"
    },
    category: "education",
    eligibility: {
      minAge: 12,
      maxAge: 18,
      occupations: ["student"],
      categories: ["all"],
      maxIncome: 200000,
      gender: "any"
    },
    benefits: {
      en: "Financial assistance of up to ₹3,000 per annum for books, stationery, and maintenance.",
      hi: "किताबों, स्टेशनरी और रखरखाव के लिए प्रति वर्ष ₹3,000 तक की वित्तीय सहायता।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Income Certificate", hi: "आय प्रमाण पत्र" },
      { en: "Caste Certificate", hi: "जाति प्रमाण पत्र" },
      { en: "Previous Class Marksheet (Class 8 or 9)", hi: "पिछली कक्षा की अंकतालिका (कक्षा 8 या 9)" },
      { en: "Bank Account details of student or parent", hi: "छात्र या माता-पिता के बैंक खाते का विवरण" }
    ],
    procedure: {
      en: "1. Go to the scholarship.up.gov.in portal.\n2. Select Pre-Matric registration option.\n3. Fill in details, get it certified by the school headmaster, and submit.",
      hi: "1. scholarship.up.gov.in पोर्टल पर जाएं।\n2. प्री-मैट्रिक पंजीकरण विकल्प चुनें।\n3. विवरण भरें, स्कूल के प्रधानाध्यापक द्वारा सत्यापित करवाएं और जमा करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-45 Days", hi: "30-45 दिन" },
    officialUrl: "https://scholarship.up.gov.in"
  },
  {
    id: "up-nmms-scholarship",
    name: {
      en: "National Means Cum Merit Scholarship (UP)",
      hi: "राष्ट्रीय साधन सह योग्यता छात्रवृत्ति (यूपी)"
    },
    category: "education",
    eligibility: {
      minAge: 13,
      maxAge: 16,
      occupations: ["student"],
      categories: ["all"],
      maxIncome: 350000,
      gender: "any"
    },
    benefits: {
      en: "Scholarship of ₹12,000 per year from Class 9 to Class 12 for students passing the NMMS exam.",
      hi: "NMMS परीक्षा उत्तीर्ण करने वाले छात्रों के लिए कक्षा 9 से कक्षा 12 तक ₹12,000 प्रति वर्ष की छात्रवृत्ति।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Income Certificate (under 3.5 Lakhs)", hi: "आय प्रमाण पत्र (3.5 लाख से कम)" },
      { en: "Class 7 Marksheet (minimum 55% marks)", hi: "कक्षा 7 की अंकतालिका (न्यूनतम 55% अंक)" },
      { en: "Caste Certificate (for reservations)", hi: "जाति प्रमाण पत्र (आरक्षण के लिए)" }
    ],
    procedure: {
      en: "1. Apply online when the notification is released by Entdata.co.in.\n2. Appear for the state-level written test.\n3. Qualified students must register on the National Scholarship Portal (NSP) for disbursement.",
      hi: "1. Entdata.co.in द्वारा अधिसूचना जारी होने पर ऑनलाइन आवेदन करें।\n2. राज्य स्तरीय लिखित परीक्षा में शामिल हों।\n3. योग्य छात्रों को भुगतान के लिए राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर पंजीकरण करना होगा।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "Annually", hi: "वार्षिक" },
    officialUrl: "https://entdata.co.in"
  },
  {
    id: "up-free-tablet-scheme",
    name: {
      en: "UP Free Tablet & Smartphone Scheme (Digi Shakti)",
      hi: "यूपी मुफ्त टैबलेट और स्मार्टफोन योजना (डिजी शक्ति)"
    },
    category: "education",
    eligibility: {
      minAge: 17,
      maxAge: 30,
      occupations: ["student"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Free high-configuration tablet or smartphone to support online education and skill development.",
      hi: "ऑनलाइन शिक्षा और कौशल विकास का समर्थन करने के लिए मुफ्त उच्च-कॉन्फ़िगरेशन टैबलेट या स्मार्टफोन।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "College ID Card & Bonafide Certificate", hi: "कॉलेज आईडी कार्ड और बोनाफाइड प्रमाणपत्र" },
      { en: "Current Enrollment/Admission Receipt", hi: "वर्तमान नामांकन/प्रवेश रसीद" },
      { en: "Domicile Certificate of UP", hi: "उत्तर प्रदेश का मूल निवास प्रमाण पत्र" }
    ],
    procedure: {
      en: "1. Students do not need to register individually.\n2. Universities upload student data onto the DigiShakti portal.\n3. Devices are distributed at colleges during official distribution camps.",
      hi: "1. छात्रों को व्यक्तिगत रूप से पंजीकरण करने की आवश्यकता नहीं है।\n2. विश्वविद्यालय डिजीशक्ति पोर्टल पर छात्र डेटा अपलोड करते हैं।\n3. आधिकारिक वितरण शिविरों के दौरान कॉलेजों में उपकरण वितरित किए जाते हैं।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "Depending on Academic Schedule", hi: "अकादमिक कार्यक्रम के आधार पर" },
    officialUrl: "https://digishakti.up.gov.in"
  },
  {
    id: "up-kanya-sumangala",
    name: {
      en: "UP Kanya Sumangala Yojana",
      hi: "यूपी कन्या सुमंगला योजना"
    },
    category: "welfare",
    eligibility: {
      minAge: 0,
      maxAge: 18,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: 300000,
      gender: "female"
    },
    benefits: {
      en: "Financial aid of ₹25,000 paid in 6 phases from birth to graduation/diploma admission.",
      hi: "₹25,000 की वित्तीय सहायता जो जन्म से लेकर स्नातक/डिप्लोमा प्रवेश तक 6 चरणों में दी जाती है।"
    },
    documents: [
      { en: "Birth Certificate of Girl Child", hi: "बालिका का जन्म प्रमाण पत्र" },
      { en: "Family Photograph (Joint)", hi: "पारिवारिक फोटो (संयुक्त)" },
      { en: "Income Certificate of Parents", hi: "माता-पिता का आय प्रमाण पत्र" },
      { en: "Domicile of Parents / Address Proof", hi: "माता-पिता का निवास प्रमाण पत्र / पता प्रमाण पत्र" },
      { en: "Affidavit regarding family size (Max 2 children)", hi: "परिवार के आकार के संबंध में हलफनामा (अधिकतम 2 बच्चे)" }
    ],
    procedure: {
      en: "1. Apply online at mksy.up.gov.in.\n2. Choose the specific stage/phase matching the child's age/education status.\n3. Upload documents and submit. Verification is done by Block Development Officer (BDO) or SDM.",
      hi: "1. mksy.up.gov.in पर ऑनलाइन आवेदन करें।\n2. बच्चे की उम्र/शिक्षा की स्थिति से मेल खाने वाले विशिष्ट चरण को चुनें।\n3. दस्तावेज अपलोड करें और जमा करें। सत्यापन खंड विकास अधिकारी (BDO) या SDM द्वारा किया जाता है।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "45-60 Days", hi: "45-60 दिन" },
    officialUrl: "https://mksy.up.gov.in"
  },
  {
    id: "up-shadi-anudan",
    name: {
      en: "UP Shadi Anudan Yojana (Marriage Grant)",
      hi: "यूपी शादी अनुदान योजना"
    },
    category: "welfare",
    eligibility: {
      minAge: 18,
      maxAge: 50,
      occupations: ["all"],
      categories: ["SC", "ST", "OBC", "General", "Minority"],
      maxIncome: 56460,
      gender: "female"
    },
    benefits: {
      en: "Direct financial grant of ₹20,000 to poor families for the marriage of their daughters.",
      hi: "गरीब परिवारों को उनकी बेटियों की शादी के लिए ₹20,000 का प्रत्यक्ष वित्तीय अनुदान।"
    },
    documents: [
      { en: "Aadhaar Card of Applicant (Parent) and Daughter", hi: "आवेदक (अभिभावक) और बेटी का आधार कार्ड" },
      { en: "Income Certificate (Tehsil verified)", hi: "आय प्रमाण पत्र (तहसील सत्यापित)" },
      { en: "Caste Certificate", hi: "जाति प्रमाण पत्र" },
      { en: "Marriage Invitation Card & Marriage Date Proof", hi: "शादी का निमंत्रण पत्र और शादी की तारीख का प्रमाण" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" }
    ],
    procedure: {
      en: "1. Register online on shadianudan.upsdc.gov.in at least 90 days before or within 90 days after marriage.\n2. Fill the specific form matching your category (SC/ST/OBC/General).\n3. Submit printout along with physical documents to District Welfare Office.",
      hi: "1. शादी से कम से कम 90 दिन पहले या 90 दिन बाद तक shadianudan.upsdc.gov.in पर ऑनलाइन पंजीकरण करें।\n2. अपनी श्रेणी (SC/ST/OBC/General) के अनुसार विशिष्ट फॉर्म भरें।\n3. जिला कल्याण कार्यालय में भौतिक दस्तावेजों के साथ प्रिंटआउट जमा करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-45 Days", hi: "30-45 दिन" },
    officialUrl: "https://shadianudan.upsdc.gov.in"
  },
  {
    id: "up-destitute-women-pension",
    name: {
      en: "UP Widow Pension Scheme (Nirashrit Mahila)",
      hi: "यूपी निराश्रित महिला पेंशन योजना (विधवा पेंशन)"
    },
    category: "pension",
    eligibility: {
      minAge: 18,
      maxAge: 120,
      occupations: ["widow", "unemployed", "all"],
      categories: ["all"],
      maxIncome: 200000,
      gender: "female"
    },
    benefits: {
      en: "Monthly pension of ₹1,000 deposited directly into the beneficiary's bank account every quarter.",
      hi: "₹1,000 प्रति माह की पेंशन जो प्रत्येक तिमाही में सीधे लाभार्थी के बैंक खाते में जमा की जाती है।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Husband's Death Certificate", hi: "पति का मृत्यु प्रमाण पत्र" },
      { en: "Income Certificate (under 2 Lakhs)", hi: "आय प्रमाण पत्र (2 लाख से कम)" },
      { en: "Domicile Certificate of UP", hi: "उत्तर प्रदेश का निवास प्रमाण पत्र" },
      { en: "Bank Account Details (Aadhaar Seeded)", hi: "बैंक खाता विवरण (आधार सीडेड)" }
    ],
    procedure: {
      en: "1. File an application on sspy-up.gov.in.\n2. Upload death certificate and income details.\n3. The application is reviewed by Gram Vikas Adhikari (Rural) or District Welfare Officer (Urban).",
      hi: "1. sspy-up.gov.in पर आवेदन दर्ज करें।\n2. मृत्यु प्रमाण पत्र और आय विवरण अपलोड करें।\n3. आवेदन की समीक्षा ग्राम विकास अधिकारी (ग्रामीण) या जिला कल्याण अधिकारी (शहरी) द्वारा की जाती है।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "60-90 Days", hi: "60-90 दिन" },
    officialUrl: "https://sspy-up.gov.in"
  },
  {
    id: "up-bhagyalaxmi-yojana",
    name: {
      en: "UP Bhagyalaxmi Yojana",
      hi: "यूपी भाग्यलक्ष्मी योजना"
    },
    category: "welfare",
    eligibility: {
      minAge: 0,
      maxAge: 1,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: 200000,
      gender: "female"
    },
    benefits: {
      en: "₹50,000 bond deposited in the name of the girl child (matures to ₹2 Lakhs at age 18) and ₹5,100 cash given to the mother.",
      hi: "बालिका के नाम पर ₹50,000 का बांड जमा (18 वर्ष की आयु में ₹2 लाख परिपक्व) और मां को ₹5,100 नकद दिए जाते हैं।"
    },
    documents: [
      { en: "Birth Registration Proof (within 1 year)", hi: "जन्म पंजीकरण प्रमाण (1 वर्ष के भीतर)" },
      { en: "Parent's Income Certificate", hi: "माता-पिता का आय प्रमाण पत्र" },
      { en: "Address Proof & Domicile of UP", hi: "उत्तर प्रदेश का पता प्रमाण और निवास प्रमाण पत्र" },
      { en: "Aadhaar Card of Parents", hi: "माता-पिता का आधार कार्ड" }
    ],
    procedure: {
      en: "1. Apply via nearby Anganwadi Center or through UP Mahila Kalyan portal.\n2. Submit physical copy to the Child Development Project Officer (CDPO) for verification.",
      hi: "1. नजदीकी आंगनवाड़ी केंद्र या यूपी महिला कल्याण पोर्टल के माध्यम से आवेदन करें।\n2. सत्यापन के लिए बाल विकास परियोजना अधिकारी (CDPO) को भौतिक प्रति जमा करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "90 Days", hi: "90 दिन" },
    officialUrl: "https://wcd.up.nic.in"
  },
  {
    id: "pm-kisan-up",
    name: {
      en: "PM Kisan Samman Nidhi (UP)",
      hi: "पीएम किसान सम्मान निधि (यूपी)"
    },
    category: "agriculture",
    eligibility: {
      minAge: 18,
      maxAge: 100,
      occupations: ["farmer"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Annual financial support of ₹6,000 paid in three equal installments of ₹2,000 directly to landholder farmers.",
      hi: "भूमिधारक किसानों को सीधे ₹2,000 की तीन समान किस्तों में ₹6,000 की वार्षिक वित्तीय सहायता।"
    },
    documents: [
      { en: "Land Ownership Record (Khatauni / Land Mutation Copy)", hi: "भूमि स्वामित्व रिकॉर्ड (खतौनी / दाखिल खारिज)" },
      { en: "Aadhaar Card (Mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Bank Passbook linked with Aadhaar", hi: "आधार से लिंक बैंक पासबुक" },
      { en: "Mobile number registered with Aadhaar", hi: "आधार में पंजीकृत मोबाइल नंबर" }
    ],
    procedure: {
      en: "1. Register on pmkisan.gov.in under 'New Farmer Registration'.\n2. Provide land details (Khewat/Khatauni numbers).\n3. State revenue officials (Lekhpal) verify details before disbursement.",
      hi: "1. pmkisan.gov.in पर 'न्यू फार्मर रजिस्ट्रेशन' के तहत पंजीकरण करें।\n2. भूमि विवरण (खेवट/खतौनी संख्या) प्रदान करें।\n3. राज्य के राजस्व अधिकारी (लेखपाल) भुगतान से पहले विवरण का सत्यापन करते हैं।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-60 Days", hi: "30-60 दिन" },
    officialUrl: "https://pmkisan.gov.in"
  },
  {
    id: "up-crop-loan-waiver",
    name: {
      en: "UP Crop Loan Waiver Scheme (Karj Mafi)",
      hi: "यूपी फसल ऋण मोचन योजना (कर्ज माफी)"
    },
    category: "agriculture",
    eligibility: {
      minAge: 18,
      maxAge: 90,
      occupations: ["farmer"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Waiver of outstanding crop loans of up to ₹1,00,000 taken from cooperative or nationalized banks.",
      hi: "सहकारी या राष्ट्रीयकृत बैंकों से लिए गए ₹1,00,000 तक के बकाया फसल ऋण की माफी।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Kisan Credit Card (KCC) details & Loan Account Passbook", hi: "किसान क्रेडिट कार्ड (KCC) विवरण और ऋण खाता पासबुक" },
      { en: "Land Proof (Bhulekh / Khatauni)", hi: "भूमि प्रमाण (भूलेख / खतौनी)" }
    ],
    procedure: {
      en: "1. Visit the upkisankarjrahat.upsdc.gov.in portal.\n2. Search your loan waiver status using KCC account and Aadhaar.\n3. In case of issues, file a grievance online or with District Agriculture Office.",
      hi: "1. upkisankarjrahat.upsdc.gov.in पोर्टल पर जाएं।\n2. KCC खाते और आधार का उपयोग करके अपनी ऋण माफी की स्थिति खोजें।\n3. समस्या होने पर ऑनलाइन या जिला कृषि कार्यालय में शिकायत दर्ज करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "Subject to scheme cycles", hi: "योजना चक्र के अधीन" },
    officialUrl: "https://upkisankarjrahat.upsdc.gov.in"
  },
  {
    id: "up-kisan-uday",
    name: {
      en: "UP Kisan Uday Yojana (Solar Pump)",
      hi: "यूपी किसान उदय योजना (सोलर पंप)"
    },
    category: "agriculture",
    eligibility: {
      minAge: 18,
      maxAge: 85,
      occupations: ["farmer"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Free energy-efficient solar water pumps (5 HP and 7.5 HP) with free maintenance for 5 years.",
      hi: "5 वर्षों के मुफ्त रखरखाव के साथ मुफ्त ऊर्जा-कुशल सौर जल पंप (5 HP और 7.5 HP)।"
    },
    documents: [
      { en: "Land Registration Details", hi: "भूमि पंजीकरण विवरण" },
      { en: "UP Farmer Registration ID (Kisan Panjiyan Number)", hi: "यूपी किसान पंजीकरण आईडी (किसान पंजीकरण संख्या)" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" }
    ],
    procedure: {
      en: "1. Register on upagriculture.com.\n2. Complete registration on the solar pump booking page.\n3. Make token deposit (if applicable) and get land verification done by Lekhpal.",
      hi: "1. upagriculture.com पर पंजीकरण करें।\n2. सोलर पंप बुकिंग पेज पर पंजीकरण पूरा करें।\n3. टोकन राशि जमा करें (यदि लागू हो) और लेखपाल द्वारा भूमि का सत्यापन करवाएं।"
    },
    fee: { en: "Subsidized / Free based on category", hi: "श्रेणी के आधार पर रियायती / मुफ्त" },
    processingTime: { en: "60-90 Days", hi: "60-90 दिन" },
    officialUrl: "http://upagriculture.com"
  },
  {
    id: "up-farm-machinery-subsidy",
    name: {
      en: "UP Farm Machinery Subsidy Scheme",
      hi: "यूपी कृषि यंत्र अनुदान योजना"
    },
    category: "agriculture",
    eligibility: {
      minAge: 18,
      maxAge: 90,
      occupations: ["farmer"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Get 40% to 50% subsidy on agricultural equipment like tractors, rotavators, seed drills, and threshers.",
      hi: "ट्रैक्टर, रोटावेटर, सीड ड्रिल और थ्रेशर जैसे कृषि उपकरणों पर 40% से 50% तक सब्सिडी प्राप्त करें।"
    },
    documents: [
      { en: "Farmer Registration Copy (upagriculture.com)", hi: "किसान पंजीकरण प्रति (upagriculture.com)" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Bank Details (to receive subsidy)", hi: "बैंक विवरण (सब्सिडी प्राप्त करने के लिए)" },
      { en: "Land Khatauni Copy", hi: "भूमि खतौनी प्रति" }
    ],
    procedure: {
      en: "1. Log in to upagriculture.com and book agricultural machinery online.\n2. Deposit security money/token money online.\n3. Purchase machinery from registered dealer and upload invoice to receive subsidy.",
      hi: "1. upagriculture.com पर लॉग इन करें और कृषि मशीनरी ऑनलाइन बुक करें।\n2. जमानत राशि/टोकन राशि ऑनलाइन जमा करें।\n3. पंजीकृत डीलर से मशीनरी खरीदें और सब्सिडी प्राप्त करने के लिए चालान अपलोड करें।"
    },
    fee: { en: "Token money varies by machinery", hi: "टोकन राशि मशीनरी के अनुसार भिन्न होती है" },
    processingTime: { en: "30-45 Days after invoice upload", hi: "चालान अपलोड करने के 30-45 दिन बाद" },
    officialUrl: "http://upagriculture.com"
  },
  {
    id: "up-cane-grievance-portal",
    name: {
      en: "UP Sugarcane Portal (Ganna Parchi)",
      hi: "यूपी गन्ना पर्ची एवं कैलेंडर पोर्टल (E-Ganna)"
    },
    category: "agriculture",
    eligibility: {
      minAge: 18,
      maxAge: 100,
      occupations: ["farmer"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Online access to sugarcane supply calendar, weight slips (parchi), payments status, and mill delivery logs.",
      hi: "गन्ना आपूर्ति कैलेंडर, वजन पर्ची (पर्ची), भुगतान की स्थिति और मिल डिलीवरी लॉग की ऑनलाइन पहुंच।"
    },
    documents: [
      { en: "Sugarcane Grower Code & Ganna Committee details", hi: "गन्ना उत्पादक कोड और गन्ना समिति का विवरण" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Bank Account details linked with sugar mill database", hi: "चीनी मिल डेटाबेस से जुड़ा बैंक खाता विवरण" }
    ],
    procedure: {
      en: "1. Visit caneup.in or download the E-Ganna App.\n2. Search your details by choosing your District, Factory, Committee, and Village.\n3. Track your supply tickets and raise grievances directly on the portal.",
      hi: "1. caneup.in पर जाएं या E-Ganna ऐप डाउनलोड करें।\n2. अपने जिले, फैक्ट्री, समिति और गांव का चयन करके अपना विवरण खोजें।\n3. अपने आपूर्ति टिकटों को ट्रैक करें और पोर्टल पर सीधे शिकायत दर्ज करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "Instant Access", hi: "तत्काल पहुंच" },
    officialUrl: "http://caneup.in"
  },
  {
    id: "up-old-age-pension",
    name: {
      en: "UP Old Age Pension Scheme (Vridha Pension)",
      hi: "यूपी वृद्धावस्था पेंशन योजना"
    },
    category: "pension",
    eligibility: {
      minAge: 60,
      maxAge: 120,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: 46080,
      gender: "any"
    },
    benefits: {
      en: "Financial assistance of ₹1,000 per month, disbursed quarterly to senior citizens living below poverty line.",
      hi: "गरीबी रेखा से नीचे रहने वाले वरिष्ठ नागरिकों को त्रैमासिक रूप से वितरित ₹1,000 प्रति माह की वित्तीय सहायता।"
    },
    documents: [
      { en: "Aadhaar Card & Birth Certificate (Proof of Age 60+)", hi: "आधार कार्ड & जन्म प्रमाण पत्र (60+ आयु का प्रमाण)" },
      { en: "Income Certificate (Tehsil verified)", hi: "आय प्रमाण पत्र (तहसील सत्यापित)" },
      { en: "Domicile Certificate / Residence Proof", hi: "निवास प्रमाण पत्र / पता प्रमाण पत्र" },
      { en: "Passport Size Photograph", hi: "पासपोर्ट साइज फोटो" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" }
    ],
    procedure: {
      en: "1. Apply online on sspy-up.gov.in.\n2. Fill the application form, upload documents, and submit.\n3. Submit the printout and hard copy documents to District Social Welfare Office (Vikas Bhawan).",
      hi: "1. sspy-up.gov.in पर ऑनलाइन आवेदन करें।\n2. आवेदन पत्र भरें, दस्तावेज अपलोड करें और जमा करें।\n3. जिला समाज कल्याण कार्यालय (विकास भवन) में प्रिंटआउट और हार्ड कॉपी दस्तावेज जमा करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "60-90 Days", hi: "60-90 दिन" },
    officialUrl: "https://sspy-up.gov.in"
  },
  {
    id: "up-divyangjan-pension",
    name: {
      en: "UP Disability Pension Scheme (Divyangjan)",
      hi: "यूपी दिव्यांग पेंशन योजना"
    },
    category: "pension",
    eligibility: {
      minAge: 18,
      maxAge: 120,
      occupations: ["all", "disabled"],
      categories: ["all"],
      maxIncome: 46080,
      gender: "any"
    },
    benefits: {
      en: "Monthly pension of ₹1,000 to disabled individuals with 40% or more disability, distributed quarterly.",
      hi: "40% या अधिक विकलांगता वाले विकलांग व्यक्तियों को ₹1,000 प्रति माह की पेंशन, जिसे त्रैमासिक रूप से वितरित किया जाता है।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Disability Certificate (minimum 40% disability, issued by CMO)", hi: "विकलांगता प्रमाण पत्र (न्यूनतम 40% विकलांगता, CMO द्वारा जारी)" },
      { en: "Income Certificate (under limits)", hi: "आय प्रमाण पत्र (सीमा के भीतर)" },
      { en: "Domicile Certificate of UP", hi: "उत्तर प्रदेश का निवास प्रमाण पत्र" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" }
    ],
    procedure: {
      en: "1. Go to sspy-up.gov.in and click on Divyang Pension Scheme.\n2. Fill details and upload the CMO-issued disability certificate.\n3. Hard copy of application must be submitted to District Divyangjan Welfare Office.",
      hi: "1. sspy-up.gov.in पर जाएं और दिव्यांग पेंशन योजना पर क्लिक करें।\n2. विवरण भरें और CMO द्वारा जारी विकलांगता प्रमाण पत्र अपलोड करें।\n3. आवेदन की हार्ड कॉपी जिला दिव्यांगजन कल्याण कार्यालय में जमा करनी होगी।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "60-90 Days", hi: "60-90 दिन" },
    officialUrl: "https://sspy-up.gov.in"
  },
  {
    id: "up-shramik-pension",
    name: {
      en: "UP Shramik Pension Yojana (BOCW)",
      hi: "यूपी श्रमिक पेंशन योजना (भवन निर्माण कामगार)"
    },
    category: "pension",
    eligibility: {
      minAge: 60,
      maxAge: 100,
      occupations: ["laborer"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Monthly pension of ₹1,000 to registered construction workers upon reaching the age of 60.",
      hi: "60 वर्ष की आयु प्राप्त करने पर पंजीकृत निर्माण श्रमिकों को ₹1,000 प्रति माह की पेंशन।"
    },
    documents: [
      { en: "Shramik Registration Card (BOCW Board Card)", hi: "श्रमिक पंजीकरण कार्ड (BOCW बोर्ड कार्ड)" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "UP Domicile Certificate", hi: "यूपी निवास प्रमाण पत्र" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" }
    ],
    procedure: {
      en: "1. Register on upbocw.in as a construction laborer.\n2. Ensure continuous active membership of at least 3 years.\n3. Apply for labor pension scheme on the portal upon turning 60.",
      hi: "1. निर्माण श्रमिक के रूप में upbocw.in पर पंजीकरण करें।\n2. कम से कम 3 वर्ष की निरंतर सक्रिय सदस्यता सुनिश्चित करें।\n3. 60 वर्ष के होने पर पोर्टल पर श्रमिक पेंशन योजना के लिए आवेदन करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "45-60 Days", hi: "45-60 दिन" },
    officialUrl: "https://upbocw.in"
  },
  {
    id: "pm-shram-yogi-up",
    name: {
      en: "PM Shram Yogi Maan-dhan (UP)",
      hi: "प्रधानमंत्री श्रम योगी मान-धन योजना"
    },
    category: "pension",
    eligibility: {
      minAge: 18,
      maxAge: 40,
      occupations: ["laborer", "unemployed", "all"],
      categories: ["all"],
      maxIncome: 180000,
      gender: "any"
    },
    benefits: {
      en: "Assured monthly pension of ₹3,000 after attaining the age of 60 years. Involves 50:50 contribution by worker and Govt.",
      hi: "60 वर्ष की आयु प्राप्त करने के बाद ₹3,000 की सुनिश्चित मासिक पेंशन। इसमें श्रमिक और सरकार द्वारा 50:50 योगदान शामिल है।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Savings Bank Account details / Jan Dhan Account Details", hi: "बचत बैंक खाता विवरण / जन धन खाता विवरण" },
      { en: "Consent form for auto-debit of monthly premium", hi: "मासिक प्रीमियम के ऑटो-डेबिट के लिए सहमति पत्र" }
    ],
    procedure: {
      en: "1. Visit the nearest Jan Seva Kendra / CSC.\n2. Carry Aadhaar Card and Bank Passbook.\n3. Complete biometric authentication. Pay the first month's contribution in cash.",
      hi: "1. नजदीकी जन सेवा केंद्र / CSC पर जाएं।\n2. आधार कार्ड और बैंक पासबुक साथ ले जाएं।\n3. बायोमेट्रिक सत्यापन पूरा करें। पहले महीने का योगदान नकद भुगतान करें।"
    },
    fee: { en: "Monthly premium ₹55 to ₹200 based on entry age", hi: "प्रवेश आयु के आधार पर मासिक प्रीमियम ₹55 से ₹200" },
    processingTime: { en: "Instant Enrollment", hi: "तत्काल नामांकन" },
    officialUrl: "https://maandhan.in"
  },
  {
    id: "up-yuva-swarozgar",
    name: {
      en: "UP Mukhyamantri Yuva Swarozgar Yojana",
      hi: "यूपी मुख्यमंत्री युवा स्वरोजगार योजना"
    },
    category: "business",
    eligibility: {
      minAge: 18,
      maxAge: 40,
      occupations: ["unemployed", "business_owner", "all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Loan of up to ₹25 Lakhs for industrial sector and ₹10 Lakhs for service sector, with a government subsidy of up to 25%.",
      hi: "औद्योगिक क्षेत्र के लिए ₹25 लाख तक और सेवा क्षेत्र के लिए ₹10 लाख तक का ऋण, साथ ही 25% तक की सरकारी सब्सिडी।"
    },
    documents: [
      { en: "Detailed Project Report (DPR) / Business Proposal", hi: "विस्तृत परियोजना रिपोर्ट (DPR) / व्यवसाय प्रस्ताव" },
      { en: "Educational Qualification (Class 10 minimum pass certificate)", hi: "शैक्षिक योग्यता (कक्षा 10 न्यूनतम पास प्रमाणपत्र)" },
      { en: "Aadhaar Card & Domicile of UP", hi: "आधार कार्ड और उत्तर प्रदेश का निवास प्रमाण पत्र" },
      { en: "Caste Certificate (for reservation and higher subsidy benefits)", hi: "जाति प्रमाण पत्र (आरक्षण और उच्च सब्सिडी लाभों के लिए)" }
    ],
    procedure: {
      en: "1. Register on the diupmsme.upsdc.gov.in portal.\n2. Upload the business proposal and DPR.\n3. The application goes to the District Industrial Center (DIC) which recommends it to banks for approval.",
      hi: "1. diupmsme.upsdc.gov.in पोर्टल पर पंजीकरण करें।\n2. व्यवसाय प्रस्ताव और DPR अपलोड करें।\n3. आवेदन जिला औद्योगिक केंद्र (DIC) के पास जाता है जो इसे मंजूरी के लिए बैंकों को भेजता है।"
    },
    fee: { en: "Free application fee", hi: "निःशुल्क आवेदन" },
    processingTime: { en: "60-90 Days", hi: "60-90 दिन" },
    officialUrl: "https://diupmsme.upsdc.gov.in"
  },
  {
    id: "up-odop-training",
    name: {
      en: "UP One District One Product (ODOP) Toolkit Scheme",
      hi: "यूपी एक जनपद एक उत्पाद (ODOP) टूलकिट योजना"
    },
    category: "business",
    eligibility: {
      minAge: 18,
      maxAge: 60,
      occupations: ["laborer", "business_owner", "all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "10-day free skill development training related to the local district product, free advanced toolkits, and financial linkages.",
      hi: "स्थानीय जिला उत्पाद से संबंधित 10-दिवसीय मुफ्त कौशल विकास प्रशिक्षण, मुफ्त उन्नत टूलकिट और वित्तीय संबंध।"
    },
    documents: [
      { en: "Aadhaar Card & Address Proof of UP", hi: "आधार कार्ड और उत्तर प्रदेश का पता प्रमाण" },
      { en: "Traditional Art / Craft Certificate (if any) or declaration", hi: "पारंपरिक कला / शिल्प प्रमाणपत्र (यदि कोई हो) या स्व-घोषणा" },
      { en: "Bank Passbook Details", hi: "बैंक पासबुक का विवरण" }
    ],
    procedure: {
      en: "1. Register on diupmsme.upsdc.gov.in under ODOP scheme link.\n2. Complete online verification. The candidates are called for training at DIC center.\n3. Receive a free industrial toolkit worth ₹5,000-₹15,000 on completion.",
      hi: "1. ODOP योजना लिंक के तहत diupmsme.upsdc.gov.in पर पंजीकरण करें।\n2. ऑनलाइन सत्यापन पूरा करें। उम्मीदवारों को DIC केंद्र में प्रशिक्षण के लिए बुलाया जाता है।\n3. पूरा होने पर ₹5,000-₹15,000 मूल्य का मुफ्त औद्योगिक टूलकिट प्राप्त करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-45 Days", hi: "30-45 दिन" },
    officialUrl: "https://diupmsme.upsdc.gov.in"
  },
  {
    id: "up-vishwakarma-shram",
    name: {
      en: "UP Vishwakarma Shram Samman Yojana",
      hi: "यूपी विश्वकर्मा श्रम सम्मान योजना"
    },
    category: "business",
    eligibility: {
      minAge: 18,
      maxAge: 65,
      occupations: ["laborer", "all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Free training and advanced toolkits for traditional artisans (barbers, tailors, carpenters, blacksmiths, potters, etc.) to start self-employment.",
      hi: "पारंपरिक कारीगरों (नाई, दर्जी, बढ़ई, लोहार, कुम्हार आदि) को स्व-रोजगार शुरू करने के लिए मुफ्त प्रशिक्षण और उन्नत टूलकिट।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Domicile Certificate of UP", hi: "उत्तर प्रदेश का निवास प्रमाण पत्र" },
      { en: "Traditional Trade Certificate / Lekhpal Verification Report", hi: "पारंपरिक व्यापार प्रमाण पत्र / लेखपाल सत्यापन रिपोर्ट" },
      { en: "Passport size photograph", hi: "पासपोर्ट साइज फोटो" }
    ],
    procedure: {
      en: "1. Submit application online at diupmsme.upsdc.gov.in.\n2. Select your trade/craft (e.g. Tailoring, Carpentry).\n3. Join the training and receive the toolkit upon graduation.",
      hi: "1. diupmsme.upsdc.gov.in पर ऑनलाइन आवेदन जमा करें।\n2. अपने व्यापार/शिल्प (जैसे सिलाई, बढ़ईगीरी) का चयन करें।\n3. प्रशिक्षण में शामिल हों और स्नातक होने पर टूलकिट प्राप्त करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-60 Days", hi: "30-60 दिन" },
    officialUrl: "https://diupmsme.upsdc.gov.in"
  },
  {
    id: "up-startup-policy",
    name: {
      en: "UP Startup Policy Incentives",
      hi: "यूपी स्टार्टअप नीति प्रोत्साहन"
    },
    category: "business",
    eligibility: {
      minAge: 18,
      maxAge: 45,
      occupations: ["business_owner"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Monthly sustenance allowance of ₹17,500 for one year, seed funding up to ₹5 Lakhs, and free incubation support.",
      hi: "एक वर्ष के लिए ₹17,500 का मासिक निर्वाह भत्ता, ₹5 लाख तक की सीड फंडिंग और मुफ्त इनक्यूबेशन सहायता।"
    },
    documents: [
      { en: "Startup India DPIIT Recognition Certificate", hi: "स्टार्टअप इंडिया DPIIT मान्यता प्रमाणपत्र" },
      { en: "Detailed Business Pitch & Deck", hi: "विस्तृत व्यापार पिच और डेक" },
      { en: "Incorporation Document (LLP / PVT LTD)", hi: "निगमन दस्तावेज (LLP / PVT LTD)" },
      { en: "UP Registered Office Address Proof", hi: "यूपी पंजीकृत कार्यालय का पता प्रमाण" }
    ],
    procedure: {
      en: "1. Get DPIIT registration on startupindia.gov.in.\n2. Register on startuninup.in, applying for sustenance allowance/seed fund.\n3. Pitch to the screening committee for approval.",
      hi: "1. startupindia.gov.in पर DPIIT पंजीकरण प्राप्त करें।\n2. startupinup.in पर पंजीकरण करें, निर्वाह भत्ता/सीड फंड के लिए आवेदन करें।\n3. अनुमोदन के लिए स्क्रीनिंग कमेटी के समक्ष पिच पेश करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "90-120 Days", hi: "90-120 दिन" },
    officialUrl: "https://startupinup.in"
  },
  {
    id: "ayushman-bharat-up",
    name: {
      en: "Ayushman Bharat UP (Sachan / Golden Card)",
      hi: "आयुष्मान भारत यूपी (गोल्डन कार्ड)"
    },
    category: "health-housing",
    eligibility: {
      minAge: 0,
      maxAge: 110,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Free cashless health insurance cover of up to ₹5,00,000 per family per year at empaneled public & private hospitals.",
      hi: "पैनल में शामिल सरकारी और निजी अस्पतालों में प्रति परिवार प्रति वर्ष ₹5,00,000 तक का मुफ्त कैशलेस स्वास्थ्य बीमा कवर।"
    },
    documents: [
      { en: "Ration Card (under eligible category)", hi: "राशन कार्ड (योग्य श्रेणी के अंतर्गत)" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "PMJAY Letter containing HHID number (if received)", hi: "HHID नंबर वाला PMJAY पत्र (यदि प्राप्त हुआ हो)" }
    ],
    procedure: {
      en: "1. Search eligibility using your Mobile Number or Ration Card on beneficiary.nha.gov.in.\n2. Visit nearest CSC/Arogya Mitra at a Government Hospital for e-KYC.\n3. Download and print the Golden Card.",
      hi: "1. beneficiary.nha.gov.in पर अपने मोबाइल नंबर या राशन कार्ड का उपयोग करके पात्रता खोजें।\n2. ई-केवाईसी के लिए सरकारी अस्पताल में नजदीकी सीएससी/आरोग्य मित्र पर जाएं।\n3. गोल्डन कार्ड डाउनलोड और प्रिंट करें।"
    },
    fee: { en: "Free at government counters, ₹30 at CSC", hi: "सरकारी काउंटरों पर मुफ्त, सीएससी पर ₹30" },
    processingTime: { en: "Same Day / Within 48 Hours", hi: "उसी दिन / 48 घंटे के भीतर" },
    officialUrl: "https://beneficiary.nha.gov.in"
  },
  {
    id: "up-jan-arogya",
    name: {
      en: "UP Mukhyamantri Jan Arogya Yojana",
      hi: "यूपी मुख्यमंत्री जन आरोग्य योजना"
    },
    category: "health-housing",
    eligibility: {
      minAge: 0,
      maxAge: 110,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Identical benefits to Ayushman Bharat (₹5 Lakhs/year coverage) for families not registered under SECC 2011 lists.",
      hi: "SECC 2011 सूचियों के तहत पंजीकृत नहीं होने वाले परिवारों के लिए आयुष्मान भारत (₹5 लाख/वर्ष कवरेज) के समान लाभ।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "BPL Ration Card / Antyodaya Card", hi: "बीपीएल राशन कार्ड / अंत्योदय कार्ड" },
      { en: "Labor registration certificate (for registered laborers)", hi: "श्रमिक पंजीकरण प्रमाणपत्र (पंजीकृत श्रमिकों के लिए)" }
    ],
    procedure: {
      en: "1. Visited nearest government hospital or community health center (CHC).\n2. Consult the Ayushman Coordinator / Arogya Mitra.\n3. Get verification and printout of card.",
      hi: "1. नजदीकी सरकारी अस्पताल या सामुदायिक स्वास्थ्य केंद्र (CHC) पर जाएं।\n2. आयुष्मान समन्वयक / आरोग्य मित्र से परामर्श करें।\n3. सत्यापन प्राप्त करें और कार्ड का प्रिंटआउट लें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "3-5 Days", hi: "3-5 दिन" },
    officialUrl: "https://beneficiary.nha.gov.in"
  },
  {
    id: "pm-awas-gramin-up",
    name: {
      en: "PM Awas Yojana - Gramin (UP)",
      hi: "प्रधानमंत्री आवास योजना - ग्रामीण (यूपी)"
    },
    category: "health-housing",
    eligibility: {
      minAge: 18,
      maxAge: 100,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Financial assistance of ₹1,20,000 in plains and ₹1,30,000 in hilly areas to build permanent houses, plus ₹12,000 for toilet.",
      hi: "पक्के घर बनाने के लिए मैदानी इलाकों में ₹1,20,000 और पहाड़ी इलाकों में ₹1,30,000 की वित्तीय सहायता, साथ ही शौचालय के लिए ₹12,000।"
    },
    documents: [
      { en: "Aadhaar Card of all family members", hi: "परिवार के सभी सदस्यों का आधार कार्ड" },
      { en: "MGNREGA Job Card (mandatory for daily wage work link)", hi: "मनरेगा जॉब कार्ड (दैनिक मजदूरी लिंक के लिए अनिवार्य)" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" },
      { en: "Swachh Bharat Mission (SBM) registration number", hi: "स्वच्छ भारत मिशन (SBM) पंजीकरण संख्या" }
    ],
    procedure: {
      en: "1. Beneficiaries are identified using SECC 2011 and Awas+ surveys.\n2. Contact your Gram Panchayat / Gram Sevak to check your name in the beneficiary list.\n3. Verification is done, and funds are disbursed in 3 installments based on geotagged house construction stages.",
      hi: "1. लाभार्थियों की पहचान SECC 2011 और आवास+ सर्वेक्षणों का उपयोग करके की जाती है।\n2. लाभार्थी सूची में अपना नाम जांचने के लिए अपनी ग्राम पंचायत / ग्राम सेवक से संपर्क करें।\n3. सत्यापन किया जाता है, और जियोटैग किए गए मकान निर्माण चरणों के आधार पर 3 किश्तों में धन वितरित किया जाता है।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "Subject to allotment batches", hi: "आवंटन बैचों के अधीन" },
    officialUrl: "https://pmayg.nic.in"
  },
  {
    id: "pm-awas-urban-up",
    name: {
      en: "PM Awas Yojana - Urban (UP)",
      hi: "प्रधानमंत्री आवास योजना - शहरी (यूपी)"
    },
    category: "health-housing",
    eligibility: {
      minAge: 18,
      maxAge: 100,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: 300000,
      gender: "any"
    },
    benefits: {
      en: "Financial subsidy of ₹2,50,000 (Central + State share) for building or repairing a house under the Beneficiary Led Construction (BLC) vertical.",
      hi: "लाभार्थी के नेतृत्व में निर्माण (BLC) के तहत घर बनाने या मरम्मत के लिए ₹2,50,000 की वित्तीय सब्सिडी (केंद्र + राज्य का हिस्सा)।"
    },
    documents: [
      { en: "Land Registry / Title Deeds of construction site", hi: "निर्माण स्थल की भूमि रजिस्ट्री / स्वामित्व विलेख" },
      { en: "Affidavit that beneficiary does not own any other pucca house in India", hi: "हलफनामा कि लाभार्थी के पास भारत में कोई अन्य पक्का घर नहीं है" },
      { en: "Aadhaar Card & Income Certificate (under 3 Lakhs)", hi: "आधार कार्ड और आय प्रमाण पत्र (3 लाख से कम)" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" }
    ],
    procedure: {
      en: "1. Apply online on the official PMAY portal or through the local Municipal Office (Nagar Palika/Nagar Nigam).\n2. Geo-tagging of the vacant plot is conducted by municipal engineers.\n3. Installments are disbursed directly to bank account in 3 stages.",
      hi: "1. आधिकारिक PMAY पोर्टल पर या स्थानीय नगर पालिका कार्यालय (नगर पालिका/नगर निगम) के माध्यम से ऑनलाइन आवेदन करें।\n2. नगर पालिका इंजीनियरों द्वारा खाली भूखंड का जियो-टैगिंग किया जाता है।\n3. किश्तें सीधे 3 चरणों में बैंक खाते में वितरित की जाती हैं।"
    },
    fee: { en: "Free / Minimal CSC form charges", hi: "मुफ्त / न्यूनतम सीएससी फॉर्म शुल्क" },
    processingTime: { en: "60-120 Days", hi: "60-120 दिन" },
    officialUrl: "https://pmaymis.gov.in"
  },
  {
    id: "up-free-borewell",
    name: {
      en: "UP Free Borewell Scheme (Nishulk Boring)",
      hi: "यूपी निःशुल्क बोरिंग योजना"
    },
    category: "agriculture",
    eligibility: {
      minAge: 18,
      maxAge: 95,
      occupations: ["farmer"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Free borewell drilling and installation of hand pumps/pumps for irrigation for small and marginal farmers.",
      hi: "लघु एवं सीमांत किसानों के लिए सिंचाई हेतु मुफ्त बोरवेल ड्रिलिंग और हैंडपंप/पंपों की स्थापना।"
    },
    documents: [
      { en: "Land Khatauni details (Minimum 0.2 hectare land)", hi: "भूमि खतौनी विवरण (न्यूनतम 0.2 हेक्टेयर भूमि)" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Farmer Registration Certificate", hi: "किसान पंजीकरण प्रमाणपत्र" },
      { en: "Caste Certificate", hi: "जाति प्रमाण पत्र" }
    ],
    procedure: {
      en: "1. Submit offline application to the Assistant Engineer, Minor Irrigation Department at the block/tehsil office.\n2. Obtain verification report from Gram Panchayat and Lekhpal.\n3. Boring is executed by departmental drilling rigs.",
      hi: "1. ब्लॉक/तहसील कार्यालय में सहायक अभियंता, लघु सिंचाई विभाग को ऑफलाइन आवेदन जमा करें।\n2. ग्राम पंचायत और लेखपाल से सत्यापन रिपोर्ट प्राप्त करें।\n3. विभाग के ड्रिलिंग रिग्स द्वारा बोरिंग का कार्य किया जाता है।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-60 Days", hi: "30-60 दिन" },
    officialUrl: "https://miup.gov.in"
  },
  {
    id: "up-domicile-cert",
    name: {
      en: "UP Domicile Certificate (Niwas Praman Patra)",
      hi: "उत्तर प्रदेश निवास प्रमाण पत्र"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 0,
      maxAge: 110,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Official legal proof of residency in Uttar Pradesh, required for school admissions, local jobs, and schemes.",
      hi: "उत्तर प्रदेश में निवास का आधिकारिक कानूनी प्रमाण, जो स्कूल में प्रवेश, स्थानीय नौकरियों और योजनाओं के लिए आवश्यक है।"
    },
    documents: [
      { en: "Aadhaar Card / Ration Card", hi: "आधार कार्ड / राशन कार्ड" },
      { en: "Self-Declaration Form (signed by applicant)", hi: "स्व-घोषणा पत्र (आवेदक द्वारा हस्ताक्षरित)" },
      { en: "Voter ID Card or Electricity Bill of Parents (if minor)", hi: "माता-पिता का वोटर आईडी कार्ड या बिजली बिल (यदि नाबालिग है)" },
      { en: "Passport size photograph", hi: "पासपोर्ट साइज फोटो" }
    ],
    procedure: {
      en: "1. Apply online via edistrict.up.gov.in (citizen login) or via CSC.\n2. The request is routed to the local Area Lekhpal.\n3. Lekhpal conducts physical verification and submits report to the Tehsildar for digital signature.",
      hi: "1. edistrict.up.gov.in (नागरिक लॉगिन) या सीएससी के माध्यम से ऑनलाइन आवेदन करें।\n2. अनुरोध स्थानीय क्षेत्र के लेखपाल को भेजा जाता है।\n3. लेखपाल भौतिक सत्यापन करता है और डिजिटल हस्ताक्षर के लिए तहसीलदार को रिपोर्ट सौंपता है।"
    },
    fee: { en: "₹30 (Government Fee)", hi: "₹30 (सरकारी शुल्क)" },
    processingTime: { en: "15-20 Days", hi: "15-20 दिन" },
    officialUrl: "https://edistrict.up.gov.in"
  },
  {
    id: "up-income-cert",
    name: {
      en: "UP Income Certificate (Aay Praman Patra)",
      hi: "उत्तर प्रदेश आय प्रमाण पत्र"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 0,
      maxAge: 110,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Official proof of annual income, required for scholarships, fee waivers, pensions, and BPL benefits.",
      hi: "वार्षिक आय का आधिकारिक प्रमाण, जो छात्रवृत्ति, शुल्क छूट, पेंशन और बीपीएल लाभों के लिए आवश्यक है।"
    },
    documents: [
      { en: "Self-Declaration Form", hi: "स्व-घोषणा पत्र" },
      { en: "Salary Slip / ITR (for salaried people) or income declaration", hi: "वेतन पर्ची / ITR (वेतनभोगी लोगों के लिए) या आय की घोषणा" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Land ownership details (Khatauni) for rural farming income", hi: "ग्रामीण कृषि आय के लिए भूमि स्वामित्व विवरण (खतौनी)" }
    ],
    procedure: {
      en: "1. Apply online on edistrict.up.gov.in or via CSC.\n2. Lekhpal visits or contacts the applicant to assess family income.\n3. The Tehsildar signs and issues the certificate online.",
      hi: "1. edistrict.up.gov.in पर या सीएससी के माध्यम से ऑनलाइन आवेदन करें।\n2. पारिवारिक आय का आकलन करने के लिए लेखपाल आवेदक के पास जाता है या संपर्क करता है।\n3. तहसीलदार ऑनलाइन प्रमाणपत्र जारी और हस्ताक्षरित करता है।"
    },
    fee: { en: "₹30", hi: "₹30" },
    processingTime: { en: "10-15 Days", hi: "10-15 दिन" },
    officialUrl: "https://edistrict.up.gov.in"
  },
  {
    id: "up-caste-cert",
    name: {
      en: "UP Caste Certificate (Jati Praman Patra)",
      hi: "उत्तर प्रदेश जाति प्रमाण पत्र"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 0,
      maxAge: 110,
      occupations: ["all"],
      categories: ["SC", "ST", "OBC", "Minority"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Official proof of belonging to a reserved category (OBC/SC/ST), required for reservations, scholarship relaxations.",
      hi: "आरक्षित श्रेणी (OBC/SC/ST) से संबंधित होने का आधिकारिक प्रमाण, जो आरक्षण, छात्रवृत्ति छूट के लिए आवश्यक है।"
    },
    documents: [
      { en: "Father's Caste Certificate or Land Khatauni details showing lineage", hi: "पिता का जाति प्रमाण पत्र या वंशावली दिखाने वाला भूमि खतौनी विवरण" },
      { en: "Self-Declaration Form", hi: "स्व-घोषणा पत्र" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Affidavit regarding sub-caste status", hi: "उपन्यास जाति की स्थिति के संबंध में हलफनामा" }
    ],
    procedure: {
      en: "1. Apply on edistrict.up.gov.in portal.\n2. Specify Caste and Sub-Caste correctly.\n3. Lekhpal verifies the lineage/father's caste and submits approval report to Naib Tehsildar.",
      hi: "1. edistrict.up.gov.in पोर्टल पर आवेदन करें।\n2. जाति और उप-जाति को सही ढंग से निर्दिष्ट करें।\n3. लेखपाल वंशावली/पिता की जाति का सत्यापन करता है और नायब तहसीलदार को रिपोर्ट सौंपता है।"
    },
    fee: { en: "₹30", hi: "₹30" },
    processingTime: { en: "15-20 Days", hi: "15-20 दिन" },
    officialUrl: "https://edistrict.up.gov.in"
  },
  {
    id: "up-ration-card",
    name: {
      en: "UP Ration Card (Food Security)",
      hi: "उत्तर प्रदेश राशन कार्ड (खाद्य सुरक्षा)"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 18,
      maxAge: 110,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: 200000,
      gender: "any"
    },
    benefits: {
      en: "Subsidized food grains (Wheat at ₹2/kg, Rice at ₹3/kg, or Free under PMGKAY) from local Fair Price Shops.",
      hi: "स्थानीय उचित दर की दुकानों से रियायती खाद्यान्न (₹2/किलोग्राम गेहूं, ₹3/किलोग्राम चावल, या PMGKAY के तहत मुफ्त)।"
    },
    documents: [
      { en: "Aadhaar Cards of all Family Members", hi: "परिवार के सभी सदस्यों का आधार कार्ड" },
      { en: "Income Certificate of Family Head", hi: "परिवार के मुखिया का आय प्रमाण पत्र" },
      { en: "Bank Passbook of female head of the family", hi: "परिवार की महिला मुखिया की बैंक पासबुक" },
      { en: "Joint Family Photo", hi: "संयुक्त पारिवारिक फोटो" }
    ],
    procedure: {
      en: "1. Apply online via fcs.up.gov.in through CSC.\n2. The female head of the family is registered as the owner/primary beneficiary.\n3. District Supply Office (DSO) verifies and adds name to the local ration dealer database.",
      hi: "1. CSC के माध्यम से fcs.up.gov.in पर ऑनलाइन आवेदन करें।\n2. परिवार की महिला मुखिया को स्वामी/प्राथमिक लाभार्थी के रूप में पंजीकृत किया जाता है।\n3. जिला पूर्ति कार्यालय (DSO) सत्यापन करता है और स्थानीय राशन डीलर डेटाबेस में नाम जोड़ता।"
    },
    fee: { en: "₹20 (Form fees)", hi: "₹20 (फॉर्म शुल्क)" },
    processingTime: { en: "30 Days", hi: "30 दिन" },
    officialUrl: "https://fcs.up.gov.in"
  },
  {
    id: "up-character-cert",
    name: {
      en: "UP Character Certificate (Police Verification)",
      hi: "उत्तर प्रदेश चरित्र प्रमाण पत्र (पुलिस सत्यापन)"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 18,
      maxAge: 90,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Official police clearance certificate verifying clean criminal record, essential for government employment and licensing.",
      hi: "स्वच्छ आपराधिक रिकॉर्ड का सत्यापन करने वाला आधिकारिक पुलिस अनापत्ति प्रमाणपत्र, जो सरकारी नौकरी और लाइसेंस के लिए आवश्यक है।"
    },
    documents: [
      { en: "Aadhaar Card & Photo", hi: "आधार कार्ड और फोटो" },
      { en: "Two letters of recommendation from local respected citizens (not relatives)", hi: "स्थानीय सम्मानित नागरिकों (रिश्तेदारों नहीं) से दो अनुशंसा पत्र" },
      { en: "Residence proof / Rent agreement", hi: "निवास प्रमाण / किराया समझौता" }
    ],
    procedure: {
      en: "1. Apply online via UP Police portal uppolice.gov.in or UPCOP App.\n2. Pay processing fees online.\n3. Local police station personnel visit the residence for verification and submit report online.",
      hi: "1. यूपी पुलिस पोर्टल uppolice.gov.in या UPCOP ऐप के माध्यम से ऑनलाइन आवेदन करें।\n2. ऑनलाइन प्रसंस्करण शुल्क का भुगतान करें।\n3. स्थानीय पुलिस स्टेशन के कर्मचारी सत्यापन के लिए निवास पर आते हैं और ऑनलाइन रिपोर्ट जमा करते हैं।"
    },
    fee: { en: "₹50 (Government Fee)", hi: "₹50 (सरकारी शुल्क)" },
    processingTime: { en: "15-20 Days", hi: "15-20 दिन" },
    officialUrl: "https://uppolice.gov.in"
  },
  {
    id: "up-birth-death-cert",
    name: {
      en: "UP Birth / Death Certificate Registration",
      hi: "उत्तर प्रदेश जन्म / मृत्यु प्रमाण पत्र पंजीकरण"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 0,
      maxAge: 110,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Legal birth or death certificate issued by Local Registrar, vital for identity proof, legal settlements, and inheritance.",
      hi: "स्थानीय रजिस्ट्रार द्वारा जारी कानूनी जन्म या मृत्यु प्रमाण पत्र, पहचान प्रमाण, कानूनी समझौतों और विरासत के लिए महत्वपूर्ण है।"
    },
    documents: [
      { en: "Hospital Discharge Slip / Institutional Birth Report", hi: "अस्पताल डिस्चार्ज स्लिप / संस्थागत जन्म रिपोर्ट" },
      { en: "Aadhaar Card of Parents (for birth) / Deceased (for death)", hi: "माता-पिता का आधार कार्ड (जन्म के लिए) / मृतक का (मृत्यु के लिए)" },
      { en: "Affidavit if registering after 21 days of occurrence", hi: "यदि घटना के 21 दिनों के बाद पंजीकरण किया जा रहा है तो हलफनामा" }
    ],
    procedure: {
      en: "1. Register on the crsorgi.gov.in portal or submit form at Nagar Nigam (Urban) or Block/Tehsil (Rural).\n2. Register within 21 days for free issuance.\n3. For delayed births, obtain SDM order prior to registration.",
      hi: "1. crsorgi.gov.in पोर्टल पर पंजीकरण करें या नगर निगम (शहरी) या ब्लॉक/तहसील (ग्रामीण) में फॉर्म जमा करें।\n2. मुफ्त जारी करने के लिए 21 दिनों के भीतर पंजीकरण करें।\n3. विलंबित जन्म के लिए, पंजीकरण से पहले SDM का आदेश प्राप्त करें।"
    },
    fee: { en: "Free within 21 days, late fees applicable after that", hi: "21 दिनों के भीतर निःशुल्क, उसके बाद विलंब शुल्क लागू" },
    processingTime: { en: "7-10 Days", hi: "7-10 दिन" },
    officialUrl: "https://crsorgi.gov.in"
  },
  {
    id: "aadhaar-card",
    name: {
      en: "Aadhaar Card (UIDAI)",
      hi: "आधार कार्ड (यूआईडीएआई)"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 0,
      maxAge: 120,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "12-digit unique identity number issued to all residents of India. Mandatory for government subsidies, LPG, ration, school admissions, and bank accounts.",
      hi: "भारत के सभी निवासियों को जारी 12 अंकों की विशिष्ट पहचान संख्या। सरकारी सब्सिडी, LPG, राशन, स्कूल प्रवेश और बैंक खातों के लिए अनिवार्य।"
    },
    documents: [
      { en: "Birth Certificate / School Leaving Certificate", hi: "जन्म प्रमाण पत्र / स्कूल छोड़ने का प्रमाण पत्र" },
      { en: "Address Proof (Passport, Ration Card, Voter ID)", hi: "पता प्रमाण (पासपोर्ट, राशन कार्ड, वोटर आईडी)" },
      { en: "Identity Proof (PAN Card, Passport)", hi: "पहचान प्रमाण (पैन कार्ड, पासपोर्ट)" }
    ],
    procedure: {
      en: "1. Visit nearest Aadhaar Enrollment Center (check appointment on uidai.gov.in).\n2. Fill the enrollment form and submit documents.\n3. Biometrics (fingerprints, iris scan, photo) are captured.\n4. Aadhaar is sent to registered address within 60-90 days.",
      hi: "1. निकटतम आधार नामांकन केंद्र पर जाएं (uidai.gov.in पर अपॉइंटमेंट देखें)।\n2. नामांकन फॉर्म भरें और दस्तावेज जमा करें।\n3. बायोमेट्रिक्स (फिंगरप्रिंट, आइरिस स्कैन, फोटो) लिए जाते हैं।\n4. आधार 60-90 दिनों में पंजीकृत पते पर भेजा जाता है।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "60-90 Days", hi: "60-90 दिन" },
    officialUrl: "https://uidai.gov.in"
  },
  {
    id: "pan-card",
    name: {
      en: "PAN Card (Income Tax Department)",
      hi: "पैन कार्ड (आयकर विभाग)"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 0,
      maxAge: 120,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "10-digit alphanumeric Permanent Account Number issued by Income Tax Department. Required for filing tax returns, bank accounts above ₹50K, property purchase, and high-value transactions.",
      hi: "आयकर विभाग द्वारा जारी 10 अंकों का अल्फ़ान्यूमेरिक स्थायी खाता संख्या। कर रिटर्न दाखिल करने, ₹50K से अधिक के बैंक खाते, संपत्ति खरीद और उच्च-मूल्य के लेन-देन के लिए आवश्यक।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Proof of Date of Birth (Birth Certificate / 10th Marksheet)", hi: "जन्म तिथि का प्रमाण (जन्म प्रमाण पत्र / 10वीं अंकपत्रिका)" },
      { en: "Address Proof (Aadhaar, Voter ID, Passport)", hi: "पता प्रमाण (आधार, वोटर आईडी, पासपोर्ट)" }
    ],
    procedure: {
      en: "1. Apply online at incometax.gov.in or nsdl.co.in.\n2. Fill Form 49A and submit documents.\n3. PAN issued within 15 days of verification.\n4. Physical card sent to registered address.",
      hi: "1. incometax.gov.in या nsdl.co.in पर ऑनलाइन आवेदन करें।\n2. फॉर्म 49A भरें और दस्तावेज जमा करें।\n3. सत्यापन के 15 दिनों के भीतर पैन जारी किया जाता है।\n4. भौतिक कार्ड पंजीकृत पते पर भेजा जाता है।"
    },
    fee: { en: "₹93 (e-PAN) / ₹107 (physical card)", hi: "₹93 (ई-पैन) / ₹107 (भौतिक कार्ड)" },
    processingTime: { en: "15 Days", hi: "15 दिन" },
    officialUrl: "https://www.incometax.gov.in"
  },
  {
    id: "voter-id",
    name: {
      en: "Voter ID (EPIC Card - Election Commission)",
      hi: "वोटर आईडी (EPIC कार्ड - निर्वाचन आयोग)"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 18,
      maxAge: 120,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Electors Photo Identity Card issued by Election Commission of India. Used as identity proof, address proof, and to vote in state/central elections.",
      hi: "भारत निर्वाचन आयोग द्वारा जारी मतदाता फोटो पहचान पत्र। पहचान प्रमाण, पता प्रमाण और राज्य/केंद्रीय चुनावों में वोट करने के लिए उपयोग किया जाता है।"
    },
    documents: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Address Proof (Ration Card, Passport, Bank Passbook)", hi: "पता प्रमाण (राशन कार्ड, पासपोर्ट, बैंक पासबुक)" },
      { en: "Passport-size Photo", hi: "पासपोर्ट साइज़ फोटो" }
    ],
    procedure: {
      en: "1. Register online at voterportal.eci.gov.in (Form 6).\n2. Submit Aadhaar and address proof documents.\n3. Booth Level Officer (BLO) verifies the address.\n4. EPIC card sent via post or can be downloaded as e-EPIC.",
      hi: "1. voterportal.eci.gov.in पर ऑनलाइन पंजीकरण करें (फॉर्म 6)।\n2. आधार और पता प्रमाण दस्तावेज जमा करें।\n3. बूथ स्तर अधिकारी (BLO) पते का सत्यापन करता है।\n4. EPIC कार्ड डाक द्वारा भेजा जाता है या ई-EPIC के रूप में डाउनलोड किया जा सकता है।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-45 Days", hi: "30-45 दिन" },
    officialUrl: "https://voterportal.eci.gov.in"
  },
  {
    id: "ration-card",
    name: {
      en: "Ration Card (Food & Civil Supplies)",
      hi: "राशन कार्ड (खाद्य एवं नागरिक आपूर्ति)"
    },
    category: "essential-documents",
    eligibility: {
      minAge: 0,
      maxAge: 120,
      occupations: ["all"],
      categories: ["all"],
      maxIncome: null,
      gender: "any"
    },
    benefits: {
      en: "Official document for subsidized food grains (wheat, rice, sugar) under NFSA and state PDS. Also acts as address proof and identity proof.",
      hi: "NFSA और राज्य PDS के तहत सब्सिडी वाले खाद्यान्न (गेहूं, चावल, चीनी) के लिए आधिकारिक दस्तावेज। पता प्रमाण और पहचान प्रमाण के रूप में भी कार्य करता है।"
    },
    documents: [
      { en: "Aadhaar Card of All Family Members", hi: "परिवार के सभी सदस्यों का आधार कार्ड" },
      { en: "Address Proof (Electricity Bill / Rent Agreement)", hi: "पता प्रमाण (बिजली बिल / किराया समझौता)" },
      { en: "Income Certificate", hi: "आय प्रमाण पत्र" },
      { en: "Passport-size Photo of Head of Family", hi: "परिवार के मुखिया का पासपोर्ट साइज़ फोटो" }
    ],
    procedure: {
      en: "1. Apply at local Tehsil/Block office or online via UP e-District portal.\n2. Fill Form A (for new ration card) with family details.\n3. Documents are verified by the Food & Civil Supply Department.\n4. Ration card issued to the head of family.",
      hi: "1. स्थानीय तहसील/ब्लॉक कार्यालय या UP e-District पोर्टल के माध्यम से ऑनलाइन आवेदन करें।\n2. परिवार के विवरण के साथ फॉर्म A (नए राशन कार्ड के लिए) भरें।\n3. दस्तावेजों का सत्यापन खाद्य एवं नागरिक आपूर्ति विभाग द्वारा किया जाता है।\n4. राशन कार्ड परिवार के मुखिया को जारी किया जाता है।"
    },
    fee: { en: "Free (APL/BPL), ₹15 for duplicate", hi: "मुफ्त (APL/BPL), डुप्लिकेट के लिए ₹15" },
    processingTime: { en: "30-60 Days", hi: "30-60 दिन" },
    officialUrl: "https://edistrict.up.gov.in"
  },
  {
    id: "pm-matru-vandana-up",
    name: {
      en: "PM Matru Vandana Yojana (UP) - PMMVY",
      hi: "प्रधानमंत्री मातृ वंदना योजना (यूपी)"
    },
    category: "welfare",
    eligibility: {
      minAge: 19,
      maxAge: 50,
      occupations: ["pregnant_woman"],
      categories: ["all"],
      maxIncome: null,
      gender: "female"
    },
    benefits: {
      en: "Financial assistance of ₹5,000 paid directly in two installments to pregnant women and lactating mothers for their first child.",
      hi: "गर्भवती और स्तनपान कराने वाली माताओं को उनके पहले बच्चे के लिए सीधे दो किस्तों में ₹5,000 की वित्तीय सहायता।"
    },
    documents: [
      { en: "Aadhaar Card of Wife & Husband", hi: "पत्नी और पति का आधार कार्ड" },
      { en: "Mother-Child Protection Card (MCP Card)", hi: "माता-शिशु संरक्षण कार्ड (MCP कार्ड)" },
      { en: "Bank Passbook Linked to Aadhaar", hi: "आधार से जुड़ा बैंक पासबुक" },
      { en: "Pregnancy Registration Certificate", hi: "गर्भावस्था पंजीकरण प्रमाणपत्र" }
    ],
    procedure: {
      en: "1. Apply online on pmmvy.wcd.gov.in or through your local Anganwadi worker.\n2. Submit Form 1A and MCP card details.\n3. Funds are directly transferred to the Aadhaar-seeded bank account.",
      hi: "1. pmmvy.wcd.gov.in पर ऑनलाइन आवेदन करें या अपने स्थानीय आंगनवाड़ी कार्यकर्ता के माध्यम से आवेदन करें।\n2. फॉर्म 1A और MCP कार्ड विवरण जमा करें।\n3. राशि सीधे आधार-सीडेड बैंक खाते में ट्रांसफर की जाती है।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-45 Days", hi: "30-45 दिन" },
    officialUrl: "https://pmmvy.wcd.gov.in"
  },
  {
    id: "up-widow-daughter-marriage",
    name: {
      en: "UP Marriage Grant for Widow's Daughters",
      hi: "यूपी विधवा पुत्री विवाह अनुदान योजना"
    },
    category: "welfare",
    eligibility: {
      minAge: 18,
      maxAge: 120,
      occupations: ["widow"],
      categories: ["all"],
      maxIncome: 46080,
      gender: "female"
    },
    benefits: {
      en: "Financial assistance grant of ₹20,000 for the marriage of daughters of destitute widows living in UP.",
      hi: "उत्तर प्रदेश में रहने वाली निराश्रित विधवाओं की पुत्रियों के विवाह के लिए ₹20,000 की वित्तीय सहायता अनुदान।"
    },
    documents: [
      { en: "Widow Pension Card or Husband's Death Certificate", hi: "विधवा पेंशन कार्ड या पति का मृत्यु प्रमाण पत्र" },
      { en: "Aadhaar Card of Mother and Daughter", hi: "माता और पुत्री का आधार कार्ड" },
      { en: "Income Certificate (Tehsil verified)", hi: "आय प्रमाण पत्र (तहसील सत्यापित)" },
      { en: "Marriage Invitation & Proof of Age of Daughter (18+)", hi: "शादी का निमंत्रण और बेटी की आयु का प्रमाण (18+)" }
    ],
    procedure: {
      en: "1. Register on the shadianudan.upsdc.gov.in portal.\n2. Fill the specific form for Destitute Widow Daughter Marriage Grant.\n3. Submit printout with physical documents to District Social Welfare Office.",
      hi: "1. shadianudan.upsdc.gov.in पोर्टल पर पंजीकरण करें।\n2. निराश्रित विधवा पुत्री विवाह अनुदान के लिए विशिष्ट फॉर्म भरें।\n3. समाज कल्याण कार्यालय में दस्तावेजों के साथ प्रिंटआउट जमा करें।"
    },
    fee: { en: "Free", hi: "निःशुल्क" },
    processingTime: { en: "30-45 Days", hi: "30-45 दिन" },
    officialUrl: "https://shadianudan.upsdc.gov.in"
  }
];

export const roadmaps = {
  "start-business": {
    id: "start-business",
    title: {
      en: "Starting a Small Business in Uttar Pradesh",
      hi: "उत्तर प्रदेश में लघु उद्योग/व्यवसाय शुरू करना"
    },
    steps: [
      {
        id: "step-1",
        title: { en: "Obtain PAN Card & Select Business Type", hi: "पैन कार्ड प्राप्त करें और व्यवसाय का प्रकार चुनें" },
        desc: { 
          en: "Create a Sole Proprietorship or Partnership. Apply for an individual or business PAN Card.", 
          desc_hi: "एकल स्वामित्व (Sole Proprietorship) या साझेदारी चुनें। व्यक्तिगत या व्यावसायिक पैन कार्ड के लिए आवेदन करें।" 
        },
        links: [{ name: "NSDL Portal", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" }]
      },
      {
        id: "step-2",
        title: { en: "Register on MSME Udyam Portal", hi: "MSME उद्यम पोर्टल पर पंजीकरण करें" },
        desc: { 
          en: "Get your business officially recognized by the central government. Required for all state subsidies.", 
          desc_hi: "केंद्र सरकार द्वारा अपने व्यवसाय को आधिकारिक मान्यता दिलाएं। सभी राज्य सब्सिडी के लिए यह आवश्यक है।" 
        },
        links: [{ name: "Udyam Registration", url: "https://udyamregistration.gov.in" }]
      },
      {
        id: "step-3",
        title: { en: "Apply for UP Yuva Swarozgar or ODOP Loan", hi: "यूपी युवा स्वरोजगार या ODOP ऋण के लिए आवेदन करें" },
        desc: { 
          en: "If you need credit, apply on the DIUPMSME portal to secure subsidized loans up to ₹25 Lakhs.", 
          desc_hi: "यदि आपको ऋण की आवश्यकता है, तो ₹25 लाख तक के रियायती ऋण प्राप्त करने के लिए DIUPMSME पोर्टल पर आवेदन करें।" 
        },
        links: [{ name: "DIUPMSME Portal", url: "https://diupmsme.upsdc.gov.in" }]
      },
      {
        id: "step-4",
        title: { en: "Obtain Local Trade Licenses & GST (If Applicable)", hi: "स्थानीय व्यापार लाइसेंस और जीएसटी (यदि लागू हो) प्राप्त करें" },
        desc: { 
          en: "Apply for GST if annual turnover exceeds ₹40 Lakhs. Obtain fire safety, pollution, and municipal NOCs.", 
          desc_hi: "यदि वार्षिक कारोबार ₹40 लाख से अधिक है तो जीएसटी के लिए आवेदन करें। अग्निशमन सुरक्षा, प्रदूषण और नगर पालिका NOC प्राप्त करें।" 
        },
        links: [{ name: "GST Portal", url: "https://www.gst.gov.in" }]
      }
    ]
  },
  "apply-scholarships": {
    id: "apply-scholarships",
    title: {
      en: "Applying for Post-Matric & Pre-Matric Scholarships",
      hi: "मैट्रिक-पूर्व और मैट्रिक-ोत्तर छात्रवृत्ति के लिए आवेदन"
    },
    steps: [
      {
        id: "step-1",
        title: { en: "Get Income & Caste Certificates Issued", hi: "आय और जाति प्रमाण पत्र जारी करवाएं" },
        desc: { 
          en: "Apply on the e-District UP portal. Ensure the income certificate is fresh and under the ₹2 Lakhs limit.", 
          desc_hi: "ई-डिस्ट्रिक्ट यूपी पोर्टल पर आवेदन करें। सुनिश्चित करें कि आय प्रमाण पत्र नया है और ₹2 लाख की सीमा के भीतर है।" 
        },
        links: [{ name: "e-District UP", url: "https://edistrict.up.gov.in" }]
      },
      {
        id: "step-2",
        title: { en: "Aadhaar e-KYC Verification in Bank Account", hi: "बैंक खाते में आधार ई-केवाईसी सत्यापन" },
        desc: { 
          en: "Visit your bank and ensure your Aadhaar is linked (seeded) with your savings account to receive scholarship via DBT.", 
          desc_hi: "अपने बैंक में जाएं और सुनिश्चित करें कि आपका आधार आपके बचत खाते से लिंक (सीडेड) है ताकि डीबीटी द्वारा छात्रवृत्ति प्राप्त हो सके।" 
        }
      },
      {
        id: "step-3",
        title: { en: "Register on UP Scholarship Portal", hi: "यूपी छात्रवृत्ति पोर्टल पर पंजीकरण करें" },
        desc: { 
          en: "Register on scholarship.up.gov.in, select your category (SC/ST/OBC/General), fill details, and upload documents.", 
          desc_hi: "scholarship.up.gov.in पर पंजीकरण करें, अपनी श्रेणी चुनें, विवरण भरें और दस्तावेज अपलोड करें।" 
        },
        links: [{ name: "UP Scholarship Portal", url: "https://scholarship.up.gov.in" }]
      },
      {
        id: "step-4",
        title: { en: "Submit Hardcopy at College / School Office", hi: "कॉलेज / स्कूल कार्यालय में हार्डकॉपी जमा करें" },
        desc: { 
          en: "Print the final application draft, attach self-attested documents, and hand it to your institution's nodal officer.", 
          desc_hi: "अंतिम आवेदन का प्रिंट लें, स्व-सत्यापित दस्तावेज संलग्न करें और इसे अपने संस्थान के नोडल अधिकारी को सौंपें।" 
        }
      }
    ]
  },
  "get-certificates": {
    id: "get-certificates",
    title: {
      en: "Applying for Essential Certificates (Domicile, Income, Caste)",
      hi: "आवश्यक प्रमाण पत्र (निवास, आय, जाति) के लिए आवेदन करना"
    },
    steps: [
      {
        id: "step-1",
        title: { en: "Prepare Documents & Self-Declaration Form", hi: "दस्तावेज और स्व-घोषणा पत्र तैयार करें" },
        desc: { 
          en: "Download and print the standard UP e-District self-declaration form. Sign and scan it.", 
          desc_hi: "मानक यूपी ई-डिस्ट्रिक्ट स्व-घोषणा पत्र डाउनलोड और प्रिंट करें। हस्ताक्षर करें और इसे स्कैन करें।" 
        }
      },
      {
        id: "step-2",
        title: { en: "Register / Log in on UP e-District Portal", hi: "यूपी ई-डिस्ट्रिक्ट पोर्टल पर पंजीकरण / लॉगिन करें" },
        desc: { 
          en: "Register as a citizen on the portal using the 'Citizen Login (e-Sathi)' button.", 
          desc_hi: "'नागरिक लॉगिन (e-Sathi)' बटन का उपयोग करके पोर्टल पर एक नागरिक के रूप में पंजीकरण करें।" 
        },
        links: [{ name: "e-Sathi Citizen Portal", url: "https://edistrict.up.gov.in" }]
      },
      {
        id: "step-3",
        title: { en: "Fill Application & Pay Government Fee", hi: "आवेदन भरें और सरकारी शुल्क का भुगतान करें" },
        desc: { 
          en: "Fill out the fields exactly matching your Aadhaar. Pay the ₹30 application fee using net banking or UPI.", 
          desc_hi: "अपने आधार से मेल खाते हुए विवरण भरें। नेट बैंकिंग या यूपीआई का उपयोग करके ₹30 आवेदन शुल्क का भुगतान करें।" 
        }
      },
      {
        id: "step-4",
        title: { en: "Lekhpal Verification & Digital Issue", hi: "लेखपाल सत्यापन और डिजिटल रूप से जारी करना" },
        desc: { 
          en: "The Lekhpal will review and verify your local address/income. Once verified, download the digitally signed PDF from your dashboard.", 
          desc_hi: "लेखपाल आपके स्थानीय पते/आय की समीक्षा और सत्यापन करेगा। सत्यापित होने के बाद, अपने डैशबोर्ड से डिजिटली हस्ताक्षरित पीडीएफ डाउनलोड करें।" 
        }
      }
    ]
  },
  "get-aadhaar": {
    id: "get-aadhaar",
    title: {
      en: "Applying for a New Aadhaar Card",
      hi: "नया आधार कार्ड आवेदन प्रक्रिया"
    },
    steps: [
      {
        id: "step-1",
        title: { en: "Find Aadhaar Enrollment Center", hi: "आधार नामांकन केंद्र खोजें" },
        desc: { 
          en: "Locate the nearest authorized Aadhaar enrollment center or bank/post office offering UIDAI services.", 
          desc_hi: "UIDAI सेवाएं प्रदान करने वाले निकटतम अधिकृत आधार नामांकन केंद्र या बैंक/डाकघर का पता लगाएं।" 
        },
        links: [{ name: "UIDAI Center Locator", url: "https://appointments.uidai.gov.in/easearch.aspx" }]
      },
      {
        id: "step-2",
        title: { en: "Book Appointment & Fill Form", hi: "अपॉइंटमेंट बुक करें और फॉर्म भरें" },
        desc: { 
          en: "Book an appointment online to skip long queues. Download and fill out the Aadhaar Enrollment Form.", 
          desc_hi: "लंबी लाइनों से बचने के लिए ऑनलाइन अपॉइंटमेंट बुक करें। आधार नामांकन फॉर्म डाउनलोड करें और भरें।" 
        },
        links: [{ name: "Book Appointment", url: "https://appointments.uidai.gov.in" }]
      },
      {
        id: "step-3",
        title: { en: "Visit Center with Identity/Address Proofs", hi: "पहचान/पते के प्रमाण के साथ केंद्र पर जाएं" },
        desc: { 
          en: "Visit the center with original Proof of Identity (POI) and Proof of Address (POA) documents (e.g. Voter ID, PAN, Ration Card).", 
          desc_hi: "पहचान के प्रमाण (POI) और पते के प्रमाण (POA) के मूल दस्तावेजों (जैसे वोटर आईडी, पैन, राशन कार्ड) के साथ केंद्र पर जाएं।" 
        }
      },
      {
        id: "step-4",
        title: { en: "Provide Biometrics & Collect Acknowledgment Slip", hi: "बायोमेट्रिक्स प्रदान करें और पावती पर्ची लें" },
        desc: { 
          en: "The operator will take your photo, scan 10 fingerprints, and scan your iris. Collect the acknowledgment slip containing the Enrollment ID (EID).", 
          desc_hi: "ऑपरेटर आपकी फोटो खींचेगा, 10 उंगलियों के निशान और आईरिस स्कैन करेगा। नामांकन आईडी (EID) वाली पावती पर्ची प्राप्त करें।" 
        }
      },
      {
        id: "step-5",
        title: { en: "Track Status & Download e-Aadhaar", hi: "स्थिति को ट्रैक करें और ई-आधार डाउनलोड करें" },
        desc: { 
          en: "Check enrollment status online. Once generated, download the password-protected digital e-Aadhaar card.", 
          desc_hi: "ऑनलाइन नामांकन की स्थिति की जांच करें। जनरेट होने के बाद, पासवर्ड-सुरक्षित डिजिटल ई-आधार कार्ड डाउनलोड करें।" 
        },
        links: [{ name: "Download e-Aadhaar", url: "https://myaadhaar.uidai.gov.in" }]
      }
    ]
  },
  "get-pan": {
    id: "get-pan",
    title: {
      en: "Applying for a PAN Card (Form 49A)",
      hi: "पैन कार्ड (PAN Card) के लिए आवेदन करना"
    },
    steps: [
      {
        id: "step-1",
        title: { en: "Select Application Type on NSDL/UTIITSL", hi: "NSDL/UTIITSL पर आवेदन का प्रकार चुनें" },
        desc: { 
          en: "Visit the NSDL online portal. Under Application Type, select 'New PAN - Indian Citizen (Form 49A)'.", 
          desc_hi: "NSDL ऑनलाइन portal पर जाएं। आवेदन प्रकार के तहत 'नया पैन - भारतीय नागरिक (फॉर्म 49A)' चुनें।" 
        },
        links: [{ name: "NSDL PAN Portal", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" }]
      },
      {
        id: "step-2",
        title: { en: "Fill Personal Details & Select KYC Mode", hi: "व्यक्तिगत विवरण भरें और केवाईसी मोड चुनें" },
        desc: { 
          en: "Fill in your details exactly as shown on your Aadhaar Card. Choose e-KYC (paperless instant verification using Aadhaar OTP).", 
          desc_hi: "अपने आधार कार्ड पर दिखाए अनुसार अपना विवरण भरें। e-KYC (आधार ओटीपी का उपयोग करके पेपरलेस त्वरित सत्यापन) चुनें।" 
        }
      },
      {
        id: "step-3",
        title: { en: "Pay Application Fees", hi: "आवेदन शुल्क का भुगतान करें" },
        desc: { 
          en: "Pay the processing fee of approximately ₹107 (for dispatch of physical card within India) using UPI, debit card, or net banking.", 
          desc_hi: "यूपीआई, डेबिट कार्ड या नेट बैंकिंग का उपयोग करके लगभग ₹107 (भारत के भीतर भौतिक कार्ड भेजने के लिए) के प्रसंस्करण शुल्क का भुगतान करें।" 
        }
      },
      {
        id: "step-4",
        title: { en: "Aadhaar Authentication & OTP Consent", hi: "आधार प्रमाणीकरण और ओटीपी सहमति" },
        desc: { 
          en: "Authenticate your Aadhaar details online and approve the e-Sign using an OTP sent to your Aadhaar-linked mobile number.", 
          desc_hi: "अपने आधार विवरण को ऑनलाइन प्रमाणित करें और अपने आधार से जुड़े मोबाइल नंबर पर भेजे गए ओटीपी का उपयोग करके ई-साइन को मंजूरी दें।" 
        }
      },
      {
        id: "step-5",
        title: { en: "Receive e-PAN & Physical Card Delivery", hi: "ई-पैन प्राप्त करें और भौतिक कार्ड की डिलीवरी" },
        desc: { 
          en: "A digital e-PAN is sent to your registered email within 2-3 days. The physical plastic card is delivered via speed post in 10-15 days.", 
          desc_hi: "एक डिजिटल ई-पैन 2-3 दिनों के भीतर आपके पंजीकृत ईमेल पर भेजा जाता है। भौतिक प्लास्टिक कार्ड 10-15 दिनों में स्पीड पोस्ट द्वारा वितरित किया जाता है।" 
        }
      }
    ]
  },
  "get-voter-id": {
    id: "get-voter-id",
    title: {
      en: "Registering for a Voter ID Card (Form 6)",
      hi: "वोटर आईडी कार्ड (मतदाता पहचान पत्र) पंजीकरण"
    },
    steps: [
      {
        id: "step-1",
        title: { en: "Register on ECI Voter Portal", hi: "ECI वोटर पोर्टल पर पंजीकरण करें" },
        desc: { 
          en: "Visit the Election Commission of India (ECI) Voter Service Portal and sign up with your mobile number.", 
          desc_hi: "भारत निर्वाचन आयोग (ECI) के मतदाता सेवा पोर्टल पर जाएं और अपने मोबाइल नंबर से साइन अप करें।" 
        },
        links: [{ name: "ECI Voter Service Portal", url: "https://voters.eci.gov.in" }]
      },
      {
        id: "step-2",
        title: { en: "Fill Form 6 & Upload Documents", hi: "फॉर्म 6 भरें और दस्तावेज अपलोड करें" },
        desc: { 
          en: "Fill out Form 6 for registering a new voter. Upload a passport photograph, age proof (e.g. Aadhaar, Birth Certificate), and residence proof.", 
          desc_hi: "नए मतदाता पंजीकरण के लिए फॉर्म 6 भरें। पासपोर्ट फोटो, आयु प्रमाण (जैसे आधार, जन्म प्रमाण पत्र) और निवास प्रमाण पत्र अपलोड करें।" 
        }
      },
      {
        id: "step-3",
        title: { en: "Submit Application & Save Reference ID", hi: "आवेदन जमा करें और संदर्भ आईडी सहेजें" },
        desc: { 
          en: "Review all details, submit the form online, and print or save the generated reference ID to track your application status.", 
          desc_hi: "सभी विवरणों की समीक्षा करें, फॉर्म ऑनलाइन जमा करें और अपने आवेदन की स्थिति को ट्रैक करने के लिए जनरेट की गई संदर्भ आईडी को प्रिंट या सहेजें।" 
        }
      },
      {
        id: "step-4",
        title: { en: "Booth Level Officer (BLO) Verification", hi: "बूथ स्तर के अधिकारी (BLO) द्वारा सत्यापन" },
        desc: { 
          en: "The Electoral Registration Officer will assign a local Booth Level Officer (BLO) to visit your residence and physically verify your details.", 
          desc_hi: "निर्वाचक रजिस्ट्रीकरण अधिकारी आपके निवास का दौरा करने और भौतिक रूप से आपके विवरण का सत्यापन करने के लिए एक स्थानीय बूथ स्तर के अधिकारी (BLO) को नियुक्त करेगा।" 
        }
      },
      {
        id: "step-5",
        title: { en: "Electoral Roll Entry & Card Delivery", hi: "मतदाता सूची में नाम जोड़ना और कार्ड की डिलीवरी" },
        desc: { 
          en: "Once approved, your name is entered into the voter list. A voter EPIC card number is generated, and a physical card is shipped via Speed Post.", 
          desc_hi: "स्वीकृत होने के बाद, आपका नाम मतदाता सूची में दर्ज किया जाता है। एक वोटर EPIC कार्ड नंबर जनरेट होता है, और भौतिक कार्ड स्पीड पोस्ट द्वारा भेजा जाता है।" 
        }
      }
    ]
  },
  "get-ration-card": {
    id: "get-ration-card",
    title: {
      en: "Applying for a New Ration Card",
      hi: "नया राशन कार्ड (Ration Card) आवेदन प्रक्रिया"
    },
    steps: [
      {
        id: "step-1",
        title: { en: "Gather Family Documents", hi: "पारिवारिक दस्तावेज एकत्र करें" },
        desc: { 
          en: "Prepare Aadhaar cards of all family members, income certificate of the head of family, bank details of female head of house, and a group family photograph.", 
          desc_hi: "परिवार के सभी सदस्यों के आधार कार्ड, परिवार के मुखिया का आय प्रमाण पत्र, महिला मुखिया के बैंक विवरण और एक सामूहिक पारिवारिक फोटो तैयार करें।" 
        }
      },
      {
        id: "step-2",
        title: { en: "Submit Application via CSC / e-District", hi: "सीएससी / ई-डिस्ट्रिक्ट के माध्यम से आवेदन जमा करें" },
        desc: { 
          en: "Ration card enrollment requires login through the Food and Civil Supplies (FCS) portal, typically executed by an authorized CSC operator.", 
          desc_hi: "राशन कार्ड नामांकन के लिए खाद्य एवं रसद (FCS) पोर्टल के माध्यम से लॉगिन की आवश्यकता होती है, जो आमतौर पर सीएससी ऑपरेटर द्वारा किया जाता है।" 
        },
        links: [{ name: "UP FCS Portal", url: "https://fcs.up.gov.in" }]
      },
      {
        id: "step-3",
        title: { en: "Verification by Lekhpal or Food Inspector", hi: "लेखपाल या खाद्य निरीक्षक द्वारा सत्यापन" },
        desc: { 
          en: "The submitted details and family counts are forwarded to the block level food supply inspector or local Lekhpal for physical validation.", 
          desc_hi: "जमा किए गए विवरण और परिवार की संख्या को भौतिक सत्यापन के लिए ब्लॉक स्तर के खाद्य आपूर्ति निरीक्षक या स्थानीय लेखपाल को भेजा जाता है।" 
        }
      },
      {
        id: "step-4",
        title: { en: "Ration Shop Allotment & Quota Linking", hi: "राशन दुकान आवंटन और कोटा लिंक करना" },
        desc: { 
          en: "Upon successful checks, your card is approved, linked to the nearest government Fair Price Shop (ration dealer), and you can collect grains.", 
          desc_hi: "सफल जांच के बाद, आपका कार्ड स्वीकृत हो जाता है, निकटतम सरकारी उचित दर की दुकान (राशन डीलर) से लिंक हो जाता है, और आप राशन ले सकते हैं।" 
        }
      }
    ]
  }
};
