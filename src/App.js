import React from 'react';
import Presentational from './components/Presentational';
import UseStateExample from './components/HookExamples/UseStateExample';
import UseEffectExample from './components/HookExamples/UseEffectExample';
import UseReducerExample from './components/HookExamples/UseReducerExample';
import UseContextExample from './components/HookExamples/UseContextExample';

const App = () => {
  return (
    <div className="app">
      <h1>React Hooks Messages Boilerplate</h1>
      <section>
        <h2>Messages App (Redux)</h2>
        <Presentational />
      </section>
      <section>
        <h2>Hook Examples</h2>
        <UseStateExample />
        <UseEffectExample />
        <UseReducerExample />
        <UseContextExample />
      </section>
    </div>
  );
};

export default App;