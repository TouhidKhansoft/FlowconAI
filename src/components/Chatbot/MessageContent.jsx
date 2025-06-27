import React from 'react';

const MessageContent = ({ message, role }) => {
  // Debug: log what we're receiving
  console.log(`MessageContent received:`, { message, role });
  
  // Handle undefined or null message
  if (!message) {
    console.warn(`${role} message is undefined or null`);
    return role === 'assistant' ? <span className="aui-loading">Thinking...</span> : null;
  }
  
  // Debug logging only for actual messages
  console.log(`${role} message structure:`, message);
  
  // Extract text from various possible message structures
  let text = '';
  
  if (typeof message === 'string') {
    text = message;
  } else if (message?.content) {
    if (typeof message.content === 'string') {
      text = message.content;
    } else if (Array.isArray(message.content)) {
      // Handle array of content parts
      text = message.content
        .map(part => {
          if (typeof part === 'string') return part;
          if (part?.text) return part.text;
          if (part?.content) return part.content;
          return '';
        })
        .join(' ');
    } else if (message.content?.text) {
      text = message.content.text;
    }
  } else if (message?.text) {
    text = message.text;
  } else if (message?.message) {
    text = message.message;
  }
  
  // Fallback for assistant messages
  if (!text && role === 'assistant') {
    return <span className="aui-loading">Thinking...</span>;
  }
  
  return <>{text}</>;
};

export default MessageContent;