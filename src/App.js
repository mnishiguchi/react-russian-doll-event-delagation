import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RussianDoll from './components/RussianDoll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            React russian doll event detection
            <br />
            <small>with one event listener</small>
          </h2>
        </div>
        <div className="App-intro">

          <RussianDoll />

        </div>
      </div>
    );
  }
}

export default App;
