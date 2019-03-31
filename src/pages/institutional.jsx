import React, { Component } from "react";
import PropTypes from 'prop-types';
import InstitutionalForm from "../components/institutionalForm";

export default class Institutional extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Cadastro de Empresa</h1>
        <InstitutionalForm />
      </div>
    );
  }
}
