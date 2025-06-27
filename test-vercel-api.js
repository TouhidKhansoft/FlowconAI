// Test if API routes are accessible
const testAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/health');
    const data = await response.json();
  } catch (error) {
  }
};

testAPI();