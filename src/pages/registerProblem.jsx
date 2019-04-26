import React, { Component } from "react";
import ProblemForm from "../components/problem/problemForm";
import { Helmet } from "react-helmet";

export default class RegisterProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar o cadastro dos problemas das empresas." />
          <meta name="keywords" content="site, cadastro de problemas, crud problemas" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Cadastrar Problema</title>
        </Helmet>
        <h1 className="h1-main">Registrar Problemas</h1>
        <br />
        <br />
        <ProblemForm />
      </div>
    );
  }
}
