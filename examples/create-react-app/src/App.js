import React, { Component } from 'react';
import { Header, Main } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
