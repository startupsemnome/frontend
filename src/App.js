import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterUser from "./components/registerUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <RegisterUser nome="formulario de cadastro" idade="27" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <footer>
        <RegisterUser nome="formulario de desemprego" />
        </footer>
      </div>
    );
  }
}

export default App;
