import React, { Component } from "react";
import EditResourceForm from "../components/resource/editResourceForm";
import { Helmet } from "react-helmet";

//Alterar o nome do class para a página desejada
export default class EditResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma das operações do CRUD - o Editar cadastro do recurso." />
          <meta name="keywords" content="site, editar recurso, salvar" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Editar Recurso</title>
        </Helmet>
        <h1 className="h1-main">Editar Recurso</h1>
        <EditResourceForm />
      </div>
    );
  }
}
