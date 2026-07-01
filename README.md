<div align="center">

# 🎓 Pacific University — Student Portal

**A multi-role campus management dashboard powered by React 19, Vite, Express, and Gemini AI.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)](https://expressjs.com)
[![Gemini](https://img.shields.io/badge/Gemini-3.5--flash-4285F4?logo=googlegemini&logoColor=white)](https://ai.google.dev)

**[🌐 Live Demo](https://university-student-portal-395027100445.us-west1.run.app)**

</div>

---

## 📖 What is this?

A full front-end simulation of a university ERP system — one codebase, **four role-based dashboards** (Student, Teacher, Admin, Advisor), an in-memory mock database, and three Gemini-powered AI endpoints (study assistant chat, resume reviewer, GPA predictor).

There's no real backend database — `mockDb.ts` seeds everything in memory on load, which makes this ideal for demos, prototyping, or as a UI/UX reference.

<details>
<summary><strong>🖼️ Click to preview role dashboards</strong></summary>

| Role | What they see |
|---|---|
| 🎓 **Student** | Dashboard, Schedule, Grades, Assignments, Attendance, Finance, Library, Placements, Notifications, Profile |
| 👨‍🏫 **Teacher** | `TeacherDashboard.tsx` — class management view |
| 🛡️ **Admin** | `AdminDashboard.tsx` — institution-wide oversight, audit logs |
| 🧑‍💼 **Advisor** | `AdvisorDashboard.tsx` — student notes & academic advising |

Switch roles live from the in-app role switcher (`selectedRole` state in `App.tsx`) — no separate login needed in the demo build.

</details>

---

## ✨ Features

<details open>
<summary><strong>🎯 Core Student Modules</strong></summary>

- 🏠 **Dashboard** — at-a-glance overview
- 🗓️ **Schedule** — class timetable
- 🏆 **Grades** — exam marks & CGPA
- 📝 **Assignments** — submissions, due dates, grading/feedback
- ✅ **Attendance** — attendance records
- 💰 **Finance** — fee installments & payment status
- 📚 **Library** — book loans, renewals, digital assets
- 💼 **Placements** — eligible companies, interview rounds
- 🔔 **Notifications** — academic/exam/fee/placement alerts
- 👤 **Profile** — personal & academic details

</details>

<details>
<summary><strong>🤖 AI-Powered Features (Gemini 3.5 Flash)</strong></summary>

| Endpoint | Purpose |
|---|---|
| `POST /api/chat` | **"Aura"** — an empathetic AI academic counselor / study assistant chatbot, context-aware of the student's data |
| `POST /api/resume-review` | Scores a resume out of 100, returns strengths, improvements, and keyword suggestions as structured JSON |
| `POST /api/predict-gpa` | Predicts whether a target CGPA is realistic given study hours & attendance, returns a personalized tip |

> ⚠️ These endpoints require a valid `GEMINI_API_KEY` — without it they'll return a config error (handled gracefully in the API response via `isConfigError`).

</details>

<details>
<summary><strong>🎨 UI/UX</strong></summary>

- 🌗 Light/Dark theme toggle (persisted to `localStorage`)
- 📱 Responsive layout with mobile menu
- 🎬 Smooth animations via [`motion`](https://motion.dev) (Framer Motion successor)
- 🎨 Tailwind CSS v4 styling
- 🔣 [`lucide-react`](https://lucide.dev) icon set

</details>

---

## 🧰 Tech Stack

```
Frontend   → React 19 + TypeScript + Vite 6 + Tailwind CSS 4 + Motion
Backend    → Express 4 (TypeScript, via tsx) + Vite middleware in dev
AI         → Google Gemini API (@google/genai)
Data       → In-memory mock DB (no external database)
Deploy     → Google Cloud Run
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- A **Gemini API key** — [get one here](https://ai.google.dev) (only needed for AI features)

### 1. Clone & install

```bash
git clone <your-repo-url>
cd university-student-portal
npm install
```

### 2. Configure environment variables

Copy the example env file and add your key:

```bash
cp .env.example .env
```

```env
GEMINI_API_KEY="your-gemini-api-key-here"
APP_URL="http://localhost:3000"
```

> The app runs fine **without** a key — you'll just see a config error if you try the AI chat, resume review, or GPA predictor.

### 3. Run in development

```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

<details>
<summary><strong>🏗️ Production build & run</strong></summary>

```bash
npm run build   # Builds the client (Vite) and bundles the server (esbuild)
npm start        # Runs the production server from dist/server.cjs
```

Other useful scripts:

```bash
npm run preview  # Preview the built client
npm run lint     # Type-check with tsc (no emit)
npm run clean    # Remove dist/ and server.js
```

</details>

---

## 📁 Project Structure

```
university-student-portal/
├── server.ts                    # Express server + Gemini AI endpoints
├── index.html                   # Vite entry HTML
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Root component, routing & global state
│   ├── types.ts                 # Shared TypeScript interfaces
│   ├── data.ts                  # Static seed data (notifications, assignments)
│   ├── mockDb.ts                # In-memory mock database
│   ├── index.css                # Global styles (Tailwind)
│   └── components/
│       ├── DashboardScreen.tsx
│       ├── ScheduleScreen.tsx
│       ├── GradesScreen.tsx
│       ├── AssignmentsScreen.tsx
│       ├── AttendanceScreen.tsx
│       ├── FinanceScreen.tsx
│       ├── LibraryScreen.tsx
│       ├── PlacementsScreen.tsx
│       ├── NotificationsScreen.tsx
│       ├── ProfileScreen.tsx
│       ├── TeacherDashboard.tsx
│       ├── AdminDashboard.tsx
│       └── AdvisorDashboard.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .env.example
```

---

## 🔌 API Reference

<details>
<summary><code>POST /api/chat</code> — AI Study Assistant</summary>

**Body:**
```json
{
  "messages": [{ "text": "How can I improve my CGPA this semester?" }],
  "context": { "currentGpa": 3.4, "attendance": 85 }
}
```

**Response:**
```json
{ "text": "Markdown-formatted advice from Aura..." }
```

</details>

<details>
<summary><code>POST /api/resume-review</code> — AI Resume Reviewer</summary>

**Body:**
```json
{ "resumeText": "...", "targetRole": "Software Engineer" }
```

**Response:**
```json
{
  "score": 82,
  "strengths": ["...", "..."],
  "improvements": ["...", "..."],
  "keywordSuggestions": ["...", "..."],
  "summary": "..."
}
```

</details>

<details>
<summary><code>POST /api/predict-gpa</code> — GPA Predictor</summary>

**Body:**
```json
{
  "targetGpa": 3.8,
  "studyHours": 15,
  "currentGpa": 3.4,
  "attendance": 85
}
```

**Response:**
```json
{ "tip": "A personalized, data-driven tip..." }
```

</details>

---

## 🗺️ Roadmap Ideas

- [ ] Connect to a real database (Postgres/MongoDB) instead of `mockDb.ts`
- [ ] Add authentication (currently role-switching is a demo toggle, not real auth)
- [ ] Persist AI chat history per student
- [ ] Add automated tests

---

## 📄 License

Add your license of choice here (e.g. MIT).

<div align="center">

Made with ⚛️ React, ⚡ Vite, and a bit of ✨ Gemini magic.

</div>
