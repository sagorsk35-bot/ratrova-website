
# 👨‍💻 RATROVA Developer & Team Guide

**Welcome to Ratrova OS.**
This is not just a website; it is our central headquarters. As a member of the Ratrova Elite Team, you are expected to work *smarter*, not just harder.

---

## 🧠 The New AI Policy: "Co-pilot, Not Autopilot"

We provide you with the world's best AI models (GPT-4, Gemini Pro, Claude) directly inside this dashboard.

**The Rule:**
You must understand *what* you are building.
- ❌ **Do NOT** copy-paste requirements into ChatGPT.com.
- ✅ **DO** use the **Ratrova AI Studio** (`/dashboard/ai-studio`).

### How to use AI Studio:
1.  **Select Model**: Choose the best brain for the job (e.g., GPT-4 for logic, Gemini for creative writing).
2.  **Input Reasoning**: You will see a box labeled **"Logic / Reasoning"**.
    *   You *must* explain your plan here.
    *   *Example:* "I need a React component for a luxury slider. I plan to use Swiper.js because it supports touch events."
    *   **If you cannot explain the logic, you are not ready to write the code.**
3.  **Audit**: All prompts and reasoning are logged. We review these to see how you are approaching problems.

---

## ⏰ Office Hours (Time-Fencing)

To ensure different creative energy and work-life balance:
*   **System Opens**: 9:00 AM BD Time
*   **System Closes**: 6:00 PM BD Time

Outside of these hours, the dashboard is **LOCKED**.
*If you have an urgent deadline, request an override from the Admin.*

---

## 🛠 Technical Workflow (For Sakib)

### 1. Setup
```bash
git clone ...
npm install app
cp .env.local.example .env.local
# Ask Admin for the API Keys
npm run dev
```

### 2. Database (Supabase)
We use Supabase for verified data.
- **Do not** run raw SQL in production without review.
- Always check `supabase_schema.sql` for the latest structure.

### 3. Deployment
- Push to the `main` branch to trigger a deploy.
- **Vercel** will automatically update the live site.

---

*Built for the Architects of the Future.*
