import React, { Component } from "react";
import Projects from "../components/candidate/projects";
import { Helmet } from "react-helmet";


class Accept extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma lista de projetos que o recurso de candidatou e mostrar os detalhes do projeto." />
          <meta name="keywords" content="site, listar projetos aceitos, projetos, consultoria, trabalho" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Projetos Aceitos</title>
        </Helmet>
        <Projects />
      </div>
    );
  }
}

export default Accept;