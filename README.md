# 🪷  NagrikSeva
 
> AI-Powered Citizen Assistance Platform for Uttar Pradesh
 
---
 
## 📌 Problem & Domain
 
Most citizens, especially in smaller towns and rural areas, don't know which government schemes they qualify for, miss application deadlines, or get stuck navigating confusing document processes (PAN, Aadhar, Voter ID). Language is also a barrier — most government portals are English-only — and there's no single, easy place to raise and track grievances.
 
**Themes Selected (at least one):**
- [ ] Human Experience & Productivity
- [ ] Climate & Sustainability Systems
- [ ] HealthTech & Bio Platforms
- [ ] Learning & Knowledge Systems
- [ ] Work, Finance & Digital Economy
- [ ] Infrastructure, Mobility & Smart Systems
- [ ] Trust, Identity & Security
- [ ] Media, Social & Interactive Platforms
- [x] Public Systems, Governance and Civic Tech
- [ ] Developer Tools & Software Infrastructure
---
 
## 🎯 Objective
 
NagrikSeva solves the information gap between citizens and government welfare schemes in Uttar Pradesh.
 
- **Target users:** Citizens across UP — particularly those in smaller towns/rural areas, first-time applicants, and Hindi-speaking users who find English-only government portals hard to navigate
- **Pain point:** Not knowing which schemes they're eligible for, missing deadlines, struggling with document application steps, and having no easy way to file/track grievances
- **Value provided:** A single bilingual platform that personally matches users to eligible schemes, guides them step-by-step through document processes, alerts them before deadlines, lets them file trackable grievances, and connects them to nearby Jan Seva Kendras — all supported by an AI assistant available on every page
---
 
## 🧠 Team & Approach
 
### Team Name:
`EdFox`
 
### Team Members:
- Anushka Srivastava ([GitHub](https://github.com/anushkasrvstv))
### Your Approach:
- Chose this problem because scheme discovery and document processes remain a real, everyday pain point for citizens — especially those who aren't fluent in English or aren't tech-savvy
- Key challenges addressed: building an eligibility-matching system that works reliably across varied user profiles (age, income, category, occupation), and making the experience genuinely bilingual rather than just translated
- Initially deployed the frontend on GitHub Pages, but pivoted to Render since the project needed a live Express backend to power the SevaMitra AI assistant and other server-side features — GitHub Pages only supports static hosting
- Debugged and fixed asset path issues (CSS/JS not loading) when moving from local development to hosted deployment
- Added the SevaMitra AI assistant later in development, after realizing users needed more real-time guidance navigating the platform rather than static instructions alone
- Added the grievance redressal module after recognizing that scheme discovery alone wasn't enough — citizens also needed a direct way to report issues faced at Jan Seva Kendras and track resolution status
- Chose JSON file-based storage over a full database to keep the build lightweight within the hackathon timeframe, with database migration planned as a next step
---
 
## 🛠️ Tech Stack
 
### Core Technologies Used:
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** JSON file-based storage (no external database)
- **APIs:** Google Gemini AI (powers the SevaMitra assistant)
- **Hosting:** Render
### Additional Technologies Used (Optional):
- [x] AI / ML
- [ ] Web3 / Blockchain
- [ ] Cyber Security
- [ ] Cloud
---
 
## 🏆 Sponsored Track (Optional)
 
- [ ] **Expo Track** – Built using Expo
- [ ] **Neo4j Track** – Uses AuraDB as primary database
- [ ] **Base44 Track** – Prototype/Final Product built using Base44
> _Not applicable_
 
---
 
## ✨ Key Features
 
- ✅ **Bilingual Interface** — Full support for Hindi and English
- ✅ **Eligibility Finder** — Login-based wizard matches users to schemes by age, income, category, and occupation
- ✅ **Smart Notifications** — Alerts for upcoming schemes and application deadlines
- ✅ **Service Roadmaps** — Step-by-step guidance for applying to PAN, Aadhar, Voter ID, and other documents
- ✅ **Grievance Redressal** — File complaints against Jan Seva Kendras and download them as PDF
- ✅ **Analytics Dashboard** — Most-viewed and most-applied schemes, plus a Top 5 trending section
- ✅ **Jan Seva Kendra Locator** — Find centers across UP districts with location and contact number
- ✅ **SevaMitra AI Assistant** — Available on every page to help users navigate and get instant answers

 
---
 
## 📽️ Demo & Deliverables
 
- **Demo Video Link (Mandatory):** [https://youtu.be/X78UOKbN5xk]
- **Deployment Link (Recommended):** [https://nagrikseva-3zgq.onrender.com]
- **Pitch Deck / PPT (Optional):** [https://1drv.ms/p/c/f09de06eba868715/IQCdJ0YNw2hfTIhO-JWWaQl9ATI4_u0FBaeAa7Ux-OpKx1E?e=TnLSFh]
---
 
## ✅ Tasks & Bonus Checklist
 
- [ ] All team members completed the mandatory social task
- [ ] Bonus Task 1 – Badge sharing
- [ ] Bonus Task 2 – Blog/article
*(Refer to Participant Manual for details)*
 
---
 
## 🧪 How to Run the Project
 
### Requirements:
- Node.js installed
- `.env` file with required environment variables (see below)
### Local Setup:
```bash
# Clone the repo
git clone https://github.com/anushkasrvstv/NagrikSeva.git
cd NagrikSeva
 
# Install dependencies
npm install
 
# Add your environment variables in a .env file
 
# Run the server
node server.js
```
 
The app will be available at `http://localhost:3000`.
 
---
 
## 🧬 Future Scope
 
- 🗄️ Move from JSON file-based storage to a persistent database (e.g. MongoDB) so user data, grievances, and applications survive server restarts
- 📈 Expand Jan Seva Kendra data beyond UP to all Indian states
- 🛡️ Integrate directly with official government scheme APIs for real-time data
- 🌐 Add SMS-based notifications for users without smartphones or reliable internet access
---
 
## 📎 Resources / Credits
 
- Google Gemini AI — powers the SevaMitra assistant
- Scheme and Jan Seva Kendra data compiled and structured manually in JSON format (no external dataset used)
- Open-source libraries via npm (see `package.json` for the full list, e.g. Express.js for the backend server)
---
 
## 🏁 Final Words
 
Built independently as a step toward making government scheme access simpler and more equitable for citizens across Uttar Pradesh — especially those underserved by English-only, fragmented portals.
 
