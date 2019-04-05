import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";


class SectionBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      empresa: "",
      cnpj: "",
      categoria: "",
      problema: "",
      sweetCreate: false
    };
  }

  render() {
    return (
      <div></div>

    );
  }
}
export default SectionBasics;
