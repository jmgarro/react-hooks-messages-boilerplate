import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../redux/actions';

const Presentational = ({ messages, submitNewMessage }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      submitNewMessage(input);
      setInput('');
    }
  };

  return (
    <div className="presentational">
      <h3>Type in a new Message:</h3>
      <input value={input} onChange={handleChange} placeholder="Enter message" />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {messages.map((message, idx) => (
          <li key={idx}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state
});

const mapDispatchToProps = {
  submitNewMessage: addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);