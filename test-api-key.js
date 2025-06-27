import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function testApiKey() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  
  console.log('Testing API key:', apiKey?.substring(0, 10) + '...');
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    console.error('❌ API key not found or still using placeholder');
    return;
  }
  
  try {
    const result = await generateText({
      model: google('gemini-1.5-pro', { apiKey }),
      prompt: 'Say hello',
      maxTokens: 10,
    });
    
    console.log('✅ API key is valid!');
    console.log('Response:', result.text);
  } catch (error) {
    console.error('❌ API key test failed:', error.message);
    
    if (error.message?.includes('API key not valid')) {
      console.error('\nPossible issues:');
      console.error('1. The API key might be incorrect');
      console.error('2. The Generative Language API might not be enabled in your Google Cloud project');
      console.error('3. The API key might have restrictions that prevent its use');
      console.error('\nTo fix:');
      console.error('1. Go to https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
      console.error('2. Enable the "Generative Language API"');
      console.error('3. Create a new API key if needed');
    }
  }
}

testApiKey();