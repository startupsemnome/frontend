import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  FaBuilding,
  FaUser,
  FaWrench,
  FaExclamationTriangle
} from "react-icons/fa";

import "./../bootstrap.min.css";
import ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";
import { Doughnut, defaults, Chart, Bar } from "react-chartjs-2";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { Row, Col, Card } from "react-materialize";

import axios from "axios";
import env from "./../consts";

import ComposedResponsive from "./graphics/composedResponsive.jsx";

import { setNavbarOpen } from "./../redux/actions/navbarAction";

class HomeDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtoLogin: false,
      qtdUsers: 0,
      qtdProblem: 0,
      show: "USER",
      qtdResource: 0,
      qtdCompany: 0
    };
  }

  showGrafico(type) {
    if (this.state.show === type) {
      this.setState({ show: "" });
    } else {
      this.setState({ show: type });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <div className="card">
                <div className="card-body">
                  <span className="percentage-number">
                    {this.state.qtdCompany}
                    <FaBuilding style={{ marginLeft: "10px" }} />
                  </span>

                  <h5
                    className="card-title"
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >
                    Empresas
                  </h5>
                  <br />
                  <a
                    href="#"
                    onClick={() => this.showGrafico("COMPANY")}
                    className="join-btn-no-transform mr-1 login  new-hover"
                  >
                    Ver Gráfico
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <Link to="/consultar-empresa">Lista De Empresas</Link>
                  </small>
                </div>
                <div className="df-c" />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <div className="card">
                <div className="card-body">
                  <span className="percentage-number">
                    {this.state.qtdResource}
                    <FaWrench style={{ marginLeft: "10px" }} />
                  </span>
                  <h5
                    className="card-title"
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >
                    Recursos
                  </h5>
                  <br />
                  <a
                    href="#"
                    onClick={() => this.showGrafico("RESOURCE")}
                    className="join-btn-no-transform mr-1 login  new-hover"
                  >
                    Ver Gráfico
                  </a>
                </div>
                <div className="df-c">
                  <div className="card-footer">
                    <small className="text-muted">
                      <Link to="/consultar-recurso">Lista De Recursos</Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <div className="card">
                <div className="card-body">
                  <span className="percentage-number">
                    {this.state.qtdProblem}
                    <FaExclamationTriangle style={{ marginLeft: "10px" }} />
                  </span>
                  <h5
                    className="card-title"
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >
                    Problemas
                  </h5>
                  <br />
                  <a
                    href="#"
                    onClick={() => this.showGrafico("PROBLEM")}
                    className="join-btn-no-transform mr-1 login  new-hover"
                  >
                    Ver Gráfico
                  </a>
                </div>
                <div className="df-c" />
                <div className="card-footer">
                  <small className="text-muted">
                    <Link to="/consultar-problema">Lista De Problemas</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 box">
            <div className="df-c">
              <div className="card">
                <div className="card-body">
                  <span className="percentage-number">
                    {this.state.qtdUsers}
                    <FaUser style={{ marginLeft: "10px" }} />
                  </span>
                  <h5
                    className="card-title"
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >
                    Usuários
                  </h5>
                  <br />
                  <a
                    href="#"
                    onClick={() => this.showGrafico("USER")}
                    className="join-btn-no-transform mr-1 login new-hover"
                  >
                    Ver Gráfico
                  </a>
                </div>
                <div className="df-c" />
                <div className="card-footer">
                  <small className="text-muted">
                    <Link to="/consultar-usuario">Lista De Usuarios</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>

        <ComposedResponsive
          type={"COMPANY"}
          show={this.state.show}
          qtdAtual={this.state.qtdCompany}
        />
        <ComposedResponsive
          type={"USER"}
          show={this.state.show}
          qtdAtual={this.state.qtdUsers}
        />
        <ComposedResponsive
          type={"RESOURCE"}
          show={this.state.show}
          qtdAtual={this.state.qtdResource}
        />
        <ComposedResponsive
          type={"PROBLEM"}
          show={this.state.show}
          qtdAtual={this.state.qtdProblem}
        />
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
    this.props.setNavbarOpen(true);
    this.loadQtdUsers();
    this.loadQtdProblem();
    this.loadQtdResource();
    this.loadQtdCompany();
  }
}

const mapStateToProps = state => ({ navbar: state.navbar });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDash);
