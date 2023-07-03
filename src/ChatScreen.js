import React, { useState, useEffect } from 'react';
import './Chat.css';

const ChatScreen = ({ onHideChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Example initial messages
  const initialMessages = [
    { id: 1, text: 'Ola!', sender: 'user' },
    { id: 2, text: 'Como posso ajudar?', sender: 'agent' },
  ];

  useEffect(() => {
    // Set the initial messages when the component mounts
    setMessages(initialMessages);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <h2>Chat</h2>
        <button className="close-button" onClick={onHideChat}>
          X
        </button>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user' : 'agent'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatScreen;
