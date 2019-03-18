import React, { Component } from "react";
import EditProblemForm from "../components/problem/editProblemForm"

export default class EditProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Editar Problemas</h1>

        <EditProblemForm />

      </div>
    );
  }
}
