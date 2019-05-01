import React, { Component } from 'react';
import './App.css';
import './Header';
import Header from './Header';
import About from './Content';
import Portfolio from './Portfolio';
import Tech from './Tech';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Tech />
      </div>
    );
  }
}

export default App;
