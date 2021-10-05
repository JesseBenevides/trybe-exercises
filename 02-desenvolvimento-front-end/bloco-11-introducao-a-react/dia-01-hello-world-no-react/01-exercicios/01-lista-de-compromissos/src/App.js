import { Component } from 'react';

import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return Task('Praticar React');
}

export default App;
