// Test if API routes are accessible
const testAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/health');
    const data = await response.json();
    console.log('API Health Check:', data);
  } catch (error) {
    console.error('API Error:', error.message);
  }
};

testAPI();