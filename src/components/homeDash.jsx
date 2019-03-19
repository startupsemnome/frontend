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
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">10</span>
            </div>
            <div className="df-c">
              <p>EMPRESAS </p>    
            </div>
          </div>
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">120</span>
            </div>
            <div className="df-c">
              <p>RECURSO </p>    
            </div>
          </div>
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">65</span>
            </div>
            <div className="df-c">
              <p>PROBLEMA </p>    
            </div>
          </div>
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">8</span>
            </div>
            <div className="df-c">
              <p>USUARIO </p>    
            </div>
          </div>
        </div> 
      
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>
      </div>
    );
  }
}

export default HomeDash;
