import React, { Component } from "react";
import EditCompanyForm from "../components/companys/editCompanyForm"
import { Helmet } from "react-helmet";

export default class EditProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma das operações do CRUD - o Editar cadastro da empresa." />
          <meta name="keywords" content="site, editar empresa, salvar" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Editar Empresa</title>
        </Helmet>
        <h1 className="h1-main">Editar Empresa</h1>

        <EditCompanyForm />

      </div>
    );
  }
}
