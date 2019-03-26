import React, { Component } from "react";
import "./../bootstrap.min.css";
import ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import { savePDF } from "@progress/kendo-react-pdf";
import { Link } from "react-router-dom";

class Institutional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtoLogin: false,
    };
  }
  render() {
    return (
      <div className="container">
        <h1> olá</h1>
      </div>
    );
  }
}

export default Institutional;
