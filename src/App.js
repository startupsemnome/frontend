import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import CompanyForm from "./components/CompanyForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Empresa
        </header> 
        <div className="container">
          <CompanyForm  /> 
        </div>
        <footer className="App-footer">
          <h5>&copy;Todos os direitos reservados - 2019</h5>
        </footer>
      </div>
    );
  }
}

export default App;
