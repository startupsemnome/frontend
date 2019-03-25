import React, { Component, PureComponent } from "react";
import "./../bootstrap.min.css";
import ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import { savePDF } from "@progress/kendo-react-pdf";
import { Link } from "react-router-dom";
import { Doughnut, defaults, Chart, Bar } from 'react-chartjs-2';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import { Row, Col, Card } from 'react-materialize';
import axios from "axios";
import env from "./../consts";

import LineBarAreaComposedChart from "./graphics/lineBarAreaComposedChart.jsx";
import StraightAnglePieChart from "./graphics/straightAnglePieChart.jsx";
import DomainRadarChart from "./graphics/domainRadarChart.jsx";
import ComposedResponsive from "./graphics/composedResponsive.jsx";

class HomeDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtoLogin: false,
      qtdUsers: 0,
      qtdProblem: 0,
      qtdResource: 0,
      qtdCompany: 0
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">{this.state.qtdCompany}</span>
            </div>
            <div className="df-c">
              <p>EMPRESAS </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">{this.state.qtdResource}</span>
            </div>
            <div className="df-c">
              <p>RECURSO </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">{this.state.qtdProblem}</span>
            </div>
            <div className="df-c">
              <p>PROBLEMA </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <span className="percentage-number">{this.state.qtdUsers}</span>
            </div>
            <div className="df-c">
              <p>USUARIO </p>
            </div>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>

        <ComposedResponsive />

      </div>
    );
  }
  loadQtdUsers() {
    // Carregando a quantidade de usuários
    axios
      .get(env.API + "count-user")
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ qtdUsers: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  loadQtdProblem() {
    // Carregando a quantidade de usuários
    axios
      .get(env.API + "count-problem")
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ qtdProblem: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  loadQtdResource() {
    // Carregando a quantidade de usuários
    axios
      .get(env.API + "count-resource")
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ qtdResource: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  loadQtdCompany() {
    // Carregando a quantidade de usuários
    axios
      .get(env.API + "count-company")
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ qtdCompany: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  componentDidMount() {
    this.loadQtdUsers();
    this.loadQtdProblem();
    this.loadQtdResource();
    this.loadQtdCompany();
  }
}

export default HomeDash;
