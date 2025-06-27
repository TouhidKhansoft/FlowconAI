// This file contains the parsed Q&A patterns from the markdown file
// In production, this would be generated at build time from the markdown

export const qaPatterns = [
  // Services Category
  {
    id: 'services-overview',
    category: 'services',
    triggers: [
      'what services do you offer',
      'what does flowconai do',
      'tell me about your services',
      'how can you help my business',
      'what solutions do you provide',
      'services list'
    ],
    response: `FlowConAI offers comprehensive AI solutions including:

🎯 **AI Strategy Consulting** - We develop custom AI roadmaps aligned with your business goals
🤖 **Machine Learning Solutions** - Custom ML models for predictions, classifications, and recommendations
💬 **Natural Language Processing** - Chatbots, sentiment analysis, and document processing
👁️ **Computer Vision** - Image recognition and visual analytics
⚡ **Process Automation** - Intelligent automation to streamline operations
📊 **Data Analytics** - Advanced analytics and predictive modeling

Would you like to know more about any specific service?`,
    priority: 10
  },
  
  {
    id: 'ai-strategy-details',
    category: 'services',
    triggers: [
      'tell me about ai strategy',
      'what is ai consulting',
      'ai roadmap',
      'strategic ai planning',
      'ai transformation'
    ],
    response: `Our AI Strategy Consulting helps businesses navigate their AI journey:

📋 **Assessment Phase**
- Current state analysis
- AI readiness evaluation
- Opportunity identification

🗺️ **Roadmap Development**
- 3-5 year AI vision
- Phased implementation plan
- ROI projections

🚀 **Implementation Support**
- Vendor selection guidance
- Team training programs
- Change management

📈 **Ongoing Optimization**
- Performance monitoring
- Strategy refinement
- Scaling recommendations

Schedule a free consultation to discuss your AI strategy needs!`,
    priority: 9
  },
  
  // Pricing Category
  {
    id: 'pricing-info',
    category: 'pricing',
    triggers: [
      'what are your prices',
      'how much does it cost',
      'tell me about pricing',
      'pricing plans',
      'cost of services',
      'what\'s the investment',
      'pricing structure'
    ],
    response: `Our pricing is tailored to each client's specific needs and project scope. We offer:

💼 **Starter Package** - Perfect for small businesses beginning their AI journey
🚀 **Growth Package** - For companies ready to scale with AI
🏢 **Enterprise Solutions** - Custom solutions for large organizations

Factors affecting pricing:
- Project complexity and scope
- Timeline and deliverables
- Ongoing support requirements
- Team size and expertise needed

I'd be happy to connect you with our sales team for a personalized quote. Would you like to schedule a consultation?`,
    priority: 10
  },
  
  // Technical Category
  {
    id: 'tech-stack',
    category: 'technical',
    triggers: [
      'what technology do you use',
      'tech stack',
      'what ai models',
      'which frameworks',
      'technology platforms',
      'what tools'
    ],
    response: `FlowConAI leverages cutting-edge AI technologies:

🧠 **AI Models**: GPT-4, Claude, Gemini, BERT, custom fine-tuned models
🛠️ **ML Frameworks**: TensorFlow, PyTorch, scikit-learn, JAX
☁️ **Cloud Platforms**: AWS, Google Cloud, Azure, Vercel Edge
🔧 **Tools**: LangChain, Hugging Face, OpenAI API, Vertex AI
💻 **Languages**: Python, JavaScript/TypeScript, R, Julia

We select the best technology stack based on your specific requirements and existing infrastructure.`,
    priority: 8
  },
  
  {
    id: 'security-compliance',
    category: 'technical',
    triggers: [
      'is it secure',
      'data security',
      'compliance',
      'privacy concerns',
      'data protection',
      'gdpr'
    ],
    response: `Security and compliance are our top priorities:

🔒 **Security Measures**
- End-to-end encryption
- Role-based access control
- Regular security audits
- Secure API endpoints

📋 **Compliance Standards**
- GDPR compliant
- HIPAA ready (healthcare)
- SOC 2 Type II
- PCI DSS (financial)

🛡️ **Data Protection**
- On-premise deployment options
- Data anonymization
- Audit trails
- Backup and recovery

Your data never leaves your control unless explicitly authorized.`,
    priority: 9
  },
  
  // Contact Category
  {
    id: 'contact-info',
    category: 'contact',
    triggers: [
      'how can i contact you',
      'contact information',
      'get in touch',
      'speak to someone',
      'schedule a meeting',
      'talk to human',
      'contact details'
    ],
    response: `I'd be happy to help you connect with our team!

📧 **Email**: hello@flowconai.com
📞 **Phone**: +1 (555) 123-4567
🗓️ **Schedule a Call**: [Book a free consultation](https://calendly.com/flowconai)
📍 **Office**: 123 AI Boulevard, Tech City, TC 12345

💬 For immediate assistance, I'm here to answer your questions!

Would you like me to help you schedule a consultation with our AI experts?`,
    priority: 10
  },
  
  // Getting Started Category
  {
    id: 'how-to-start',
    category: 'getting-started',
    triggers: [
      'how to get started',
      'begin working with you',
      'start a project',
      'first steps',
      'onboarding process',
      'how do we begin'
    ],
    response: `Getting started with FlowConAI is easy:

1. 📞 **Initial Consultation** (Free, 30 minutes)
   - Discuss your business challenges
   - Explore AI opportunities
   - No commitment required

2. 📊 **Discovery & Assessment** (1-2 weeks)
   - Analyze your data and processes
   - Identify quick wins
   - Define success metrics

3. 📝 **Proposal & Roadmap**
   - Custom solution design
   - Timeline and milestones
   - Transparent pricing

4. 🚀 **Kickoff & Implementation**
   - Dedicated team assignment
   - Regular progress updates
   - Continuous optimization

Ready to start? I can help schedule your free consultation right now!`,
    priority: 9
  },
  
  // Industry Specific
  {
    id: 'healthcare-ai',
    category: 'industry',
    triggers: [
      'healthcare ai',
      'medical ai solutions',
      'ai in healthcare',
      'hospital automation',
      'clinical ai'
    ],
    response: `FlowConAI specializes in healthcare AI solutions:

🏥 **Medical Imaging AI** - Automated diagnosis assistance for radiology
💊 **Drug Discovery** - ML models for pharmaceutical research
📊 **Patient Analytics** - Predictive models for patient outcomes
🤖 **Clinical Decision Support** - AI-powered treatment recommendations
📅 **Appointment Optimization** - Smart scheduling and resource allocation

Our healthcare solutions are HIPAA compliant and integrate with existing EMR systems.`,
    priority: 7
  },
  
  {
    id: 'finance-ai',
    category: 'industry',
    triggers: [
      'financial ai',
      'banking ai',
      'fintech solutions',
      'ai in finance',
      'financial services ai'
    ],
    response: `Our financial sector AI solutions include:

💳 **Fraud Detection** - Real-time transaction monitoring
📈 **Risk Assessment** - Advanced credit scoring and risk models
🤖 **Trading Algorithms** - AI-powered investment strategies
💬 **Customer Service** - Intelligent chatbots for banking
📊 **Regulatory Compliance** - Automated compliance monitoring

All solutions meet regulatory requirements (SOC2, PCI-DSS) with bank-grade security.`,
    priority: 7
  },
  
  // General Category
  {
    id: 'company-info',
    category: 'general',
    triggers: [
      'who is flowconai',
      'about flowconai',
      'what is flowconai',
      'tell me about your company',
      'company information'
    ],
    response: `FlowConAI is a leading AI consultancy that helps businesses transform through artificial intelligence. 

🎯 **Our Mission**: Democratize AI for businesses of all sizes
👥 **Our Team**: 50+ AI experts, data scientists, and engineers
🌍 **Global Reach**: Serving clients in 15+ countries
🏆 **Track Record**: 200+ successful AI implementations

We specialize in custom AI solutions, from strategy to implementation, helping companies leverage cutting-edge AI technologies to drive growth and innovation.

Want to learn how we can transform your business?`,
    priority: 8
  },
  
  // Default responses
  {
    id: 'greeting',
    category: 'general',
    triggers: [
      'hello',
      'hi',
      'hey',
      'good morning',
      'good afternoon'
    ],
    response: `Hello! Welcome to FlowConAI. I'm here to help you explore how AI can transform your business. What would you like to know about our AI consulting services?`,
    priority: 5
  },
  
  {
    id: 'thanks',
    category: 'general',
    triggers: [
      'thank you',
      'thanks',
      'appreciate',
      'grateful'
    ],
    response: `You're welcome! I'm glad I could help. Is there anything else you'd like to know about FlowConAI's services?`,
    priority: 5
  }
];

// Pattern matching function
export const findBestMatch = (query) => {
  const normalizedQuery = query.toLowerCase().trim();
  let bestMatch = null;
  let highestScore = 0;
  
  for (const pattern of qaPatterns) {
    let score = 0;
    
    // Check for exact trigger match
    for (const trigger of pattern.triggers) {
      if (normalizedQuery.includes(trigger) || trigger.includes(normalizedQuery)) {
        score = 1.0;
        break;
      }
      
      // Calculate word overlap score
      const queryWords = normalizedQuery.split(/\s+/);
      const triggerWords = trigger.split(/\s+/);
      let matches = 0;
      
      for (const qWord of queryWords) {
        for (const tWord of triggerWords) {
          if (qWord === tWord || (qWord.length > 3 && tWord.includes(qWord))) {
            matches++;
            break;
          }
        }
      }
      
      const wordScore = matches / Math.max(queryWords.length, triggerWords.length);
      score = Math.max(score, wordScore);
    }
    
    // Apply priority weighting
    score *= (pattern.priority || 5) / 10;
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = pattern;
    }
  }
  
  return highestScore >= 0.5 ? { pattern: bestMatch, confidence: highestScore } : null;
};