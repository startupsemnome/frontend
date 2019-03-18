import React, { Component } from "react";
import EditCompanyForm from "../components/companys/editCompanyForm"

export default class EditProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Editar Empresa</h1>

        <EditCompanyForm />

      </div>
    );
  }
}
