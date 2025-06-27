import React, { useState } from 'react';
import { AssistantRuntimeProvider } from '@assistant-ui/react';
import { useVercelAIRuntime } from '../../hooks/useVercelAIRuntime';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow';
import './styles.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const runtime = useVercelAIRuntime({
    api: '/api/chat',
    onNewMessage: () => {
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    }
  });

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="flowcon-chatbot">
        {!isOpen && (
          <ChatBubble 
            onClick={handleOpen} 
            unreadCount={unreadCount}
          />
        )}
        {isOpen && (
          <ChatWindow onClose={handleClose} />
        )}
      </div>
    </AssistantRuntimeProvider>
  );
};

export default Chatbot;