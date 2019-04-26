import React, { Component } from "react";
import ConsultResourceForm from "../components/resource/consultResourceForm";
import { Helmet } from "react-helmet";

export default class ConsultResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma lista que contém os recursos cadastrados em forma de lista." />
          <meta name="keywords" content="site, consultar recurso, listar recurso, detalhes recurso" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Consultar Recurso</title>
        </Helmet>
        <ConsultResourceForm history={this.props.history} />
      </div>
    );
  }
}