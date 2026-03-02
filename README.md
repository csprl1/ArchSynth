# 🏗️ Arch Synth

AI-Powered Architectural Visualization SaaS

Transform 2D floor plans into photorealistic 3D renders using state-of-the-art AI models — powered by modern frontend architecture and serverless cloud infrastructure.

🔗 **Live Demo:** https://arch-synth.vercel.app/

---

## ✨ Introduction

Arch Synth is an AI-driven architectural visualization platform built with **React**, **TypeScript**, and **Puter**.

It enables architects, designers, and creators to convert flat 2D floor plans into immersive, photorealistic 3D renders using advanced AI models including **Claude** and **Gemini**.

The platform provides:

- ⚡ Instant AI-based 2D → 3D transformation  
- ☁️ Permanent media hosting  
- 🗂 Persistent metadata & ownership mapping  
- 🌍 Public community feed  
- 🧠 Serverless architecture with high-performance KV storage  

If you're getting started and face any issues, join the active Discord community (50k+ members) where developers help each other daily.

---

## 🚀 Live Deployment

**Production URL:**  
👉 https://arch-synth.vercel.app/

**Hosting:** Vercel  
**Backend Infrastructure:** Puter Cloud (Workers, KV, AI, Storage)

---

## ⚙️ Tech Stack

### Frontend
- React – Component-based UI architecture
- Vite – High-performance dev & build tool
- TypeScript – Type safety & maintainability
- TailwindCSS – Utility-first styling system

### Cloud & Backend
- Puter – Cloud OS providing:
  - Serverless Workers
  - KV database
  - Permanent storage
  - AI model hosting
- Puter.js – JavaScript SDK for interacting with Puter services

### AI & Productivity
- Claude & Gemini – AI models powering 2D-to-3D transformation
- CodeRabbit – AI-powered code review automation
- Junie (JetBrains) – AI-assisted development & prompt engineering

---

## 🔋 Core Features

### 🏗 2D-to-3D Visualization
Instantly convert architectural floor plans into photorealistic 3D renders using advanced AI pipelines.

### ☁️ Persistent Media Hosting
Every uploaded file and generated render is permanently hosted with public URLs.

### 🗂 Dynamic Project Gallery
Personal workspace that stores:
- Project history
- Metadata
- Ownership mapping
- Visibility controls

### 🔍 Side-by-Side Comparison
Interactive before/after visualization of:
- Original 2D sketch
- AI-rendered 3D output

### 🌍 Global Community Feed
Public discovery engine allowing one-click sharing of architectural creations.

### 🔐 Privacy Controls
Granular toggles for:
- Public / Private project visibility
- User-based access control

### 🧾 Ownership Mapping
Robust metadata system that tracks:
- User ID
- Project ID
- Asset URLs
- Creation timestamps

### 📤 Modern Export System
Download high-resolution AI renders for:
- Client presentations
- Pitch decks
- Architectural proposals
- Marketing assets

---

## 🏗️ System Architecture

Frontend (React + Vite + TypeScript)  
↓  
Puter.js SDK  
↓  
Puter Cloud Infrastructure  
- Serverless Workers  
- KV Database  
- Permanent File Storage  
- Hosted AI Models (Claude / Gemini)

---

## 📁 Project Structure

```
arch-synth/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── services/
│   └── types/
│
├── worker/           # Puter serverless workers
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🧠 AI Workflow Overview

1. User uploads 2D floor plan  
2. File stored permanently via Puter storage  
3. Metadata recorded in KV database  
4. Worker triggers AI model (Claude / Gemini)  
5. AI generates photorealistic render  
6. Render stored permanently  
7. Project added to:
   - Personal Gallery
   - (Optional) Global Feed  

---

## 🛠 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/arch-synth.git
cd arch-synth
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
VITE_PUTER_APP_ID=your_app_id
VITE_PUTER_API_KEY=your_api_key
```

---

## 🌐 Deployment

This project is deployed on **Vercel**.

To deploy:

```bash
vercel deploy
```

Make sure:
- Environment variables are configured
- Puter credentials are properly set

---

## 📊 Performance & Scalability

- ⚡ Vite-based lightning-fast builds
- 📦 Optimized production bundles
- ☁️ Serverless backend scalability
- 🌍 Global CDN distribution via Vercel
- 🧠 AI offloaded to hosted cloud models
- 🔁 KV-based metadata caching

---

## 🧩 Engineering Principles

- Modular component architecture
- Strict TypeScript typing
- Reusable service abstractions
- Worker-based AI execution separation
- Scalable storage strategy
- Clean ownership and metadata schema

---

## 📈 Future Roadmap

- Multi-angle rendering support  
- Real-time 3D preview mode  
- Interior style presets  
- API access for enterprise clients  
- Collaborative project editing  
- Advanced rendering controls  

---

## 📄 License

MIT License

---

Built with precision using modern AI infrastructure.
