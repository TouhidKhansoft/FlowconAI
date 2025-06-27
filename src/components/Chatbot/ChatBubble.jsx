import React from 'react';

const ChatBubble = ({ onClick, unreadCount }) => {
  return (
    <button
      onClick={onClick}
      className="chat-bubble"
      aria-label="Open chat"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 15.01 3.01 16.33L2 22L7.67 20.99C8.99 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 11H16V13H8V11ZM8 7H16V9H8V7ZM8 15H13V17H8V15Z"
          fill="white"
        />
      </svg>
      {unreadCount > 0 && (
        <span className="unread-badge">{unreadCount}</span>
      )}
      <span className="chat-bubble-tooltip">Chat with AI Assistant</span>
    </button>
  );
};

export default ChatBubble;