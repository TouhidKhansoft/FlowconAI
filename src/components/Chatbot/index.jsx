import React, { useState } from 'react';
import { AssistantRuntimeProvider } from '@assistant-ui/react';
import { useGeminiRuntime } from '../../hooks/useGeminiRuntime';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow';
import './styles.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const { runtime, isLoading } = useGeminiRuntime();

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