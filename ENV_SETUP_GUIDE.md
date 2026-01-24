
# 🔑 Environment Key Setup

To connect your "Ratrova Workspace" to the cloud, we need to create two free accounts and get the API Keys.

## 1. Authentication (Clerk)
*Go to [dashboard.clerk.com](https://dashboard.clerk.com) and create a new application named "Ratrova Workspace".*

**Required Keys:**
- `NEXT_PUBLIC_CLERK_PUBLISHABLEKEY`
- `CLERK_SECRET_KEY`

## 2. Database (Supabase)
*Go to [supabase.com](https://supabase.com) and create a new project named "Ratrova Database".*

**Required Keys:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. AI Models (Optional for now)
*If you have API keys for Gemini, GPT-4, or Claude, have them ready.*

---

**Create a file named `.env.local` in your root folder and paste the keys in this format:**

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```
