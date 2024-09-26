import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Add greeting message when the component mounts
    setChatHistory([
      { 
        role: 'assistant', 
        content: "Hello! I'm MechBot, your mechanical engineering assistant specialized in plumbing, drainage, fire fighting, and HVAC systems. How can I help you with your construction-related mechanical engineering problems today?"
      }
    ]);
  }, []);

  const handleSendMessage = async (message) => {
    setIsLoading(true);
    const userMessage = { role: 'user', content: message };
    setChatHistory((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post('http://localhost:5001/api/chat', {
        message,
        chatHistory: chatHistory.map(msg => [msg.role, msg.content]),
      });

      const botMessage = { role: 'assistant', content: response.data.message };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex items-center mb-4">
        <img src="/logo.png" alt="MechBot Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-3xl font-bold">MechBot</h1>
      </div>
      <ChatWindow chatHistory={chatHistory} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
