import React, { Component } from "react";
import EditProblemForm from "../components/problem/editProblemForm"
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
          <meta name="description" content="página responsável por realizar uma das operações do CRUD - o Editar cadastro do problema." />
          <meta name="keywords" content="site, editar problema, salvar" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Editar Problema</title>
        </Helmet>
        <h1 className="h1-main">Editar Problemas</h1>

        <EditProblemForm />

      </div>
    );
  }
}
