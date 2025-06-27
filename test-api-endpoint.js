// Test script to verify API endpoints are working with vercel dev

async function testApi() {
  const port = process.env.PORT || 3000;
  const apiUrl = `http://localhost:${port}/api/chat`;
  
  
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
    
    
    if (!response.ok) {
      const text = await response.text();
    } else {
    }
  } catch (error) {
  }
}

// Wait a bit for the server to start
setTimeout(testApi, 3000);
