import React, { Component } from "react";
import DetailsProblemForm from "../components/problem/detailsProblemForm"

export default class DetailsProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Detalhes dos Problemas</h1>

        <DetailsProblemForm />

      </div>
    );
  }
}
