import React, { Component } from "react";
import ConsultProblemForm from "../components/problem/consultProblemForm";

export default class ConsultProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Consultar Problemas</h1>

        <ConsultProblemForm />

      </div>
    );
  }
}
