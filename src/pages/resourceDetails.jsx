import React, { Component } from "react";
import ResourceDetailsForm from "../components/resource/resourceDetailsForm";
import { Helmet } from "react-helmet";

export default class ResourceDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar a listagem dos recursos e seus detalhes" />
          <meta name="keywords" content="site, detalhes do recurso, professores, alunos, mestres, doutores, resolver problemas, listar recursos" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Detalhes do Recurso</title>
        </Helmet>
        <h1 className="h1-main">Detalhes de Recursos</h1>
        <br />
        <ResourceDetailsForm />
      </div>
    );
  }
}

