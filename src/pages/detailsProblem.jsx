import React, { Component } from "react";
import DetailsProblemForm from "../components/problem/detailsProblemForm"
import { Helmet } from "react-helmet";

export default class DetailsProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma lista que contém os detalhes cadastrados no formulário da problemas." />
          <meta name="keywords" content="site, detalhes problema, listar problemas" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Detalhes do Problema</title>
        </Helmet>
        <h1 className="h1-main">Detalhes dos Problemas</h1>

        <DetailsProblemForm />

      </div>
    );
  }
}
