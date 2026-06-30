import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fallback: If GEMINI_API_KEY is not in process.env, try loading from .env.example or .env manually
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

// Database helper functions
const RESUMES_PATH = path.join(__dirname, 'data', 'resumes.json');
const PORTFOLIOS_PATH = path.join(__dirname, 'data', 'portfolios.json');

function readJsonFile(filePath, defaultVal = {}) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultVal, null, 2));
      return defaultVal;
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '{}');
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
    return defaultVal;
  }
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (e) {
    console.error(`Error writing ${filePath}:`, e.message);
    return false;
  }
}

// Clean and parse JSON response from Gemini
function cleanAndParseJSON(text) {
  let cleaned = text.trim();
  // Remove markdown wrapping if present
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```json\s*/i, '').replace(/```$/, '').trim();
  }
  return JSON.parse(cleaned);
}

// Call Gemini Helper
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

// --- Mock Data Generators (Offline AI Simulation) ---
function simulateResumeAnalysis(resumeText) {
  const content = (resumeText || '').toLowerCase();
  let role = 'software-engineer';
  let matchedSkills = ['HTML', 'CSS', 'JavaScript'];
  let missing = ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'TypeScript'];
  let weak = ['SQL Optimization', 'Node.js security'];
  
  if (content.includes('product') || content.includes('pm') || content.includes('roadmap')) {
    role = 'product-manager';
    matchedSkills = ['Roadmapping', 'Agile', 'Jira', 'Stakeholder Management'];
    missing = ['A/B Testing', 'SQL Analytics', 'User Research', 'Product Analytics'];
    weak = ['PRD Writing', 'Metrics Tracking'];
  } else if (content.includes('design') || content.includes('ux') || content.includes('ui') || content.includes('figma')) {
    role = 'ux-designer';
    matchedSkills = ['Figma', 'Wireframing', 'Prototyping', 'User Flows'];
    missing = ['Design Systems', 'Usability Testing', 'Interaction Design', 'Heuristic Evaluation'];
    weak = ['Design QA', 'Accessibility (WCAG)'];
  } else if (content.includes('marketing') || content.includes('sales') || content.includes('seo')) {
    role = 'marketing-specialist';
    matchedSkills = ['SEO', 'Content Strategy', 'Social Media', 'Google Analytics'];
    missing = ['A/B Testing', 'PPC Campaigns', 'SQL', 'Marketing Automation'];
    weak = ['Copywriting', 'E-mail marketing'];
  } else {
    // Check if they have programming keywords
    if (content.includes('react') || content.includes('python') || content.includes('java') || content.includes('node')) {
      matchedSkills.push('React', 'Node.js', 'Git');
    }
  }

  // Generate mock corrections based on keywords
  const improvements = [
    {
      type: "wording",
      original: "Responsible for writing clean code and fixing bugs.",
      suggested: "Engineered scalable features and resolved high-priority bottlenecks, increasing platform stability by 15%.",
      reason: "Use action-oriented verbs and quantifiable accomplishments rather than passive duties."
    },
    {
      type: "structure",
      original: "Interests: Gaming, reading, traveling",
      suggested: "Remove or replace with a 'Projects' or 'Volunteer Experience' section.",
      reason: "Personal interest lists waste valuable resume real estate; focus on technical skills."
    }
  ];

  if (content.includes('helped') || content.includes('managed')) {
    improvements.push({
      type: "wording",
      original: "Helped team build the new homepage.",
      suggested: "Collaborated with cross-functional teams to design and deploy a responsive homepage layout.",
      reason: "Replace weak words like 'helped' with strong collaborative verbs like 'collaborated' or 'co-developed'."
    });
  }

  const atsScore = Math.floor(Math.random() * 20) + 65; // 65 to 85

  return {
    atsScore,
    breakdown: {
      keywordMatch: atsScore - 5,
      structure: atsScore + 8,
      formatting: 80,
      wording: atsScore - 2
    },
    improvements,
    missingSkills: missing,
    weakSkills: weak,
    detectedRole: role
  };
}

function simulateJDMatch(resumeText, jdText) {
  const resume = (resumeText || '').toLowerCase();
  const jd = (jdText || '').toLowerCase();
  
  // Extract potential keywords from JD
  const potentialKeywords = [
    'react', 'node', 'python', 'aws', 'docker', 'kubernetes', 'typescript', 'sql', 'agile', 'scrum',
    'product strategy', 'analytics', 'figma', 'ui/ux', 'seo', 'metrics', 'ci/cd', 'rest api', 'graphql'
  ];
  
  const presentKeywords = [];
  const keywordGap = [];
  
  potentialKeywords.forEach(kw => {
    if (jd.includes(kw)) {
      if (resume.includes(kw)) {
        presentKeywords.push(kw.toUpperCase());
      } else {
        keywordGap.push(kw.toUpperCase());
      }
    }
  });

  // Default gaps if JD is short or generic
  if (keywordGap.length === 0 && presentKeywords.length === 0) {
    keywordGap.push('SYSTEM DESIGN', 'UNIT TESTING', 'SCALABILITY');
    presentKeywords.push('JAVASCRIPT', 'COMMUNICATION', 'PROBLEM SOLVING');
  }

  const matchScore = Math.min(100, Math.max(10, Math.floor((presentKeywords.length / (presentKeywords.length + keywordGap.length || 1)) * 80) + 15));

  const suggestions = [
    `Integrate missing keywords: ${keywordGap.slice(0, 3).join(', ')} directly into your experience bullet points.`,
    "Quantify your metrics. Instead of saying you worked on a technology, state what result you achieved (e.g. 'boosted performance by 20%').",
    "Customize your summary section to match the job's core focus."
  ];

  return {
    matchScore,
    keywordGap,
    presentKeywords,
    suggestions
  };
}

// --- API Endpoints ---

// 1. Analyze Resume
app.post('/api/analyze-resume', async (req, res) => {
  const { resumeText } = req.body;
  if (!resumeText) {
    return res.status(400).json({ error: "Resume text is required." });
  }

  if (isAIEnabled) {
    try {
      const systemInstruction = `You are an expert technical recruiter and resume ATS reviewer. Analyze the resume text. 
Identify formatting, structure, and wording issues. Calculate an ATS score (out of 100) and break it down.
Identify missing skills (skills commonly expected for the user's role but missing from text) and weak skills.
Suggest wording improvements as an array of objects.`;

      const prompt = `Analyze this resume and provide details matching this exact JSON schema:
{
  "atsScore": number,
  "breakdown": {
    "keywordMatch": number,
    "structure": number,
    "formatting": number,
    "wording": number
  },
  "improvements": [
    {
      "type": "wording" | "structure" | "formatting",
      "original": "original sentence or section",
      "suggested": "improved suggestion",
      "reason": "why this helps"
    }
  ],
  "missingSkills": [string],
  "weakSkills": [string],
  "detectedRole": string
}

Resume Text:
${resumeText}`;

      const response = await callGeminiJSON(prompt, systemInstruction);
      return res.json(response);
    } catch (e) {
      console.error("Gemini failed, falling back to simulator:", e.message);
    }
  }

  // Simulation Fallback
  return res.json(simulateResumeAnalysis(resumeText));
});

// 2. JD Matcher
app.post('/api/match-jd', async (req, res) => {
  const { resumeText, jdText } = req.body;
  if (!resumeText || !jdText) {
    return res.status(400).json({ error: "Both resume text and Job Description text are required." });
  }

  if (isAIEnabled) {
    try {
      const systemInstruction = `You are an applicant tracking system (ATS). Compare the resume against the job description and output details.`;
      const prompt = `Analyze the resume against the job description and output this exact JSON:
{
  "matchScore": number,
  "keywordGap": [string],
  "presentKeywords": [string],
  "suggestions": [string]
}

Resume Text:
${resumeText}

Job Description:
${jdText}`;

      const response = await callGeminiJSON(prompt, systemInstruction);
      return res.json(response);
    } catch (e) {
      console.error("Gemini match JD failed, falling back to simulator:", e.message);
    }
  }

  return res.json(simulateJDMatch(resumeText, jdText));
});

// 3. Generate Portfolio Outline
app.post('/api/generate-portfolio', async (req, res) => {
  const { resumeText, targetRole, industry } = req.body;
  
  if (isAIEnabled) {
    try {
      const systemInstruction = `You are a professional web developer and UI designer. Analyze the resume and suggest a portfolio outline.`;
      const prompt = `Generate a portfolio design recommendation based on target role: ${targetRole || 'Software Engineer'} and industry: ${industry || 'Tech'}.
Output this exact JSON structure:
{
  "recommendedTemplate": "midnight-dev" | "executive-glass" | "neon-creative",
  "suggestedProjects": [
    {
      "title": "Project Title",
      "description": "Short description of project highlighting key metrics",
      "skills": [string],
      "whyItSuits": "Brief explanation of why this project stands out to a recruiter in this industry"
    }
  ],
  "tailoredSkills": [string],
  "aboutMe": "Professional, catchy introductory paragraph",
  "headline": "A short, impact-oriented headline (e.g. 'Building high-performance APIs')"
}

User's Resume Context:
${resumeText || 'No resume uploaded yet.'}`;

      const response = await callGeminiJSON(prompt, systemInstruction);
      return res.json(response);
    } catch (e) {
      console.error("Gemini portfolio generate failed, falling back:", e.message);
    }
  }

  // Fallback
  const isDesigner = (targetRole || '').toLowerCase().includes('design') || (targetRole || '').toLowerCase().includes('creative');
  const isPM = (targetRole || '').toLowerCase().includes('product') || (targetRole || '').toLowerCase().includes('manager');
  const template = isDesigner ? 'neon-creative' : (isPM ? 'executive-glass' : 'midnight-dev');
  
  const projects = [
    {
      title: "AI-Powered Analysis Engine",
      description: "Developed a Node.js framework capable of parsing user profiles and estimating matching benchmarks with <300ms response times.",
      skills: ["Node.js", "Express", "REST APIs", "Analytics"],
      whyItSuits: "Demonstrates capability to build and scale functional server-side applications."
    },
    {
      title: "Collaborative Agile Dashboard",
      description: "Created a real-time collaborative workspace interface using WebSockets, reducing task updates latency by 40%.",
      skills: ["React", "WebSockets", "CSS Grid", "State Management"],
      whyItSuits: "Shows mastery in modern front-end frameworks and real-time state sync."
    }
  ];

  return res.json({
    recommendedTemplate: template,
    suggestedProjects: projects,
    tailoredSkills: isDesigner ? ["Figma", "UI/UX", "Typography"] : (isPM ? ["Agile", "PRDs", "Product Analytics"] : ["JavaScript", "React", "Node.js"]),
    headline: `Transforming ideas into polished digital experiences for ${industry || 'modern platforms'}.`,
    aboutMe: `Detail-oriented ${targetRole || 'Professional'} focused on engineering scalable applications, designing beautiful interfaces, and optimizing overall client experiences.`
  });
});

// 4. Generate Cover Letter
app.post('/api/generate-cover-letter', async (req, res) => {
  const { resumeText, jobTitle, companyName, jdText } = req.body;

  if (isAIEnabled) {
    try {
      const systemInstruction = `You are a professional cover letter writer. Draft an engaging, tailored cover letter.`;
      const prompt = `Write a high-converting cover letter for the role: ${jobTitle} at Company: ${companyName}.
Use keywords from the Job Description: ${jdText || 'N/A'}. 
Extract professional highlights from this Resume: ${resumeText || 'N/A'}.
Format the output as a JSON object:
{
  "coverLetter": "Insert full letter content here, structured with paragraphs and appropriate salutations."
}`;

      const response = await callGeminiJSON(prompt, systemInstruction);
      return res.json(response);
    } catch (e) {
      console.error("Gemini cover letter generation failed:", e.message);
    }
  }

  // Fallback Cover Letter
  const letter = `Dear Hiring Team at ${companyName || 'Target Company'},

I am writing to express my strong interest in the ${jobTitle || 'desired'} position. With my background in building efficient web components and collaborating in agile settings, I am confident that I can add immediate value to your engineering efforts.

My previous projects helped improve user workflows and reduced load times. I look forward to bringing this experience to ${companyName || 'your team'} and matching my technical skills with your current goals.

Thank you for your consideration.

Sincerely,
Job Seeker`;

  return res.json({ coverLetter: letter });
});

// 5. LinkedIn Profile Optimizer
app.post('/api/linkedin-optimize', async (req, res) => {
  const { headline, about, experience } = req.body;

  if (isAIEnabled) {
    try {
      const systemInstruction = `You are a social media marketing and executive career coach. Optimize LinkedIn profile sections.`;
      const prompt = `Provide actionable ideas to optimize these LinkedIn sections. Headline: "${headline || ''}", About: "${about || ''}", Experience: "${experience || ''}".
Output JSON:
{
  "headlineSuggestions": [string],
  "aboutSuggestions": [string],
  "experienceSuggestions": [string]
}`;
      const response = await callGeminiJSON(prompt, systemInstruction);
      return res.json(response);
    } catch (e) {
      console.error("Gemini LinkedIn optimizer failed:", e.message);
    }
  }

  return res.json({
    headlineSuggestions: [
      "Include key technologies you master separated by vertical pipes (e.g. 'React | Node.js | AWS').",
      "Lead with value: 'Building fast backend web systems' rather than just a simple job title."
    ],
    aboutSuggestions: [
      "Use the first 3 lines to grab attention. Recount a professional problem you love solving.",
      "Add a bulleted 'Areas of Expertise' section for search discoverability."
    ],
    experienceSuggestions: [
      "Begin every bullet point with strong action verbs: engineered, optimized, spearheaded.",
      "Quantify scope: Mention team size, user traffic, budget sizes, or latency decreases."
    ]
  });
});

// 6. Mock Interview Simulator
app.post('/api/interview/start', async (req, res) => {
  const { role, industry } = req.body;

  if (isAIEnabled) {
    try {
      const systemInstruction = `You are a tech lead interviewing candidates. Ask role-specific questions.`;
      const prompt = `Start a mock interview for the role: ${role || 'Software Engineer'} in industry: ${industry || 'Tech'}.
Generate the very first interview question.
Output JSON:
{
  "sessionId": "${Date.now()}",
  "firstQuestion": "Question content here"
}`;
      const response = await callGeminiJSON(prompt, systemInstruction);
      return res.json(response);
    } catch (e) {
      console.error("Gemini interview start failed:", e.message);
    }
  }

  return res.json({
    sessionId: `mock-${Date.now()}`,
    firstQuestion: `Great to meet you today. Let's start the interview for the ${role || 'Software Engineer'} role. Can you tell me about a challenging project you worked on recently and how you handled the main technical bottleneck?`
  });
});

app.post('/api/interview/answer', async (req, res) => {
  const { sessionId, question, answer, history = [] } = req.body;

  if (isAIEnabled) {
    try {
      const systemInstruction = `You are an interviewer. Critically review the user's answer, provide constructive feedback, and decide to either ask a follow-up question or conclude the session.`;
      const prompt = `Review this candidate's response to the interview question:
Question: "${question}"
Candidate Answer: "${answer}"

Provide feedback, evaluate their strengths/weaknesses, and generate either a follow-up question or conclude.
Output JSON:
{
  "feedback": "Constructive critique of their answer, highlighting what they did well and how they could improve.",
  "nextQuestion": "Next question to ask, or empty if concluding",
  "isComplete": boolean
}

Current interview question number: ${history.length + 1}. If it reaches 3 questions, set isComplete = true.`;

      const response = await callGeminiJSON(prompt, systemInstruction);
      return res.json(response);
    } catch (e) {
      console.error("Gemini interview evaluation failed:", e.message);
    }
  }

  // Fallback Evaluation
  const rounds = history.length;
  const isComplete = rounds >= 2;
  
  let nextQ = "";
  if (!isComplete) {
    const defaultQuestions = [
      "Excellent explanation. How do you approach testing your code or validating your designs to ensure high quality before production deployment?",
      "Good point. Finally, can you describe a time you had a technical disagreement with a teammate and how you reached a resolution?"
    ];
    nextQ = defaultQuestions[rounds] || "What are your professional growth goals for the next year?";
  }

  return res.json({
    feedback: "Your answer is clear and structured. To make it stronger, try incorporating concrete numbers (e.g. how much performance improved) and explicitly mention the frameworks or tools you utilized.",
    nextQuestion: nextQ,
    isComplete: isComplete
  });
});

// --- Profile & Resume Save/Load ---
app.get('/api/profile', (req, res) => {
  const data = readJsonFile(RESUMES_PATH);
  res.json(data.default || {
    resumeText: "",
    completedSkills: [],
    completedBadges: []
  });
});

app.post('/api/profile', (req, res) => {
  const { resumeText, completedSkills, completedBadges, atsScore, breakdown, improvements, missingSkills, weakSkills, detectedRole } = req.body;
  const db = readJsonFile(RESUMES_PATH);
  
  db.default = {
    ...db.default,
    resumeText: resumeText !== undefined ? resumeText : db.default?.resumeText,
    completedSkills: completedSkills !== undefined ? completedSkills : db.default?.completedSkills || [],
    completedBadges: completedBadges !== undefined ? completedBadges : db.default?.completedBadges || [],
    atsScore: atsScore !== undefined ? atsScore : db.default?.atsScore,
    breakdown: breakdown !== undefined ? breakdown : db.default?.breakdown,
    improvements: improvements !== undefined ? improvements : db.default?.improvements || [],
    missingSkills: missingSkills !== undefined ? missingSkills : db.default?.missingSkills || [],
    weakSkills: weakSkills !== undefined ? weakSkills : db.default?.weakSkills || [],
    detectedRole: detectedRole !== undefined ? detectedRole : db.default?.detectedRole
  };
  
  writeJsonFile(RESUMES_PATH, db);
  res.json({ success: true, profile: db.default });
});

// --- Portfolio Save/Load & Public Serving ---
app.get('/api/portfolio-data/:username', (req, res) => {
  const username = req.params.username;
  const db = readJsonFile(PORTFOLIOS_PATH);
  if (db[username]) {
    res.json(db[username]);
  } else {
    // Generate default portfolio skeleton
    const defaultPortfolio = {
      username,
      template: "midnight-dev",
      headline: "Professional Developer",
      aboutMe: "I build modern web systems.",
      skills: ["HTML", "CSS", "JavaScript"],
      projects: [],
      views: []
    };
    res.json(defaultPortfolio);
  }
});

app.post('/api/portfolio-data/:username', (req, res) => {
  const username = req.params.username;
  const portfolioData = req.body;
  
  const db = readJsonFile(PORTFOLIOS_PATH);
  db[username] = {
    ...db[username],
    ...portfolioData,
    username,
    views: db[username]?.views || []
  };
  
  writeJsonFile(PORTFOLIOS_PATH, db);
  res.json({ success: true });
});

app.get('/api/analytics/:username', (req, res) => {
  const username = req.params.username;
  const db = readJsonFile(PORTFOLIOS_PATH);
  if (db[username]) {
    res.json(db[username].views || []);
  } else {
    res.json([]);
  }
});

// Render the public shareable portfolio view
app.get('/portfolio/:username', (req, res) => {
  const username = req.params.username;
  const db = readJsonFile(PORTFOLIOS_PATH);
  const data = db[username];

  if (!data) {
    return res.status(404).send(`
      <html>
        <head>
          <title>Portfolio Not Found</title>
          <style>
            body { background: #09090b; color: #f4f4f5; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
            h1 { color: #ef4444; }
          </style>
        </head>
        <body>
          <h1>Portfolio Not Found</h1>
          <p>The portfolio for user '@${username}' has not been configured yet.</p>
        </body>
      </html>
    `);
  }

  // Log view analytics
  const userAgent = req.headers['user-agent'] || 'Unknown';
  let browser = 'Other';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';

  const countries = ['United States', 'India', 'Canada', 'United Kingdom', 'Germany', 'Australia'];
  const country = countries[Math.floor(Math.random() * countries.length)]; // Simulate geo-lookup

  data.views = data.views || [];
  data.views.push({
    timestamp: new Date().toISOString(),
    country,
    browser
  });
  
  db[username] = data;
  writeJsonFile(PORTFOLIOS_PATH, db);

  // Template rendering helper
  const templateHtml = renderPortfolioTemplate(data);
  res.send(templateHtml);
});

function renderPortfolioTemplate(data) {
  const theme = data.template || 'midnight-dev';
  
  let styles = '';
  if (theme === 'midnight-dev') {
    styles = `
      body { background-color: #0b0f19; color: #cbd5e1; font-family: 'Courier New', Courier, monospace; }
      .container { max-width: 800px; margin: 4rem auto; padding: 2rem; border: 1px solid #1e293b; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); border-radius: 8px; box-shadow: 0 0 20px rgba(59,130,246,0.15); }
      h1 { color: #3b82f6; font-size: 2.5rem; margin-bottom: 0.5rem; text-shadow: 0 0 10px rgba(59,130,246,0.3); }
      .headline { font-size: 1.2rem; color: #06b6d4; margin-bottom: 2rem; }
      .section-title { font-size: 1.5rem; color: #3b82f6; border-bottom: 1px solid #1e293b; padding-bottom: 0.5rem; margin-top: 2rem; }
      .skill-tag { display: inline-block; background: #1e293b; color: #3b82f6; padding: 0.3rem 0.8rem; border-radius: 4px; font-size: 0.9rem; margin: 0.3rem; border: 1px solid #334155; }
      .project-card { border: 1px solid #1e293b; background: rgba(30, 41, 59, 0.4); padding: 1.5rem; border-radius: 6px; margin: 1rem 0; }
      .project-title { color: #f1f5f9; font-weight: bold; margin-bottom: 0.5rem; }
    `;
  } else if (theme === 'executive-glass') {
    styles = `
      body { background-color: #f8fafc; color: #334155; font-family: 'Outfit', sans-serif; }
      .container { max-width: 850px; margin: 4rem auto; padding: 3rem; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border-radius: 16px; border: 1px solid rgba(226, 232, 240, 0.8); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04); }
      h1 { color: #0f172a; font-size: 2.8rem; font-weight: 700; margin-bottom: 0.5rem; }
      .headline { font-size: 1.3rem; color: #475569; margin-bottom: 2.5rem; font-weight: 300; }
      .section-title { font-size: 1.6rem; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; margin-top: 3rem; font-weight: 600; }
      .skill-tag { display: inline-block; background: #f1f5f9; color: #475569; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; margin: 0.3rem; font-weight: 500; }
      .project-card { background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 12px; margin: 1.2rem 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); }
      .project-title { color: #0f172a; font-weight: 600; margin-bottom: 0.5rem; font-size: 1.15rem; }
    `;
  } else { // neon-creative
    styles = `
      body { background-color: #050505; color: #e4e4e7; font-family: 'Inter', sans-serif; }
      .container { max-width: 800px; margin: 4rem auto; padding: 2.5rem; background: linear-gradient(145deg, #0e0e11, #08080a); border-radius: 24px; border: 1px solid #27272a; box-shadow: 0 20px 40px rgba(139, 92, 246, 0.08); }
      h1 { background: linear-gradient(to right, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 3rem; font-weight: 800; margin-bottom: 0.5rem; }
      .headline { font-size: 1.2rem; color: #ec4899; margin-bottom: 2.5rem; text-transform: uppercase; letter-spacing: 2px; }
      .section-title { font-size: 1.4rem; color: #a855f7; border-bottom: 1px solid #27272a; padding-bottom: 0.5rem; margin-top: 3rem; font-weight: bold; }
      .skill-tag { display: inline-block; background: rgba(168, 85, 247, 0.1); color: #c084fc; padding: 0.4rem 0.9rem; border-radius: 8px; font-size: 0.85rem; margin: 0.3rem; border: 1px solid rgba(168, 85, 247, 0.2); }
      .project-card { border-left: 4px solid #a855f7; background: #0f0f13; padding: 1.5rem; border-radius: 0 12px 12px 0; margin: 1.2rem 0; }
      .project-title { color: #ffffff; font-weight: 700; margin-bottom: 0.5rem; }
    `;
  }

  const skillsList = (data.skills || []).map(s => `<span class="skill-tag">${s}</span>`).join('');
  const projectsList = (data.projects || []).map(p => `
    <div class="project-card">
      <div class="project-title">${p.title}</div>
      <div style="font-size: 0.95rem; margin-bottom: 0.8rem; line-height: 1.4;">${p.description}</div>
      <div style="margin-bottom: 0.5rem;">
        ${(p.skills || []).map(s => `<span class="skill-tag" style="font-size:0.75rem; padding: 0.15rem 0.5rem;">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.username}'s Portfolio | PortfolioHub</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Outfit:wght@300;500;700&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .about-text { line-height: 1.6; margin-top: 1rem; font-size: 1.05rem; }
        ${styles}
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${data.username}</h1>
        <div class="headline">${data.headline || ''}</div>
        
        <div class="section-title">About Me</div>
        <p class="about-text">${data.aboutMe || ''}</p>
        
        <div class="section-title">Skills & Technologies</div>
        <div style="margin-top: 1rem;">
          ${skillsList || '<p style="color:gray;">No skills specified yet.</p>'}
        </div>
        
        <div class="section-title">Projects</div>
        <div style="margin-top: 1rem;">
          ${projectsList || '<p style="color:gray;">No projects generated yet.</p>'}
        </div>
      </div>
    </body>
    </html>
  `;
}

// Serve SPA Frontend for other routes
app.get('*', (req, res, next) => {
  // If it starts with /api or /portfolio, skip to default route matching
  if (req.path.startsWith('/api') || req.path.startsWith('/portfolio')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`PortfolioHub server listening at http://localhost:${PORT}`);
});
