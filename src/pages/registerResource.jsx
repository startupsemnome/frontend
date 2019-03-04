import React, { Component } from "react";
import ResourceForm from "../components/ResourceForm";

//Alterar o nome do class para a página desejada
export default class RegisterResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>RegisterResource</h1>
        <ResourceForm/>        
      </div>
    );
  }
}