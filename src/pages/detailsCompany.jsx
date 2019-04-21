import React, { Component } from "react";
import DetailsCompanyForm from "../components/companys/detailsCompanyForm";
import { Helmet } from "react-helmet";

export default class DetailsCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma lista que contém os detalhes da empresa cadastrada." />
          <meta name="keywords" content="site, detalhes da empresa, listar empresa" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Detalhes da Empresa</title>
        </Helmet>
        <h1 className="h1-main">Detalhes da Empresa</h1>

        <DetailsCompanyForm />

      </div>
    );
  }
}
