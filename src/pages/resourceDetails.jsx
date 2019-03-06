import React, { Component } from "react";
import ResourceDetailsForm from "../components/resourceDetailsForm";

export default class ResourceDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Detalhes de Recursos</h1>
        <br/>
        <ResourceDetailsForm />
      </div>
    );
  }
}

