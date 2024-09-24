import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/greeting');
        setGreeting(response.data.message);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };
    fetchGreeting();
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
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Mechbot</h1>
        <img src="/logo.png" alt="Mechbot Logo" className="h-12" />
      </header>
      <p className="mb-4">{greeting}</p>
      <ChatWindow chatHistory={chatHistory} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
