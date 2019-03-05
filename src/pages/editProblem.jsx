import React, { Component } from "react";
import EditProb from "./../components/editProb"

export default class EditProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Editar Problema</h1>

        <EditProb />

      </div>
    );
  }
}
