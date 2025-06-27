// Test script to verify API endpoints are working with vercel dev

async function testApi() {
  const port = process.env.PORT || 3000;
  const apiUrl = `http://localhost:${port}/api/chat`;
  
  console.log(`Testing API endpoint: ${apiUrl}`);
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Hello, test message' }
        ]
      })
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const text = await response.text();
      console.log('Response body:', text);
    } else {
      console.log('✅ API endpoint is working!');
    }
  } catch (error) {
    console.error('❌ Failed to connect to API:', error.message);
    console.error('Make sure you are running: vercel dev');
  }
}

// Wait a bit for the server to start
setTimeout(testApi, 3000);
console.log('Will test API in 3 seconds...');