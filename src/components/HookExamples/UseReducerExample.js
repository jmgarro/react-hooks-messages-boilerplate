import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [input, setInput] = useState('');
  const [messages, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_MESSAGE', payload: input });
      setInput('');
    }
  };

  return (
    <div className="hook-example">
      <h3>useReducer Example</h3>
      <p>Manages a message list using useReducer instead of Redux.</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerExample;