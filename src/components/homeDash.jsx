import React, { Component } from "react";
import "./../bootstrap.min.css";
import ReactDOM from 'react-dom';
import { Button } from '@progress/kendo-react-buttons';
import { savePDF } from '@progress/kendo-react-pdf';


class HomeDash extends Component {
  constructor(props) {
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <h1>Dashboard</h1>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <input
              type="Submit"
              className="btn btn-success"
              value="Login"
              onClick={e => this.handleFormSubmit(e)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <h4>Panel Bar Container</h4>
          </div>

          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <h4>Donut Chart Container</h4>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="percentage-container">
                  <span className="percentage-number">94</span>
                  <span className="percentage-sign">%</span>
                  <p>CUSTOMER SATISFACTION</p>
                </div>

                <div className="percentage-container">
                  <span className="percentage-number">89</span>
                  <span className="percentage-sign">%</span>
                  <p>TARGET SALES</p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h4>Bar Chart Container</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4>Grid Container</h4>
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ display: 'none' }}>Dialog Shown/Hidden with Logic</h4>

      </div>



    );
  }
}

export default HomeDash;