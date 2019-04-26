import React, { Component } from "react";
import ProblemList from "../components/problem/problemList";
import { Helmet } from "react-helmet";

export default class ConsultProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma lista que contém os problemas cadastrados em forma de lista." />
          <meta name="keywords" content="site, consultar problema, listar problemas, detalhes problema" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Consultar Problema</title>
        </Helmet>
        <ProblemList />
      </div>
    );
  }
}
