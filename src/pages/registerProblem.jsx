import React, { Component } from "react";
import ProblemForm from "../components/problem/problemForm";

export default class RegisterProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Registrar Problemas</h1>
        <br />
        <br />
        <ProblemForm />
      </div>
    );
  }
}
