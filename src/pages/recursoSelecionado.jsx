import React, { Component } from "react";
import Selecionado from "../components/candidate/selecionado";


class RecursoSelecionado extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Selecionado />
      </div>
    );
  }
}

export default RecursoSelecionado;