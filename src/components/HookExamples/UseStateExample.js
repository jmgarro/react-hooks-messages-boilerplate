import React, { useState } from 'react';

const UseStateExample = () => {
  const [message, setMessage] = useState('');
  const [localMessages, setLocalMessages] = useState([]);

  const handleAdd = () => {
    if (message.trim()) {
      setLocalMessages([...localMessages, message]);
      setMessage('');
    }
  };

  return (
    <div className="hook-example">
      <h3>useState Example</h3>
      <p>Manages input and a local message list using useState.</p>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {localMessages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateExample;