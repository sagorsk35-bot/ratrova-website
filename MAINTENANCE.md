
# 🛠 RATROVA Website Maintenance Guide

This guide explains how to update your live website at **ratrova.com**.

## 🚀 How to Update the Live Site

Whenever you (or I) change any code in the `ratrova-ULTIMATE` folder, follow these steps to see the changes online:

### Step 1: Push to GitHub
Open your terminal in the project folder and run:
```bash
git add .
git commit -m "Describe your changes here"
git push origin main
```

### Step 2: Automatic Vercel Update
- **Vercel** is connected to your GitHub. 
- As soon as you "Push", Vercel will automatically start building the new version.
- Within 30-60 seconds, your changes will be live at `ratrova.com`.

---

## 🤖 How to let the Agent (Me) do this for you?

In this session, you had to type some commands manually because of security. To let me handle everything automatically next time, you can do these two things:

1. **Install GitHub CLI**: Install `gh` on your Mac. Once you log in there once (`gh auth login`), I can push code to GitHub for you without asking for your password.
2. **Install Vercel CLI**: Install `vercel` (`npm install -g vercel`). Once you log in (`vercel login`), I can manage your deployments directly.

## 📁 Key Links
- **Live Site**: [https://ratrova.com](https://ratrova.com)
- **Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
- **GitHub Repo**: [https://github.com/sagorsk35-bot/ratrova-website](https://github.com/sagorsk35-bot/ratrova-website)

---
*Created by your AI Coding Assistant.*
