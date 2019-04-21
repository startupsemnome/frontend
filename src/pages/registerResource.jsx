import React, { Component } from "react";
import RegisterResourceForm from "../components/resource/registerResourceForm";
import { Helmet } from "react-helmet";

//Alterar o nome do class para a página desejada
export default class RegisterResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar o cadastro dos recursos que poderão participar de projetos." />
          <meta name="keywords" content="site, cadastro de recursos, crud recursos" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Cadastrar Recurso</title>
        </Helmet>
        <h1 className="h1-main">Cadastrar Recurso</h1>
        <br />
        <br />
        <RegisterResourceForm />
      </div>
    );
  }
}
