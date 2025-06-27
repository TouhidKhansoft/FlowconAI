import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AssistantRuntimeProvider } from '@assistant-ui/react';
import { useGeminiRuntime } from '../../hooks/useGeminiRuntime';
import { Thread, Composer } from '../../components/Chatbot/ChatWindow';
import '../../components/Chatbot/styles.css';
import './ChatPage.css';

export const ChatPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [initialQuery, setInitialQuery] = useState('');
  const [queryLoaded, setQueryLoaded] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      const decodedQuery = decodeURIComponent(query);
      setInitialQuery(decodedQuery);
    }
    setQueryLoaded(true);
  }, [searchParams]);

  const { runtime, isLoading } = useGeminiRuntime(queryLoaded ? initialQuery : null);

  const handleClose = () => {
    navigate('/');
  };

  const handleSendMessage = (text) => {
    const input = document.querySelector('.aui-composer-input');
    const sendButton = document.querySelector('.aui-composer-submit');
    
    if (input && sendButton) {
      input.value = text;
      input.focus();
      sendButton.click();
    }
  };

  return (
    <div className="chat-page-container">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 -right-64 w-[1000px] h-[1000px] bg-gradient-to-br from-variable-collection-primary/50 via-teal-500/25 to-blue-600/50 rounded-full blur-[100px] brightness-[0.5] contrast-100 saturate-[1] mix-blend-screen"></div>
      </div>

      {/* Chat Interface */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header */}
        <div className="chat-page-header">
          <div className="chat-page-header-content">
            <div className="chat-page-logo-section">
              <img 
                src="/img/flowcon-logo-3.png" 
                alt="FlowConAI" 
                className="chat-page-logo"
              />
              <div>
                <h1 className="chat-page-title">FlowConAI Assistant</h1>
                <p className="chat-page-subtitle">AI-powered business consulting</p>
              </div>
            </div>
            <button 
              onClick={handleClose}
              className="chat-page-close-btn"
              aria-label="Back to home"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-page-main">
          <div className="chat-page-container-inner">
            {runtime ? (
              <AssistantRuntimeProvider runtime={runtime}>
                <FullScreenChatWindow 
                  initialQuery={initialQuery} 
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  onClose={handleClose}
                />
              </AssistantRuntimeProvider>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-white">Loading chat interface...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Full-screen version of the chat window
const FullScreenChatWindow = ({ initialQuery, onSendMessage, isLoading, onClose }) => {

  return (
    <div className="chat-page-content">
      {/* Processing Banner - only show briefly while loading */}
      {initialQuery && isLoading && (
        <div className="chat-page-welcome-banner">
          <h2 className="chat-page-welcome-title">Processing your query</h2>
          <p className="chat-page-welcome-query">"{initialQuery}"</p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(219, 234, 254, 0.6)', marginTop: '8px' }}>
            FlowConAI is analyzing your question and preparing a response...
          </p>
        </div>
      )}
      
      {/* Chat Body with integrated back button */}
      <div className="chat-page-thread-container">
        {/* Back Button Bar - integrated at top */}
        <div className="chat-back-button-bar">
          <button 
            onClick={onClose}
            className="chat-back-button-integrated"
            aria-label="Back to homepage"
            title="Back to homepage"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5"/>
              <path d="M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Home</span>
          </button>
        </div>
        
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Thread onSendMessage={onSendMessage} />
        </div>
      </div>
      
      {/* Chat Footer */}
      <div className="chat-page-footer">
        <div className="chat-page-footer-inner">
          <Composer />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;