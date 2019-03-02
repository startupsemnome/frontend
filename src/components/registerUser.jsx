import React, { Component } from "react";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.nome}</h1>
        <form action="">
          <legend>NOME: </legend>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default RegisterUser;
