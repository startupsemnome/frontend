import React, { Component } from "react";
import EditProblemForm from "../components/problem/editProblemForm"

export default class EditProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Editar Problema</h1>

        <EditProblemForm />

      </div>
    );
  }
}
