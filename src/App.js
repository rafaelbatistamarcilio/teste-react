import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header titulo={"Aplicação React"}/>
        <Home/>
      </div>
    );
  }
}

export default App;
