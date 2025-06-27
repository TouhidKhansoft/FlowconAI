export default function handler(req) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  
  return new Response(
    JSON.stringify({ 
      status: 'ok',
      hasApiKey: !!apiKey,
      apiKeyLength: apiKey ? apiKey.length : 0,
      apiKeyPrefix: apiKey ? apiKey.substring(0, 10) + '...' : 'NOT SET',
      timestamp: new Date().toISOString()
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}

export const config = {
  runtime: 'edge',
};