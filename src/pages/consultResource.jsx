import React, { Component } from "react";
import ConsultResourceForm from "../components/resource/consultResourceForm";

export default class ConsultResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Consultar Recurso</h1>
      <ConsultResourceForm />

      </div>
    );
  }
}