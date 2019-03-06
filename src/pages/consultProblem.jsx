import React, { Component } from "react";
import ConsultProblemForm from "../components/problem/consultProblemForm";

export default class ConsultProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>ConsultProblem</h1>

        <ConsultProblemForm />

      </div>
    );
  }
}
