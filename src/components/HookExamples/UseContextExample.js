import React, { useContext, useState } from 'react';
import { StoreContext } from 'react-redux';

const UseContextExample = () => {
  const [input, setInput] = useState('');
  const { state, dispatch } = useContext(StoreContext);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', message: input });
      setInput('');
    }
  };

  return (
    <div className="hook-example">
      <h3>useContext Example</h3>
      <p>Accesses Redux store via useContext (not recommended in practice).</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseContextExample;