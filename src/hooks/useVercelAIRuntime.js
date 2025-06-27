import { useChat } from 'ai/react';
import { AssistantRuntimeProvider, useLocalRuntime } from '@assistant-ui/react';
import { useChatRuntime } from '@assistant-ui/react-ai-sdk';
import { useCallback } from 'react';

export const useVercelAIRuntime = (options = {}) => {
  const {
    api = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/chat` : '/api/chat',
    onNewMessage,
    patternApi = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/match-pattern` : '/api/match-pattern'
  } = options;

  const checkPattern = useCallback(async (message) => {
    try {
      const response = await fetch(patternApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: message })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.match && data.confidence > 0.7) {
          return data.pattern;
        }
      }
    } catch (error) {
      console.error('Pattern matching error:', error);
    }
    return null;
  }, [patternApi]);

  // Use the AI SDK integration runtime
  const runtime = useChatRuntime({
    api,
    onError: (error) => {
      console.error('🔴 Chat Runtime Error:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.status,
        name: error.name
      });
      
      // Parse error response if it's JSON
      if (error.cause?.response) {
        error.cause.response.json().then(errorData => {
          console.error('🚨 API Error Response:', errorData);
          
          if (errorData.message?.includes('exceeded your current quota')) {
            console.error('📊 Exact Google AI Error:', errorData.message);
            console.error('🔗 Details:', errorData.details);
          }
        }).catch(() => {
          console.error('Could not parse error response');
        });
      }
      
      // Check if it's an API key error
      if (error.message && error.message.includes('500')) {
        console.error('API Key Error: Please configure your Google AI API key in .env.local');
        console.error('1. Get your API key from: https://makersuite.google.com/app/apikey');
        console.error('2. Add it to .env.local: GOOGLE_GENERATIVE_AI_API_KEY=your_actual_key');
        console.error('3. Restart the server: Ctrl+C then run: vercel dev');
      }
      
      if (error.message && error.message.includes('429')) {
        console.error('⚠️ QUOTA EXCEEDED: You have hit the Google AI API rate limit!');
        console.error('The free tier allows 60 requests per minute.');
        console.error('Solutions:');
        console.error('1. Wait 1 minute and try again');
        console.error('2. Create a new API key');
        console.error('3. Upgrade your Google Cloud billing');
        console.error('Learn more: https://ai.google.dev/gemini-api/docs/rate-limits');
        
        // Dispatch error event for UI
        window.dispatchEvent(new CustomEvent('chat-error', { detail: 'quota exceeded' }));
      }
    },
    // No need to pass API key here - it's handled server-side
    // Handle new messages
    onFinish: (message) => {
      if (onNewMessage) {
        onNewMessage();
      }
    },
  });

  return runtime;
};