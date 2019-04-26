import React, { Component } from "react";
import CompanyForm from "../components/companys/companyForm";
import { Helmet } from "react-helmet";

export default class RegisterCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar o cadastro das empresas." />
          <meta name="keywords" content="site, cadastro empresa, crud empresa" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Cadastrar Empresa</title>
        </Helmet>
        <h1 className="h1-main">Cadastro de Empresa</h1>
        <br />
        <br />
        <CompanyForm />
      </div>
    );
  }
}
