export const chatConfig = {
  // AI Model Configuration
  model: {
    name: 'gemini-1.5-pro',
    temperature: 0.7,
    maxTokens: 500,
    topP: 0.95,
  },
  
  // Response Configuration
  response: {
    maxLength: 500,
    supportMarkdown: true,
    tone: 'professional-friendly',
    includeEmoji: false,
  },
  
  // UI Configuration
  ui: {
    theme: 'dark',
    position: 'bottom-right',
    welcomeMessage: {
      title: 'Welcome to FlowConAI! 👋',
      subtitle: "I'm here to help you explore how AI can transform your business.",
      quickActions: [
        { label: 'Our Services', query: 'What services do you offer?' },
        { label: 'Pricing Plans', query: 'Tell me about your pricing' },
        { label: 'Schedule a Demo', query: 'I want to schedule a consultation' },
        { label: 'AI Strategy', query: 'Tell me about AI strategy consulting' },
      ]
    },
    placeholderText: 'Type your message...',
    sendButtonText: 'Send',
  },
  
  // Pattern Matching Configuration
  patterns: {
    enabled: true,
    confidenceThreshold: 0.7,
    cacheTimeout: 3600000, // 1 hour in milliseconds
    maxCacheSize: 100,
  },
  
  // Analytics Configuration
  analytics: {
    enabled: true,
    trackPatternUsage: true,
    trackResponseTime: true,
    trackUserSatisfaction: false,
  },
  
  // Error Messages
  errors: {
    networkError: "I'm having trouble connecting. Please check your internet connection and try again.",
    serverError: "I'm experiencing technical difficulties. Please try again in a moment.",
    rateLimitError: "You've sent too many messages. Please wait a moment before trying again.",
    generalError: "Something went wrong. Please try again or contact support if the issue persists.",
  },
  
  // Rate Limiting
  rateLimit: {
    maxMessagesPerMinute: 10,
    maxMessagesPerHour: 100,
    cooldownMessage: "Please wait a moment before sending another message.",
  },
  
  // Business Information
  businessInfo: {
    name: 'FlowConAI',
    email: 'hello@flowconai.com',
    phone: '+1 (555) 123-4567',
    website: 'https://flowconai.com',
    address: '123 AI Boulevard, Tech City, TC 12345',
    businessHours: {
      weekdays: '9:00 AM - 6:00 PM EST',
      saturday: '10:00 AM - 2:00 PM EST',
      sunday: 'Closed',
    },
  },
  
  // Feature Flags
  features: {
    voiceInput: false,
    fileUpload: false,
    emotionDetection: false,
    multiLanguage: false,
    persistChat: true,
    showTypingIndicator: true,
    allowFeedback: true,
  },
};

// Helper function to get quick action responses
export const getQuickActionResponse = (action) => {
  const responses = {
    'Our Services': 'I can tell you about our AI strategy consulting, custom AI solutions, data analytics, and implementation services. Which would you like to learn more about?',
    'Pricing Plans': 'We offer flexible pricing tailored to your needs. Would you like to know about our starter, growth, or enterprise packages?',
    'Schedule a Demo': 'I\'d be happy to help you schedule a free consultation! Would you prefer a 30-minute discovery call or should I have someone from our team reach out?',
    'AI Strategy': 'Our AI Strategy Consulting helps develop comprehensive AI roadmaps aligned with your business goals. Would you like to know more about our assessment process or see some success stories?',
  };
  
  return responses[action] || 'How can I help you today?';
};