import React, { Component } from "react";
import ConsultCompanyForm from "../components/companys/consultCompanyForm";
import { Helmet } from "react-helmet";

export default class ConsultCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma lista que contém os recursos cadastrados em forma de lista." />
          <meta name="keywords" content="site, consultar empresa, listar empresa, detalhes empresa" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Consultar Empresa</title>
        </Helmet>
        <ConsultCompanyForm history={this.props.history} />
      </div>
    );
  }
}
