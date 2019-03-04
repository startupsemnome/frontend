import React, { Component } from "react";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ""
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Novo Usuario</h1>
      </div>
    );
  }
}

export default RegisterUser;
