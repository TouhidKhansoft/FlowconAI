name: "AI Chatbot Implementation with Assistant UI and Vercel AI"
description: |

## Purpose of this Document

This document provides a comprehensive specification for implementing an AI-powered chatbot feature in the FlowConAI landing page using Assistant UI library with Google's Gemini model through Vercel AI SDK. The chatbot will provide instant support to users through a chat bubble interface with pre-defined Q&A patterns, all running on Vercel's edge functions without requiring a traditional backend.

---

## Goal

Implement an intelligent chatbot system with a floating chat bubble interface that provides instant support to website visitors using Assistant UI framework, Vercel AI SDK with Gemini model, and a pre-defined Q&A cache for optimal response times and relevance - all running serverlessly on Vercel's edge network.

## Why

- **Business Justification**: Provide 24/7 instant support to potential customers without requiring backend infrastructure or human intervention
- **Who Benefits**: Website visitors seeking information about FlowConAI services, pricing, or technical questions
- **Value Proposition**: Zero backend maintenance, reduced operational costs, improved user engagement, and increased conversion rates
- **Integration**: Seamlessly enhances the existing landing page with serverless architecture that scales automatically

## What

The implementation includes:

- **Floating Chat Bubble**: A persistent, minimizable chat interface in the bottom-right corner
- **Vercel AI Integration**: Serverless AI responses using Vercel AI SDK with Gemini model
- **Pre-defined Q&A Cache**: Client-side cached responses for common questions ensuring instant answers
- **Assistant UI Framework**: Modern, accessible chat interface with built-in best practices
- **Edge Function Processing**: All AI logic runs on Vercel's edge network for global low latency
- **Context-Aware Responses**: Chatbot understands FlowConAI services through system prompts
- **Session Management**: Maintains conversation context using browser storage
- **Real-time Streaming**: Stream AI responses as they're generated for better UX
- **Mobile Responsive**: Fully functional on all device sizes with adaptive layouts

## API Routes (Vercel Edge Functions)

**Chat Message Handler**
- Route: /api/chat
- Type: Edge Function (runs on Vercel Edge Runtime)
- Processes user messages and returns AI responses
- Request Body:
  - messages: array (conversation history)
  - prefilter: boolean (check cache first)
- Response: Streaming text response with metadata
- Features:
  - Automatic rate limiting by Vercel
  - Global edge deployment
  - Built-in error handling

**Pre-defined Q&A Matcher**
- Route: /api/chat/match-pattern
- Type: Edge Function
- Matches user input against cached patterns
- Request Body:
  - query: string (user input)
- Response: Matched pattern or null
- Processing: Runs at edge for <50ms response times

## Current Directory Structure

```
flowcon_landing/
├── src/
│   ├── screens/
│   │   └── Desktop/
│   │       ├── Desktop.jsx
│   │       └── Desktop.css
│   ├── index.jsx
│   └── index.css
├── static/
│   └── img/
├── public/
├── index.html
├── tailwind.config.js
├── tailwind.css
├── vite.config.js
└── package.json
```

## Proposed Directory Structure

```
flowcon_landing/
├── api/                              # Vercel Functions (root level for Vite)
│   ├── chat.js                      # Vercel AI chat endpoint
│   └── match-pattern.js             # Pattern matching endpoint
├── src/
│   ├── components/
│   │   └── Chatbot/
│   │       ├── index.jsx            # Main chatbot component
│   │       ├── ChatBubble.jsx       # Floating bubble trigger
│   │       ├── ChatWindow.jsx       # Chat interface window
│   │       ├── MessageList.jsx      # Message display component
│   │       ├── InputArea.jsx        # User input component
│   │       └── styles.module.css    # Chatbot-specific styles
│   ├── lib/
│   │   ├── chat-config.js          # AI model configuration
│   │   └── qa-patterns.js          # Pre-defined Q&A patterns
│   ├── hooks/
│   │   └── useChat.js             # Custom hook for chat state
│   ├── screens/
│   │   └── Desktop/
│   │       ├── Desktop.jsx         # Modified to include chatbot
│   │       └── Desktop.css
│   ├── index.jsx
│   └── index.css
├── .env.local                      # Local environment variables
├── .env.example                    # Example environment file
├── vercel.json                     # Vercel configuration
└── package.json                    # Updated with new dependencies
```

## Files to Reference

- [Assistant UI Documentation](https://www.assistant-ui.com/docs/getting-started) (read_only) - Primary reference for UI components and patterns
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs) (read_only) - Reference for AI integration and edge functions
- [Vercel AI SDK Gemini Provider](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai) (read_only) - Gemini-specific integration guide
- [Vercel + Vite Guide](https://vercel.com/docs/frameworks/vite) (read_only) - Vite-specific deployment configuration
- [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions) (read_only) - Edge runtime capabilities and limitations
- `src/screens/Desktop/Desktop.jsx` (read_only) - Main component where chatbot will be integrated
- `tailwind.css` (read_only) - Design system colors and variables to maintain consistency
- `package.json` (read_only) - For understanding current dependencies and scripts

## Implementation Components

### Core Chatbot Components

1. **Main Chatbot Container** (`src/components/Chatbot/index.jsx`)
   - Manages chat state and visibility
   - Integrates with Vercel AI SDK's useChat hook
   - Handles pre-filtering for cached responses
   - Provides context to child components

2. **Chat Bubble** (`src/components/Chatbot/ChatBubble.jsx`)
   - Floating action button with FlowConAI branding
   - Smooth animation on hover and click
   - Badge for unread messages
   - Accessible keyboard navigation

3. **Chat Window** (`src/components/Chatbot/ChatWindow.jsx`)
   - Main conversation interface
   - Header with minimize and close buttons
   - Message list with auto-scroll
   - Input area with send button
   - Loading states and error handling

### Vercel AI Integration

1. **Chat API Route** (`api/chat.js`)
   - Uses Vercel AI SDK with Google Generative AI provider
   - Implements system prompt for FlowConAI context
   - Handles streaming responses
   - Includes conversation memory
   - Rate limiting through Vercel's built-in features
   - Export configuration: `export const config = { runtime: 'edge' }`

2. **Pattern Matching Route** (`api/match-pattern.js`)
   - Fast edge function for Q&A pattern matching
   - Uses similarity scoring for flexible matching
   - Returns pre-defined responses instantly
   - Logs pattern usage for analytics
   - Lightweight function for <50ms responses

### Configuration and Data

1. **Chat Configuration** (`src/lib/chat-config.js`)
   - Model parameters (temperature, max tokens)
   - System prompt defining FlowConAI assistant behavior
   - Response formatting rules
   - Safety settings

2. **Q&A Patterns** (`src/lib/qa-patterns.js`)
   - Categorized pre-defined responses
   - Keywords and trigger phrases
   - Response templates with variations
   - Priority scoring for pattern matching

## Implementation Notes

### Vercel Project Setup

- Initialize Vercel project: `vercel init` or connect existing repo
- Install Vercel CLI globally: `npm i -g vercel`
- Configure `vercel.json` for optimal settings
- Set up local development: `vercel dev`
- Link to Vercel project: `vercel link`

### Vercel AI SDK Setup

- Install required packages: `yarn add ai @ai-sdk/google @assistant-ui/react`
- Additional Vercel packages: `yarn add @vercel/analytics @vercel/edge`
- Configure build output for Vercel: Update `vite.config.js` for API routes
- Set up TypeScript for edge functions (optional but recommended)
- Configure Google Generative AI API key in Vercel Dashboard:
  - Navigate to Project Settings > Environment Variables
  - Add `GOOGLE_GENERATIVE_AI_API_KEY` for all environments
  - Enable encryption for sensitive values
- Set up streaming responses configuration in `vercel.json`
- Implement proper error boundaries for edge function failures

### Assistant UI Configuration

- Use Assistant UI's built-in components for consistency
- Customize theme to match FlowConAI design system
- Configure accessibility features (ARIA labels, keyboard navigation)
- Implement responsive breakpoints for mobile optimization

### Pre-defined Q&A Strategy

- Store patterns in edge-compatible format (JSON)
- Implement fuzzy matching algorithm for flexibility
- Categories: Services, Pricing, Technical, Contact, General
- Cache pattern matches in browser for session
- Analytics tracking for pattern effectiveness

### Edge Function Optimization

- Keep functions lightweight (<1MB)
- Use Vercel KV for persistent pattern storage if needed
- Implement request deduplication
- Configure regional edge deployment for lowest latency

### Client-Side Considerations

- Lazy load chatbot components
- Use React Suspense for code splitting
- Store conversation in sessionStorage
- Implement offline detection and messaging
- Progressive enhancement approach

### Vercel Configuration Files

1. **vercel.json** - Project configuration
   - Framework preset: `vite`
   - Build settings for hybrid app (SPA + API routes)
   - Environment variable references
   - Edge function configuration
   - Headers for CORS if needed

2. **.env.local** - Local development
   - `GOOGLE_GENERATIVE_AI_API_KEY=your_api_key`
   - Other local environment variables

3. **app/api Structure** - Required for API routes
   - Must follow Next.js App Router convention for Vercel
   - Each route.js exports HTTP method handlers
   - Edge runtime declaration: `export const runtime = 'edge'`

### Local Development with Vercel

- Run `vercel dev` instead of `yarn dev` for API routes
- Vercel CLI simulates edge function environment locally
- Access API routes at `http://localhost:3000/api/*`
- Environment variables loaded from `.env.local`
- Hot reload works for both frontend and API routes

### Deployment Process

1. **Initial Setup**
   - Connect GitHub repository to Vercel
   - Configure project settings
   - Set environment variables in Vercel Dashboard
   - Choose production branch

2. **Automatic Deployments**
   - Push to main branch triggers production deployment
   - Pull requests create preview deployments
   - Each deployment gets unique URL
   - Rollback capability maintained

3. **Manual Deployment**
   - Run `vercel --prod` for production
   - Run `vercel` for preview deployment
   - Monitor deployment logs in real-time

## Validation Gates

- Chatbot loads without affecting Core Web Vitals (LCP < 2.5s maintained)
- All pre-defined patterns match correctly with 90%+ accuracy
- Vercel AI integration handles network failures gracefully
- Chat interface passes WCAG 2.1 AA accessibility audit
- Mobile experience tested on iOS Safari and Chrome Android
- Edge functions respond in <200ms for pattern matching
- AI responses begin streaming within 1 second
- Total bundle size increase <50KB gzipped

## Implementation Checkpoints/Testing

### 1. Basic UI Implementation
- Set up Assistant UI components
- Implement chat bubble with animations
- Create responsive chat window
- Test on multiple viewports
- Verification: Visual regression testing

### 2. Vercel AI Integration
- Deploy edge functions to Vercel
- Configure Gemini API credentials
- Test streaming responses
- Implement error handling
- Verification: `vercel dev` local testing

### 3. Pattern Matching System
- Create comprehensive Q&A dataset
- Implement matching algorithm
- Test pattern accuracy
- Optimize for edge runtime
- Verification: Unit tests for pattern matching

### 4. End-to-End Testing
- Full conversation flows
- Pattern fallback to AI
- Session persistence
- Performance testing
- Verification: Playwright E2E tests

### 5. Production Deployment
- Configure production environment
- Set up monitoring and analytics
- Test global edge distribution
- Verify rate limiting
- Verification: Production smoke tests

## Vite + Vercel Specific Considerations

Since this project uses Vite (not Next.js), special configuration is needed:

### Hybrid Deployment Setup
- **Frontend**: Deploy as static site (Vite's default)
- **API Routes**: Use Vercel Functions with special configuration
- **Build Command**: `vite build` for frontend
- **Output Directory**: `dist` for static assets
- **API Directory**: `api/` at root level (not in `app/`)

### Alternative API Structure for Vite
```
flowcon_landing/
├── api/                    # Vercel Functions directory
│   ├── chat.js            # API endpoint: /api/chat
│   └── match-pattern.js   # API endpoint: /api/match-pattern
├── src/                   # Vite app source
└── vercel.json           # Configuration to handle both
```

### Vercel.json for Vite + API Routes
- Configure rewrites for API routes
- Set up build output directory
- Define function runtime settings
- Handle CORS for local development

### Development Workflow
1. Run `vercel dev` for full-stack development
2. Frontend runs on port 5173 (Vite)
3. API routes proxied through Vercel CLI
4. Environment variables work for both contexts

## Other Considerations

- **Security**: API keys stored in Vercel environment variables, never exposed to client
- **Privacy**: No conversation data stored server-side, only in user's browser
- **Performance**: Leverage Vercel's global edge network for <100ms response times
- **Scalability**: Automatic scaling with Vercel, no infrastructure management needed
- **Analytics**: Integrate with Vercel Analytics for usage insights
- **Monitoring**: Use Vercel's built-in monitoring and log aggregation
- **Compliance**: Implement cookie consent for storing chat sessions (GDPR)
- **Cost Management**: Monitor Vercel AI usage, implement spending limits
- **Fallback Strategy**: Static responses if AI services are unavailable
- **A/B Testing**: Use Vercel Edge Config for feature flags
- **Internationalization**: Prepare structure for multi-language support
- **SEO**: Ensure chatbot doesn't interfere with page crawlability
- **Browser Support**: Target modern browsers with graceful degradation
- **Bundle Size**: Monitor with Vercel's bundle analysis
- **Rate Limiting**: Configure Vercel's built-in rate limiting for API protection