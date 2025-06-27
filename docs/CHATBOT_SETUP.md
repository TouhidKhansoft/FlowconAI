# FlowConAI Chatbot Setup Guide

## Quick Start

1. **Install required packages** (if not already installed)
   ```bash
   yarn add @assistant-ui/react @assistant-ui/react-ai-sdk ai @ai-sdk/google @vercel/analytics @vercel/edge
   ```

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Google Generative AI API key:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
   ```

3. **Run the development server**
   ```bash
   vercel dev
   ```
   This will start both the frontend (Vite) and API routes.

## Getting a Google Generative AI API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key and add it to your `.env.local` file

## Testing the Chatbot

1. Open your browser to `http://localhost:3000`
2. Look for the chat bubble in the bottom-right corner
3. Click to open the chat window
4. Try these test queries:
   - "What services do you offer?"
   - "Tell me about pricing"
   - "How can I schedule a consultation?"

## Features

- **Pre-defined Q&A Patterns**: Instant responses for common questions
- **AI-Powered Responses**: Falls back to Google Gemini for complex queries
- **Quick Actions**: Clickable buttons for common queries
- **Mobile Responsive**: Full-screen chat on mobile devices
- **Dark Theme**: Matches FlowConAI branding

## Troubleshooting

### "API key not configured" error
Make sure you've added your Google Generative AI API key to `.env.local`

### "Composer not exported" error
This error occurs because Assistant UI uses primitive components. The fix has already been applied in this implementation. If you see this error, make sure you have the latest code that uses `ThreadPrimitive` and `ComposerPrimitive` instead of `Thread` and `Composer`.

### "Cannot read properties of undefined (reading 'content')" error
This error occurs when the message structure doesn't match expectations. The fix includes:
1. A `MessageContent` component that handles various message structures
2. Proper fallbacks for missing content
3. Debug logging to help identify message format issues

If you still see this error, check the browser console for the logged message structure.

### Chat not appearing
1. Check browser console for errors
2. Ensure all dependencies are installed: `yarn install`
3. Try clearing browser cache
4. Make sure you're running `vercel dev` (not just `yarn dev`)

### Vercel dev not working
1. Make sure Vercel CLI is installed globally
2. Try running `vercel link` to connect to a Vercel project
3. Use `yarn dev` for frontend-only development (without API routes)

### Missing dependencies
If you see module not found errors, install all required packages:
```bash
yarn add @assistant-ui/react @assistant-ui/react-ai-sdk ai @ai-sdk/google @vercel/analytics @vercel/edge
```

### "process is not defined" error
This error occurs because `process.env` is not available in the browser. With Vite, you must:
1. Prefix client-side environment variables with `VITE_`
2. Access them using `import.meta.env.VITE_VARIABLE_NAME`
3. Server-side variables (like API keys) should NOT have the `VITE_` prefix

The fix has been applied - environment variables are now properly configured for both client and server.

## Deployment

To deploy to Vercel:
```bash
vercel --prod
```

Remember to add your `GOOGLE_GENERATIVE_AI_API_KEY` to your Vercel project's environment variables!