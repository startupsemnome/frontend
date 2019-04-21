import React, { Component } from "react";

// img
import img404 from "./../images/pages/404-page-not-found.png";
import { Helmet } from "react-helmet";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por informar ao usuário que a página não foi encontrada." />
          <meta name="keywords" content="site, página não encontrada, erro" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Página Não Encontrada</title>
        </Helmet>
        <h1 className="h1-main">PÁGINA NÃO ENCONTRADA</h1>
        <img className="not-found-img" src={img404} alt="" />
      </div>
    );
  }
}
