import React, { Component } from "react";
import "./../bootstrap.min.css";
import ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import { savePDF } from "@progress/kendo-react-pdf";
import { Link } from "react-router-dom";

class HomeDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtoLogin: false,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Button isOpen={this.state.ButtoLogin} className="btn btn-success">
            <Link
              to="/login"
              className="buttonLogin"
            >
              Login
              </Link>
          </Button>
        </div>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" />
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4" />

              <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="percentage-container">
                  <span className="percentage-number">10</span>
                  <span className="percentage-sign">%</span>
                  <p>EMPRESAS </p>
                </div>

                <div className="percentage-container">
                  <span className="percentage-number">15</span>
                  <span className="percentage-sign">%</span>
                  <p>PROBLEMAS </p>
                </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="percentage-container">
                  <span className="percentage-number">32</span>
                  <span className="percentage-sign">%</span>
                  <p>RECURSOS </p>
                </div>

                <div className="percentage-container">
                  <span className="percentage-number">21</span>
                  <span className="percentage-sign">%</span>
                  <p>USUÁRIOS </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>
      </div>
    );
  }
}

export default HomeDash;
