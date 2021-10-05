import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Component from './Component';
import ShowLocalTime from './ShowLocalTime';

function App() {
  const element = (
    <div className="App">
      <HelloWorld />
      <ShowLocalTime />
      <Component />
    </div>
  );

  return element;
}

export default App;