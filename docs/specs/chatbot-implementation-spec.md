# Chatbot Implementation with Assistant UI, Q&A Patterns, and Gemini API

## Overview

This specification describes how to implement a client-side chatbot using Assistant UI, predefined Q&A patterns, and Google's Gemini API. The implementation prioritizes fast responses through pattern matching while falling back to AI-generated responses for unmatched queries.

## Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   User Input    │────▶│  Q&A Pattern     │────▶│ Pattern Match?  │
│                 │     │    Matcher       │     │                 │
└─────────────────┘     └──────────────────┘     └────────┬────────┘
                                                           │
                              ┌────────────────────────────┴───┐
                              │                                │
                              ▼                                ▼
                    ┌─────────────────┐              ┌─────────────────┐
                    │ Return Pattern  │              │  Gemini API     │
                    │    Response     │              │   Request       │
                    └─────────────────┘              └─────────────────┘
```

## Dependencies

```json
{
  "dependencies": {
    "@assistant-ui/react": "^0.10.24",
    "@google/generative-ai": "^0.24.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

## File Structure

```
src/
├── components/
│   └── Chatbot/
│       ├── index.jsx          # Main chatbot component
│       ├── ChatWindow.jsx     # Chat UI with Assistant UI components
│       ├── ChatBubble.jsx     # Floating chat trigger button
│       └── styles.css         # Chatbot styles
├── hooks/
│   └── useGeminiRuntime.js    # Custom runtime hook
└── lib/
    └── qa-patterns.js         # Q&A pattern definitions
```

## Implementation Guide

### 1. Q&A Patterns Structure (`/src/lib/qa-patterns.js`)

The Q&A patterns file contains an array of pattern objects with the following structure:
- `id`: Unique identifier for the pattern
- `category`: Category name for organization
- `triggers`: Array of phrases that trigger this response
- `response`: The pre-written response with markdown support
- `priority`: Weight from 1-10 for matching importance

The `findBestMatch` function implements:
- Query normalization (lowercase, trimmed)
- Exact phrase matching with high confidence
- Word overlap scoring for partial matches
- Priority weighting to favor important patterns
- Confidence threshold (default: 0.5) for match validity

### 2. Gemini Runtime Hook (`/src/hooks/useGeminiRuntime.js`)

This custom React hook integrates Gemini API with Assistant UI:

**Key Features:**
- Initializes Google Generative AI client with API key from environment
- Manages message state using refs to avoid unnecessary re-renders
- Implements pattern matching before API calls
- Maintains chat session with system prompt for context
- Uses `useExternalStoreRuntime` from Assistant UI for runtime creation

**Implementation Flow:**
1. Check Q&A patterns first for instant responses
2. If no pattern match (confidence < 0.7), use Gemini API
3. Maintain conversation history in chat session
4. Handle errors gracefully with user-friendly messages
5. Update UI state using force update pattern

### 3. Chat Window Component (`/src/components/Chatbot/ChatWindow.jsx`)

The chat window component builds the UI using Assistant UI primitives:

**Components Used:**
- `ThreadPrimitive.Root`: Container for the conversation thread
- `ThreadPrimitive.Viewport`: Scrollable area for messages
- `ThreadPrimitive.Messages`: Message list with custom rendering
- `ComposerPrimitive.Root`: Message input container
- `ComposerPrimitive.Input`: Text input field
- `ComposerPrimitive.Send`: Send button
- `MessagePrimitive`: Individual message components

**Key Implementation Details:**
- Custom message renderer extracts text from various content formats
- Handles both string and array message content structures
- Differentiates user and assistant messages with CSS classes
- Provides welcome message when chat is empty
- Includes header with close button and footer with composer

### 4. Main Chatbot Component (`/src/components/Chatbot/index.jsx`)

The main chatbot component orchestrates the entire chat experience:

**Responsibilities:**
- Manages open/closed state of the chat window
- Initializes the Gemini runtime hook
- Provides runtime context via `AssistantRuntimeProvider`
- Conditionally renders chat bubble or window
- Imports and applies chatbot styles

**Component Structure:**
- Uses `AssistantRuntimeProvider` as the root wrapper
- Toggles between `ChatBubble` (closed state) and `ChatWindow` (open state)
- Passes runtime and state handlers to child components
- Maintains minimal state for UI toggling

## Environment Configuration

Create a `.env.local` file:

```bash
# Google Gemini API Key
# WARNING: This will be exposed to the browser!
# Only use for demos/personal projects
VITE_GEMINI_API_KEY=your_api_key_here

# Optional: Enable/disable features
VITE_ENABLE_CHAT_PATTERNS=true
VITE_CHAT_RATE_LIMIT=10
```

## Integration Steps

1. **Install dependencies**:
   ```bash
   npm install @assistant-ui/react @google/generative-ai
   ```

2. **Add the chatbot to your app**:
   Import and add the Chatbot component to your main application component. Place it at the root level to ensure it appears as a floating overlay.

3. **Configure environment variables**:
   - Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Add to `.env.local` with `VITE_` prefix

4. **Customize Q&A patterns**:
   - Edit `qa-patterns.js` with your domain-specific patterns
   - Adjust confidence threshold (default: 0.7)
   - Set appropriate priorities

## Performance Optimization

1. **Q&A Pattern Matching**:
   - Patterns are checked first for instant responses
   - No API calls for matched patterns
   - Reduces costs and latency

2. **Chat Session Persistence**:
   - Gemini chat session is initialized once
   - Context maintained across messages
   - System prompt sets behavior

3. **Message State Management**:
   - Uses refs to avoid unnecessary re-renders
   - Force update only when messages change
   - Efficient for long conversations

## Security Considerations

⚠️ **Important**: This implementation exposes the API key to the browser. 

**For production use**:
1. Create a backend API endpoint
2. Keep API keys server-side only
3. Implement rate limiting
4. Add authentication if needed

**Acceptable use cases for client-side keys**:
- Personal projects
- Internal tools
- Demos and prototypes
- Educational purposes

## Customization Options

### Styling
- Modify `styles.css` for appearance
- Assistant UI components accept className props
- Use CSS variables for theming

### Behavior
- Adjust Gemini parameters (temperature, maxTokens)
- Modify system prompt for personality
- Change confidence threshold for pattern matching
- Add/remove UI elements

### Features
- Add typing indicators
- Implement message persistence
- Add file upload support
- Create custom message types

## Troubleshooting

### Common Issues

1. **"API key not configured"**
   - Ensure `.env.local` exists with `VITE_GEMINI_API_KEY`
   - Restart dev server after adding env variables

2. **Pattern not matching**
   - Check confidence threshold (default: 0.7)
   - Verify trigger phrases are lowercase
   - Test with exact phrases first

3. **Rate limiting**
   - Implement client-side throttling
   - Cache responses for common queries
   - Use Q&A patterns for frequent questions

4. **Messages not displaying**
   - Check message content structure
   - Verify Assistant UI version compatibility
   - Check browser console for errors

## Example Q&A Pattern Categories

**Customer Support:**
- Business hours and availability
- Contact methods and response times
- General support inquiries

**Product Information:**
- Pricing and plans
- Features and capabilities
- Comparisons with competitors

**Technical Support:**
- Account access issues
- Technical requirements
- Integration questions

**Sales & Onboarding:**
- Getting started process
- Demo scheduling
- Contract and billing questions

## Conclusion

This implementation provides a flexible, client-side chatbot solution that combines the speed of pattern matching with the intelligence of AI responses. While not suitable for production applications requiring API key security, it's perfect for prototypes, demos, and personal projects.