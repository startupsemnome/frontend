import React, { Component } from "react";
import UserForm from "./../components/userForm";

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
        <UserForm />
      </div>
    );
  }
}

export default RegisterUser;
