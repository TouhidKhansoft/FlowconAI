# Troubleshooting API Issues

## Common Issues and Solutions

### 1. API Routes Not Working (500 Error on /api/chat)

**Problem**: Getting `POST http://localhost:5173/api/chat 500 (Internal Server Error)`

**Solution**: You must use `vercel dev` instead of `yarn dev`:

```bash
# Stop current server (Ctrl+C)
# Then run:
vercel dev
```

This will run on port 3000 (not 5173) with both frontend and API routes.

### 2. Proxy Error (ECONNREFUSED 127.0.0.1:3001)

**Problem**: `http proxy error: /api/chat Error: connect ECONNREFUSED 127.0.0.1:3001`

**Solution**: This was caused by incorrect Vite proxy configuration. Already fixed by:
- Removing proxy configuration from vite.config.js
- Updating vercel.json
- Using proper Vercel Edge runtime

### 3. Google AI API Quota Exceeded

**Problem**: Chat stops working with quota error

**Solutions**:
1. Wait 1 minute for rate limit to reset
2. Create new API key (see create-new-api-key.md)
3. Upgrade to paid Google Cloud billing

### 4. Testing API Endpoints

Run the test script while `vercel dev` is running:

```bash
# In one terminal:
vercel dev

# In another terminal:
node test-api-endpoint.js
```

### 5. Environment Variables

Make sure `.env.local` contains:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
```

### 6. Correct Development Commands

```bash
# For frontend only (no API):
yarn dev

# For frontend + API (required for chatbot):
vercel dev
# or
yarn dev:vercel
```

### 7. Production Deployment

```bash
# Deploy to Vercel:
vercel --prod

# Make sure to set environment variables in Vercel dashboard
```