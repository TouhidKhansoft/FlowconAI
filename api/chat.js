import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const config = {
  runtime: 'edge',
};

const systemPrompt = `You are FlowConAI's helpful assistant. FlowConAI is a leading AI consulting company that helps businesses leverage artificial intelligence to transform their operations and achieve strategic goals.

Our core services include:
1. AI Strategy Consulting - Developing comprehensive AI roadmaps aligned with business objectives
2. Custom AI Solutions - Building tailored AI applications for specific business needs
3. Data Analytics & Insights - Extracting actionable insights from complex data
4. AI Implementation & Integration - Seamlessly integrating AI into existing workflows

We work with various industries including healthcare, finance, retail, manufacturing, and technology. Our team consists of AI experts, data scientists, and business strategists who collaborate to deliver innovative solutions.

Key differentiators:
- Proven track record with Fortune 500 companies
- End-to-end AI lifecycle management
- Focus on ROI and measurable business outcomes
- Ethical AI practices and responsible deployment
- 24/7 support and continuous optimization

When responding:
- Be helpful, professional, and concise
- Focus on understanding the user's needs and how FlowConAI can help
- Provide specific examples when relevant
- Guide users towards booking a consultation when appropriate
- Maintain a friendly yet professional tone`;

export default async function handler(req) {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();
    
    // Check for API key
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey || apiKey === 'your_api_key_here') {
      console.error('API key not configured or still using placeholder');
      return new Response(
        JSON.stringify({ 
          error: 'Google AI API key not configured. Please add your API key to the Vercel environment variables.',
          details: 'Go to your Vercel dashboard > Project Settings > Environment Variables'
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Using API key:', apiKey.substring(0, 10) + '...');
    console.log('Messages received:', messages);

    try {
      const result = await streamText({
        model: google('gemini-1.5-pro', { apiKey }),
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        maxTokens: 500,
      });

      return result.toDataStreamResponse();
    } catch (innerError) {
      console.error('🔴 Google AI API Error:', innerError);
      console.error('Error name:', innerError.name);
      console.error('Error message:', innerError.message);
      console.error('Full error object:', JSON.stringify(innerError, null, 2));
      
      // Check for specific error types
      if (innerError.message?.includes('API key not valid')) {
        return new Response(
          JSON.stringify({ 
            error: 'Invalid API key',
            message: 'The Google AI API key is not valid. Please check your API key.',
            details: 'Make sure you have enabled the Generative Language API for your project'
          }),
          { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
      
      if (innerError.message?.includes('exceeded your current quota')) {
        console.error('🚨 Google AI API Error - Quota Exceeded:');
        console.error('Raw error message:', innerError.message);
        console.error('Full error details:', {
          name: innerError.name,
          message: innerError.message,
          stack: innerError.stack
        });
        
        return new Response(
          JSON.stringify({ 
            error: 'Quota exceeded',
            message: innerError.message, // Show the actual Google error message
            details: 'The free tier allows 60 requests per minute. Please wait a minute or check your billing at https://ai.google.dev/gemini-api/docs/rate-limits'
          }),
          { 
            status: 429,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
      
      throw innerError;
    }
  } catch (error) {
    console.error('Chat API error:', error);
    console.error('Error details:', error.message);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process chat request',
        message: error.message,
        details: error.stack
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}