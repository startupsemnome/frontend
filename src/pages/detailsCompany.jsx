import React, { Component } from "react";
import DetailsCompanyForm from "../components/companys/detailsCompanyForm";

export default class DetailsCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Detalhes da Empresa</h1>

        <DetailsCompanyForm />

      </div>
    );
  }
}