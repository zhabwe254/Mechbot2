import React from 'react';

const ChatWindow = ({ chatHistory }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4 h-96 overflow-y-auto">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`mb-2 p-2 rounded ${
            message.role === 'user' ? 'bg-blue-200 text-right' : 'bg-green-200'
          }`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
