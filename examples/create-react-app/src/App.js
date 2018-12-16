import React, { Component } from 'react';
import { Header, Main, Footer } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
