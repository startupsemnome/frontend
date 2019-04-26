import React, { Component } from "react";
import HomeDash from "./../components/homeDash";
import { Helmet } from "react-helmet";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por informar aos administradores como estão os status de cadastro das empresas, problemas, recursos e usuários e mostrar de forma gráfica." />
          <meta name="keywords" content="site, dashboard, controle, indicadores, gráficos" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Dashboard</title>
        </Helmet>
        <h1 className="h1-main">Página de Dashboard</h1>
        <HomeDash />
      </div>
    );
  }
}
