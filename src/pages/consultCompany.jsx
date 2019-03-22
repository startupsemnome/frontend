import React, { Component } from "react";
import ConsultCompanyForm from "../components/companys/consultCompanyForm";

export default class ConsultCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Descrição da  Empresa Cadastrada</h1>
        <ConsultCompanyForm />
      </div>
    );
  }
}
