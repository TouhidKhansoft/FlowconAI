import React, { useRef, useEffect } from 'react';
import { ThreadPrimitive, ComposerPrimitive, MessagePrimitive, useMessage } from '@assistant-ui/react';

const QuickActions = ({ onSendMessage }) => {
  const handleQuickAction = (query) => {
    if (onSendMessage) {
      onSendMessage(query);
    }
  };
  
  return (
    <div className="quick-actions">
      <p>You can ask me about:</p>
      <button 
        className="quick-action-btn"
        onClick={() => handleQuickAction('What services do you offer?')}
      >
        Our Services
      </button>
      <button 
        className="quick-action-btn"
        onClick={() => handleQuickAction('Tell me about your pricing')}
      >
        Pricing Plans
      </button>
      <button 
        className="quick-action-btn"
        onClick={() => handleQuickAction('I want to schedule a consultation')}
      >
        Schedule a Demo
      </button>
      <button 
        className="quick-action-btn"
        onClick={() => handleQuickAction('Tell me about AI strategy consulting')}
      >
        AI Strategy
      </button>
    </div>
  );
};

// Custom viewport with auto-scroll
const AutoScrollViewport = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const isAtBottomRef = useRef(true);
  
  // Track if user is at bottom of scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      // Consider "at bottom" if within 50px of bottom
      isAtBottomRef.current = scrollHeight - scrollTop - clientHeight < 50;
    }
  };
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollToBottom = () => {
        if (scrollContainerRef.current && isAtBottomRef.current) {
          scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
      };
      
      // Use MutationObserver to detect when messages are added
      const observer = new MutationObserver((mutations) => {
        const hasNewMessages = mutations.some(mutation => 
          mutation.addedNodes.length > 0 && 
          Array.from(mutation.addedNodes).some(node => 
            node.classList && (node.classList.contains('aui-message') || 
            node.querySelector && node.querySelector('.aui-message'))
          )
        );
        
        if (hasNewMessages) {
          setTimeout(scrollToBottom, 100);
        }
      });
      
      observer.observe(scrollContainerRef.current, {
        childList: true,
        subtree: true
      });
      
      // Initial scroll
      setTimeout(scrollToBottom, 100);
      
      return () => observer.disconnect();
    }
  }, []);
  
  return (
    <div 
      ref={scrollContainerRef} 
      className="thread-viewport-wrapper"
      onScroll={handleScroll}
      style={{
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative'
      }}
    >
      <ThreadPrimitive.Viewport asChild>
        <div style={{ minHeight: '100%' }}>
          {children}
        </div>
      </ThreadPrimitive.Viewport>
    </div>
  );
};

const Thread = ({ onSendMessage }) => {
  const [error, setError] = React.useState(null);
  
  // Listen for errors in the window
  React.useEffect(() => {
    const handleError = (event) => {
      if (event.detail && event.detail.includes('API key')) {
        setError('API key not configured. Please check the console for setup instructions.');
      } else if (event.detail && event.detail.includes('quota')) {
        setError('⚠️ Rate limit exceeded! Please wait 1 minute and try again. Free tier allows 60 requests/minute.');
      }
    };
    
    window.addEventListener('chat-error', handleError);
    return () => window.removeEventListener('chat-error', handleError);
  }, []);
  
  return (
    <ThreadPrimitive.Root className="aui-thread-root" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AutoScrollViewport>
        <ThreadPrimitive.Empty>
          <div className="welcome-message">
            <h4>Welcome to FlowConAI! 👋</h4>
            <p>I'm here to help you explore how AI can transform your business.</p>
            {error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                padding: '12px',
                margin: '16px 0',
                color: '#ef4444'
              }}>
                <strong>Setup Required:</strong><br/>
                {error}
              </div>
            )}
            <QuickActions onSendMessage={onSendMessage} />
          </div>
        </ThreadPrimitive.Empty>
        
        <ThreadPrimitive.Messages
          components={{
            UserMessage: () => (
              <MessagePrimitive.Root>
                <div className="aui-message-wrapper">
                  <div 
                    className="aui-message-container message-container-user"
                    style={{ 
                      justifyContent: 'flex-end',
                      display: 'flex',
                      width: '100%',
                      maxWidth: '600px',
                      padding: '0 16px'
                    }}
                  >
                    <div className="aui-message aui-message-user">
                      <MessagePrimitive.Content />
                    </div>
                  </div>
                </div>
              </MessagePrimitive.Root>
            ),
            AssistantMessage: () => (
              <MessagePrimitive.Root>
                <div className="aui-message-wrapper">
                  <div 
                    className="aui-message-container message-container-assistant"
                    style={{ 
                      justifyContent: 'flex-start',
                      display: 'flex',
                      width: '100%',
                      maxWidth: '600px',
                      padding: '0 16px'
                    }}
                  >
                    <div className="aui-message aui-message-assistant">
                      <MessagePrimitive.Content />
                    </div>
                  </div>
                </div>
              </MessagePrimitive.Root>
            )
          }}
        />
      </AutoScrollViewport>
    </ThreadPrimitive.Root>
  );
};

const Composer = () => {
  return (
    <ComposerPrimitive.Root className="aui-composer">
      <ComposerPrimitive.Input 
        className="aui-composer-input"
        placeholder="Type your message..."
      />
      <ComposerPrimitive.Send className="aui-composer-submit">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2 18L20 10L2 2V8L14 10L2 12V18Z" fill="currentColor"/>
        </svg>
      </ComposerPrimitive.Send>
    </ComposerPrimitive.Root>
  );
};

const ChatWindow = ({ onClose }) => {
  const handleSendMessage = (text) => {
    // This will be handled by the runtime
    const composer = document.querySelector('.aui-composer-input');
    if (composer) {
      composer.value = text;
      const sendButton = document.querySelector('.aui-composer-submit');
      if (sendButton) sendButton.click();
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-header-content">
          <img 
            src="/img/flowcon-logo-3.png" 
            alt="FlowConAI" 
            className="chat-logo"
          />
          <div className="chat-header-text">
            <h3>FlowConAI Assistant</h3>
            <span className="chat-status">Online</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="chat-close-btn"
          aria-label="Close chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      <div className="chat-body">
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Thread onSendMessage={handleSendMessage} />
        </div>
      </div>
      
      <div className="chat-footer">
        <Composer />
      </div>
    </div>
  );
};

// Export individual components for reuse
export { Thread, Composer };
export default ChatWindow;