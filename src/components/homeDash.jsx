import React, { Component, PureComponent } from "react";
import "./../bootstrap.min.css";
import ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import { savePDF } from "@progress/kendo-react-pdf";
import { Link } from "react-router-dom";
import { Doughnut, defaults, Chart, Bar } from 'react-chartjs-2';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import { Row, Col, Card } from 'react-materialize';
import ApexCharts from 'apexcharts'

import axios from "axios";
import env from "./../consts";


import DomainRadarChart from "./graphics/domainRadarChart.jsx";
import ComposedResponsive from "./graphics/composedResponsive.jsx";
import CardSimple from "./card/cardSimple.jsx";
import DecksExample from "./card/decksExample.jsx";
import GroupsExample from "./card/groupsExample.jsx";
import SizingExample from "./card/sizingExample.jsx";


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
              <div class="card">
                <div class="card-body">
                  <span className="percentage-number">{this.state.qtdCompany}</span>
                  <h5 class="card-title">Empresa</h5>
                  <p class="card-text"> Os dados exibidos à cima são de acordo com a quanidade de empresas cadastradas.</p>
                  <br></br>
                  <a href="#" class="btn btn-primary">Saiba mais!</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Atualizado à 4 minutos atrás</small>
                </div>
                <div className="df-c">
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <div class="card">
                <div class="card-body">
                  <span className="percentage-number">{this.state.qtdResource}</span>
                  <h5 class="card-title">Recurso</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <br></br>
                  <a href="#" class="btn btn-primary">Saiba mais!</a>
                </div>
                <div className="df-c">
                  <div class="card-footer">
                    <small class="text-muted">Atualizado à 4 minutos atrás</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <div class="card">
                <div class="card-body">
                  <span className="percentage-number">{this.state.qtdProblem}</span>
                  <h5 class="card-title">Problema</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <br></br>
                  <a href="#" class="btn btn-primary">Saiba mais!</a>
                </div>
                <div className="df-c">
                </div>
                <div class="card-footer">
                  <small class="text-muted">Atualizado à 6 minutos atrás</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <div class="card">
                <div class="card-body">
                  <span className="percentage-number">{this.state.qtdUsers}</span>
                  <h5 class="card-title">Usuário</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <br></br>
                  <a href="#" class="btn btn-primary">Saiba mais!</a>
                </div>
                <div className="df-c">
                </div>
                <div class="card-footer">
                  <small class="text-muted">Atualizado à 8 minutos atrás</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>
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
