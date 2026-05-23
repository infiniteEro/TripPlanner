# 🌍 Traveloop

Traveloop is a polished travel planning and journaling experience built around a modern, glassmorphism-inspired UI. It combines local-first data handling, trip planning tools, budget tracking, and social features into one interactive website.

---

## ✨ Core Website Features

### 🧭 Landing & Access
- **Landing page (`index.html`)** with premium hero visuals, feature highlights, and modern typography.
- **Login page (`login.html`)** for user access and session flow.
- **Profile page (`profile.html`)** for managing personal traveler details.
- **Shared trips page (`shared.html`)** for collaborative planning and shared itinerary views.

### 📊 Dashboard & Trip Management
- **Dashboard (`dashboard.html`)** serves as the travel command center with summary cards, active trip previews, and quick actions.
- **Itinerary planner (`itinerary.html`)** for creating multi-city schedules, adding travel stops, and organizing trip days.
- **Route planner (`route-planner.html`)** for visual route mapping, time estimates, and transport planning.

### 💰 Budget & Expenses
- **Budget tracker (`budget.html`)** to set budgets, log expenses, and view spending breakdowns.
- **Expense categories** for food, lodging, transport, activities, and more.
- **Visual progress indicators** to keep spending under control.

### 🧳 Travel Tools
- **Packing list manager (`packing.html`)** with category-based checklists and item tracking.
- **Notes & journal (`notes.html`)** for travel memories, trip notes, and planning details.
- **Friends & collaboration (`friends.html`)** for managing travel companions and shared planning.

### 🤖 Assistant & Extras
- **Chatbot page (`chatbot.html`)** for an AI-style travel assistant experience.
- **Local-first behavior** using browser storage for fast offline-friendly interactions.
- **Supabase-ready integrations** for optional backend syncing and authenticated storage.

---

## 🎨 Design Highlights
- **Glassmorphism UI** with frosted glass cards, blur effects, and layered depth.
- **Tailwind-driven styling** for consistent responsive layouts.
- **Clean typography** using *Plus Jakarta Sans* and *Inter*.
- **Responsive pages** designed for desktop and mobile use.

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS, JavaScript, Tailwind CSS.
- **Backend:** Node.js, Express.js.
- **Auth / Storage:** Supabase client support in `supabase.js` and `utils/supabase/`.
- **Data:** Local JSON files, browser storage, and optional Supabase hooks.

---

## 🚀 Run Locally

### Prerequisites
- Node.js (v16+)
- npm

### Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/boddepallihemavarun/TravelLoop.git
   cd "Travel Loop"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Open the website in your browser.

---

## 📁 Project Structure

```text
.
├── app/                         # Next.js page logic and components
├── api.js                       # App frontend helpers and data logic
├── package.json                 # Node.js backend dependencies and scripts
├── server.js                    # Express server entrypoint
├── index.html                   # Landing page
├── dashboard.html               # Main travel dashboard
├── itinerary.html               # Itinerary planner
├── budget.html                  # Budget tracker
├── friends.html                 # Friends & collaboration
├── notes.html                   # Travel journal
├── packing.html                 # Packing checklist
├── route-planner.html           # Route planning page
├── chatbot.html                 # Travel chatbot assistant
├── login.html                   # Login page
├── profile.html                 # User profile page
├── shared.html                  # Shared trip view
├── supabase.js                  # Supabase client setup
└── utils/                       # backend and middleware helpers
    └── supabase/
        ├── client.ts
        ├── middleware.ts
        └── server.ts
```

---

## 📌 Notes
- The project is built around a local-first experience with optional Supabase backend support.
- Many pages use Tailwind CSS and modern JavaScript for interactive UI behavior.

---

## 🛡️ License
This repository is provided under the MIT License.
