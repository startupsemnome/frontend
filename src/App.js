import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import RegisterUser from "./components/registerUser";
import logo from "./logo.svg";
import CompanyForm from "./components/CompanyForm";
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
          <RegisterUser nome="formulario de desemprego" />
          Empresa
          <div className="container">
            <CompanyForm /> 
          </div>
        <footer className="App-footer">
        <h5>&copy;Todos os direitos reservados - 2019</h5>
        </footer>
      </div>
    );
  }
}

export default App;
