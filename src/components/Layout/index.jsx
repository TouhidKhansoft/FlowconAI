import React from 'react';
import { useLocation } from 'react-router-dom';
import Chatbot from '../Chatbot';

export const Layout = ({ children }) => {
  const location = useLocation();
  
  // Don't show chatbot on chat page since it has full-screen chat
  const showChatbot = !location.pathname.startsWith('/chat');

  return (
    <>
      {children}
      {showChatbot && <Chatbot />}
    </>
  );
};

export default Layout;