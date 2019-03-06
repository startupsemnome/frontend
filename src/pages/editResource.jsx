import React, { Component } from "react";
import EditResourceForm from "../components/editResourceForm";

//Alterar o nome do class para a página desejada
export default class EditResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Editar Recurso</h1>
        <EditResourceForm />
      </div>
    );
  }
}
