import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [messages, setMessages] = useState([]);

  // Simulate fetching initial messages
  useEffect(() => {
    const initialMessages = ['Welcome!', 'Try adding a message.'];
    setMessages(initialMessages);
  }, []); // Empty dependency array for mount only

  // Log messages when they change
  useEffect(() => {
    console.log('Messages updated:', messages);
  }, [messages]);

  return (
    <div className="hook-example">
      <h3>useEffect Example</h3>
      <p>Loads initial messages and logs changes using useEffect.</p>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectExample;