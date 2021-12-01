import React from 'react';
import './App.css';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <ButtonClicks />
          <NumberClicks />
      </div>
    );
  }
}
export default App;
