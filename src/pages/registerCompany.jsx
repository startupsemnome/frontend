import React, { Component } from "react";
import CompanyForm from "../components/companyForm";

export default class RegisterCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">RegisterCompany</h1>
        <CompanyForm />
      </div>
    );
  }
}
