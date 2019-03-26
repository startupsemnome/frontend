import React, { Component } from "react";
import ConsultCompanyForm from "../components/companys/consultCompanyForm";

export default class ConsultCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ConsultCompanyForm />
      </div>
    );
  }
}
