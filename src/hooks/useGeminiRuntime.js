import { GoogleGenerativeAI } from '@google/generative-ai';
import { useExternalStoreRuntime } from '@assistant-ui/react';
import { useCallback, useState, useRef, useMemo } from 'react';
import { findBestMatch } from '../lib/qa-patterns';

export const useGeminiRuntime = () => {
  const [isLoading, setIsLoading] = useState(false);
  const genAIRef = useRef(null);
  const chatRef = useRef(null);
  const messagesRef = useRef([
    {
      id: '1',
      role: 'assistant',
      content: [{ 
        type: 'text', 
        text: 'Welcome to FlowConAI! I\'m here to help you explore how AI can transform your business. What would you like to know?' 
      }]
    }
  ]);
  const [, forceUpdate] = useState({});

  // Initialize Gemini (only once)
  if (!genAIRef.current && import.meta.env.VITE_GOOGLE_AI_API_KEY) {
    console.log('🔑 Initializing Gemini with API key:', import.meta.env.VITE_GOOGLE_AI_API_KEY.substring(0, 10) + '...');
    genAIRef.current = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
  } else if (!import.meta.env.VITE_GOOGLE_AI_API_KEY) {
    console.warn('⚠️ No API key found! Make sure VITE_GOOGLE_AI_API_KEY is set in .env.local');
  }

  const updateMessages = useCallback((newMessages) => {
    messagesRef.current = newMessages;
    forceUpdate({});
  }, []);

  const onNew = useCallback(async (message) => {
    if (!genAIRef.current) {
      const errorMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: [{ 
          type: 'text', 
          text: '⚠️ API key not configured. Add VITE_GOOGLE_AI_API_KEY to your .env.local file.' 
        }]
      };
      updateMessages([...messagesRef.current, errorMessage]);
      return;
    }

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message.content
    };
    updateMessages([...messagesRef.current, userMessage]);

    setIsLoading(true);

    try {
      // Extract text from message content
      const userText = typeof message.content === 'string' 
        ? message.content 
        : message.content[0]?.text || '';

      // First check Q&A patterns for quick responses
      console.log('🔍 Checking Q&A patterns for:', userText);
      const patternMatch = findBestMatch(userText);
      
      if (patternMatch && patternMatch.confidence > 0.7) {
        console.log('✅ Found Q&A match:', patternMatch.pattern.id, 'with confidence:', patternMatch.confidence);
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: [{ type: 'text', text: patternMatch.pattern.response }]
        };
        updateMessages([...messagesRef.current, assistantMessage]);
        setIsLoading(false);
        return;
      } else {
        console.log('❌ No Q&A pattern match, using Gemini...');
      }

      // If no pattern match, use Gemini
      const model = genAIRef.current.getGenerativeModel({ model: 'gemini-1.5-flash' });
      
      // Initialize chat if not already done
      if (!chatRef.current) {
        const systemPrompt = `You are an AI assistant for FlowConAI, an AI consulting company. 
Be helpful, professional, and concise. Focus on FlowConAI's services:
- AI Strategy Consulting
- Machine Learning Solutions  
- Natural Language Processing
- Computer Vision
- Process Automation
- Data Analytics

Keep responses under 200 words unless asked for more detail.`;

        chatRef.current = model.startChat({
          history: [
            {
              role: 'user',
              parts: [{ text: systemPrompt }]
            },
            {
              role: 'model',
              parts: [{ text: 'Understood. I\'ll help users learn about FlowConAI services.' }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
            topP: 0.8,
          },
        });
      }

      const result = await chatRef.current.sendMessage(userText);
      const response = await result.response;
      const responseText = response.text();
      
      console.log('🤖 Gemini response:', responseText);
      
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: [{ type: 'text', text: responseText }]
      };
      updateMessages([...messagesRef.current, assistantMessage]);

    } catch (error) {
      console.error('Gemini error:', error);
      
      let errorMessage = '❌ Sorry, I encountered an error. ';
      
      if (error.message?.includes('API_KEY_INVALID')) {
        errorMessage += 'Invalid API key. Please check your configuration.';
      } else if (error.message?.includes('RATE_LIMIT_EXCEEDED')) {
        errorMessage += 'Rate limit exceeded. Please try again in a moment.';
      } else {
        errorMessage += 'Please try again or contact support.';
      }
      
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: [{ type: 'text', text: errorMessage }]
      };
      updateMessages([...messagesRef.current, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [updateMessages]);

  // Use external store runtime
  const runtime = useExternalStoreRuntime({
    messages: messagesRef.current,
    onNew,
    convertMessage: (msg) => msg,
    isRunning: isLoading,
  });

  return { runtime, isLoading };
};