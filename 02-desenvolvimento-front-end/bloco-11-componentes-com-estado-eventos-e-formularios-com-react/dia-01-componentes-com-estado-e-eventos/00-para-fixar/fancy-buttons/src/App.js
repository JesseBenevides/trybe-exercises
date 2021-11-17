import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleStyle = this.handleStyle.bind(this);

    this.state = {
      clicksButton1: 0,
      clicksButton2: 0,
      clicksButton3: 0,
    };
  }

  handleClick1() {
    this.setState((previousState, _props) => ({
      clicksButton1: previousState.clicksButton1 + 1,
    }));
  }

  handleClick2() {
    this.setState((previousState, _props) => ({
      clicksButton2: previousState.clicksButton2 + 1,
    }));
  }

  handleClick3() {
    this.setState((previousState, _props) => ({
      clicksButton3: previousState.clicksButton3 + 1,
    }));
  }
  
  handleStyle(clickNumber) {
    if (clickNumber % 2 === 0) {
      return '#0f0';
    }

  }
  render() {
    return (
      <div className="button-container">
        <button
          onClick={this.handleClick1}
          style={{backgroundColor: this.handleStyle(this.state.clicksButton1)}}
        >
          {this.state.clicksButton1}
        </button>
        
        <button 
          onClick={this.handleClick2}
          style={{backgroundColor: this.handleStyle(this.state.clicksButton2)}}
        >
          {this.state.clicksButton2}
        </button>

        <button 
          onClick={this.handleClick3}
          style={{backgroundColor: this.handleStyle(this.state.clicksButton3)}}
        >
          {this.state.clicksButton3}</button>
      </div>
    );
  }
}

export default App;