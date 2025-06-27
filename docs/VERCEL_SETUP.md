# Vercel Setup Guide for FlowConAI Chatbot

Since `vercel dev` requires login, here are alternative solutions:

## Option 1: Deploy to Vercel (Recommended)

1. **Create a Vercel account** at https://vercel.com/signup

2. **Install Vercel CLI and login**:
   ```bash
   npm install -g vercel
   vercel login
   ```

3. **Deploy your project**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Add your `GOOGLE_GENERATIVE_AI_API_KEY` when asked

4. **Your app will be live** with working API routes!

## Option 2: Use Local Testing Without API

If you just want to see the UI without the chatbot functionality:

```bash
yarn dev
```

- The site will work at http://localhost:5173
- The chatbot UI will appear but won't respond (no API routes)

## Option 3: Create a Vercel Account First

1. Go to https://vercel.com/signup
2. Sign up with GitHub/GitLab/Email
3. Then run:
   ```bash
   vercel login
   vercel dev
   ```

## Why Vercel is Needed

The chatbot uses:
- **Edge Functions** for API routes (`/api/chat` and `/api/match-pattern`)
- **Server-side environment variables** for the Google AI API key
- **Streaming responses** for real-time chat

These features require Vercel's runtime environment.

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/flowcon-landing)

Just click the button, add your `GOOGLE_GENERATIVE_AI_API_KEY`, and deploy!