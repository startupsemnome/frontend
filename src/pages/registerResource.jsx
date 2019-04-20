import React, { Component } from "react";
import RegisterResourceForm from "../components/resource/registerResourceForm";

//Alterar o nome do class para a página desejada
export default class RegisterResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Cadastrar Recurso</h1>
        <br />
        <br />
        <RegisterResourceForm />
      </div>
    );
  }
}
