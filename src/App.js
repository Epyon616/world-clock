import React, { Component } from 'react';
import Clock from 'react-live-clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />
      </div>
    );
  }
}

export default App;
