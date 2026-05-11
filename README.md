# 🌍 Traveloop: Your Collaborative Travel Route Planner

Traveloop is a premium, high-fidelity travel planning application designed to bridge the gap between individual itinerary building and group collaboration. Plan complex multi-city routes, track shared expenses, and synchronize your journeys with your travel squad in real-time.

---

## 🚀 Key Features

### 🗺️ Advanced Route Planner
- **Intelligent Routing:** Plan trips between major Indian destinations (Manali, Agra, Jaipur, Kaziranga, and more).
- **Transport Options:** Instant calculations for flight, train, and bus routes with duration and cost estimates.
- **Save & Share:** One-click saving to your private vault and instant broadcasting to shared travel groups.

### 👥 Group Collaboration
- **Shared Trips:** View group-specific itineraries and collaborative plans in a dedicated "Squad" view.
- **Friend Management:** Add explorers to your network and invite them to join existing or new travel groups.

### 📊 Personal Dashboard
- **Trip Vault:** Access all your saved itineraries in a beautiful, card-based interface.
- **Smart Analytics:** Track your travel stats, including total cities covered and budget utilization.
- **AI Smart Planner:** Tell the AI your budget and duration, and it will generate a custom day-by-day plan with hotel recommendations.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS (Premium Glassmorphism Design).
- **Backend:** Supabase (PostgreSQL, Authentication, Real-time Sync).
- **Styling:** Custom Design System with Inter and Plus Jakarta Sans typography.

---

## ⚙️ Setup & Installation

### 1. Supabase Configuration
Traveloop requires a Supabase project for authentication and data storage.
1. Create a project at [supabase.com](https://supabase.com).
2. Go to **Settings > API** to find your **Project URL** and **Anon Key**.
3. Update these values in `index.html`, `dashboard.html`, and `login.html`.

### 2. Database Schema
Run the provided SQL setup to create the necessary tables and security policies.
1. Open the **SQL Editor** in your Supabase dashboard.
2. Copy and paste the contents of `supabase_setup.sql`.
3. Click **Run**.

### 3. Environment Variables (for Next.js/SSR)
If you are using the Next.js/SSR features, create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

### 4. Running Locally
Simply open `index.html` in your browser or use a local server like Live Server (VS Code) or:
```bash
npx serve .
```

---

## 📁 Project Structure

- `index.html`: Landing page with integrated Auth toggle.
- `dashboard.html`: Main user hub and trip management.
- `travel-route-planner (3).html`: High-fidelity multi-destination route builder.
- `friends.html`: Group collaboration and social hub.
- `itinerary.html`: Detailed day-by-day itinerary view.
- `supabase_setup.sql`: Database migration script.

---

## 🛡️ License
Traveloop is licensed under the MIT License.

---

*“Start your next unforgettable journey today with Traveloop.”*
