import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import logo from "../images/logo-resource.jpg";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";

import { setNavbarOpen } from "./../redux/actions/navbarAction";
import { Logout } from "./../redux/actions/authAction";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavLinkProblem: false,
      NavLinkUsuario: false,
      NavLinkEmpresa: false,
      NavLinkRecurso: false,
      active: ""
    };
    this.toggle = this.toggle.bind(this);
    this.toggleEmpresa = this.toggleEmpresa.bind(this);
    this.toggleUsuario = this.toggleUsuario.bind(this);
    this.toggleRecurso = this.toggleRecurso.bind(this);
  }
  componentDidMount() {
    var pathname = window.location.pathname;
    console.log(pathname);

    this.setState({ active: pathname });
  }

  render() {
    const { active } = this.state;

    return (
      <div
        className="nav-bar"
        style={{
          display: `${this.props.navbar.isNavbarOpen ? "initial" : "none"}`
        }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark navbar-cor"
          style={{ height: "60px" }}
        >
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              style={{
                width: "80px",
                border: "3px solid #6e6029",
                borderRadius: "50px",
                marginTop: "3px"
              }}
              alt="logo"
              title="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100">
              <li className={`nav-item`} style={{ margin: "15px" }}>
                <Link to="/institutional" className="nav-link">
                  HOME
                </Link>
              </li>

              <li
                className={`nav-item active ${
                  active === "/dashboard" ? "active-nav-admin" : ""
                }`}
                style={{ margin: "15px" }}
              >
                <Link to="/dashboard" className="nav-link">
                  DASHBOARD
                </Link>
              </li>

              <Dropdown
                isOpen={this.state.NavLinkEmpresa}
                toggle={this.toggleEmpresa}
                style={{ margin: "10px" }}
              >
                <DropdownToggle
                  color="link"
                  style={{ textDecoration: "none", marginTop: "3px" }}
                  caret
                >
                  EMPRESA
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      to="/cadastro-empresa"
                      className="nav-link text-secondary"
                    >
                      Cadastrar
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/consultar-empresa"
                    >
                      Consultar
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                isOpen={this.state.NavLinkRecurso}
                toggle={this.toggleRecurso}
                style={{ margin: "10px" }}
              >
                <DropdownToggle
                  color="link"
                  style={{ textDecoration: "none", marginTop: "3px" }}
                  caret
                >
                  RECURSO
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      className="nav-link"
                      to="/cadastro-recurso"
                      className="nav-link text-secondary"
                    >
                      Cadastrar
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/consultar-recurso"
                    >
                      Consultar
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                isOpen={this.state.NavLinkProblem}
                toggle={this.toggle}
                style={{ margin: "10px" }}
              >
                <DropdownToggle
                  color="link"
                  style={{ textDecoration: "none", marginTop: "3px" }}
                  caret
                >
                  PROBLEMA
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      className="nav-link"
                      to="/cadastro-problema"
                      className="nav-link text-secondary"
                    >
                      Cadastrar
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/consultar-problema"
                    >
                      Consultar
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                isOpen={this.state.NavLinkUsuario}
                toggle={this.toggleUsuario}
                style={{ margin: "10px" }}
              >
                <DropdownToggle
                  color="link"
                  style={{ textDecoration: "none", marginTop: "3px" }}
                  caret
                >
                  USUARIO ADMINISTRADOR
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      className="nav-link"
                      to="/cadastro-usuario"
                      className="nav-link text-secondary"
                    >
                      Cadastrar
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/consultar-usuario"
                    >
                      Consultar
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <li
                style={{ position: "absolute", right: "0px", margin: "15px" }}
              >
                <Link
                  onClick={() => this.props.Logout()}
                  to="/login"
                  className="nav-link"
                >
                  SAIR
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  toggle() {
    this.setState({
      NavLinkProblem: !this.state.NavLinkProblem
    });
  }
  toggleUsuario() {
    this.setState({
      NavLinkUsuario: !this.state.NavLinkUsuario
    });
  }
  toggleEmpresa() {
    this.setState({
      NavLinkEmpresa: !this.state.NavLinkEmpresa
    });
  }
  toggleRecurso() {
    this.setState({
      NavLinkRecurso: !this.state.NavLinkRecurso
    });
  }
}

const mapStateToProps = state => ({ navbar: state.navbar });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen, Logout }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
