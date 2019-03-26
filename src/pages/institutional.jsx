import React, { Component } from "react";
import InstitutionalForm from "../components/institutionalForm"

export default class Institutional extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Institucional</h1>
        <InstitutionalForm />

      </div>
    );
  }
}
