import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  NavbarToggler,
  DropdownItem,
  Collapse
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
      isOpen: false,
      active: ""
    };
    this.toggle = this.toggle.bind(this);
    this.toggleEmpresa = this.toggleEmpresa.bind(this);
    this.toggleUsuario = this.toggleUsuario.bind(this);
    this.toggleRecurso = this.toggleRecurso.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }
  componentDidMount() {
    var pathname = window.location.pathname;
    console.log(pathname);
    this.setState({ active: pathname });
  }
  render() {
    const { active } = this.state;
    return (
      <div className="nav-bar"
        style={{ display: `${this.props.navbar.isNavbarOpen ? "initial" : "none"}` }}
      >
        <Navbar style={{ height: "70px" }} color="dark" dark expand="lg">
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
          <NavbarToggler onClick={this.toggleButton} />
          <Collapse isOpen={this.state.isOpen}
            style={{
              zIndex: 999,
              backgroundColor: "#343a40"
            }}

            navbar>
            <ul className="navbar-nav w-100" style={{ backgroundColor: "#343a40" }}>

              <li className={`nav-item`} style={{ margin: 15 }}>
                <NavLink exact to="/institutional" className="nav-link">
                  HOME
                </NavLink>
              </li>

              <li
                className={`nav-item active ${active === "/dashboard" ? "active-nav-admin" : ""}`}
                style={{ margin: 15 }}
              >
                <NavLink to="/dashboard" className="nav-link"  >
                  DASHBOARD
                </NavLink>
              </li>                                                                
              <li className={`nav-item active ${active === "/consultar-recurso" ? "active-nav-user" : ""}`}
                style={{ margin: "15px" }} >
                <NavLink to="/consultar-recurso" className="nav-link">
                  RECURSOS
                </NavLink>
              </li>
              <Dropdown
                isOpen={this.state.NavLinkEmpresa}
                toggle={this.toggleEmpresa}
                style={{ margin: "10px" }}

              >
                <li className={`nav-item active ${active === "/cadastro-empresa" ? "active-nav-user" : ""}`
                  || `nav-item active ${active === "/consultar-empresa" ? "active-nav-user" : ""}`}
                >
                  <DropdownToggle
                    color="link"
                    style={{ textDecoration: "none", marginTop: "3px" }}
                    caret
                  >
                    EMPRESA
                  </DropdownToggle>
                </li>
                <DropdownMenu>
                  <DropdownItem >
                    <NavLink
                      to="/cadastro-empresa"
                      className="nav-link text-secondary"
                    >
                      Cadastrar
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className="nav-link text-secondary"
                      to="/consultar-empresa"
                    >
                      Consultar
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                isOpen={this.state.NavLinkProblem}
                toggle={this.toggle}
                style={{ margin: "10px" }}
              >
                <li className={`nav-item active ${active === "/cadastro-problema" ? "active-nav-user" : ""}`
                  || `nav-item active ${active === "/consultar-problema" ? "active-nav-user" : ""}`} >
                  <DropdownToggle
                    color="link"
                    style={{ textDecoration: "none", marginTop: "3px" }}
                    caret
                  >
                    PROBLEMA
                </DropdownToggle>
                </li>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink
                      to="/cadastro-problema"
                      className="nav-link text-secondary"
                    >
                      Cadastrar
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className="nav-link text-secondary"
                      to="/consultar-problema"
                    >
                      Consultar
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                isOpen={this.state.NavLinkUsuario}
                toggle={this.toggleUsuario}
                style={{ margin: "10px" }}
              >
                <li className={`nav-item active ${active === "/cadastro-usuario" ? "active-nav-user" : ""}`
                  || `nav-item active ${active === "/consultar-usuario" ? "active-nav-user" : ""}`}
                >
                  <DropdownToggle
                    color="link"
                    style={{ textDecoration: "none", marginTop: "3px" }}
                    caret
                  >
                    USUARIO ADMINISTRADOR
                  </DropdownToggle>
                </li>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink
                      to="/cadastro-usuario"
                      className="nav-link text-secondary"
                    >
                      Cadastrar
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className="nav-link text-secondary"
                      to="/consultar-usuario"
                    >
                      Consultar
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <li className={`nav-item active ${active === "/feed" ? "active-nav-user" : ""}`} style={{ margin: "15px" }}>
                <NavLink
                  to="/feed"
                  className="nav-link"
                >
                  FEED
                </NavLink>
              </li>

              <li style={{ position: "absolute", right: "10px", margin: "15px" }}
                className={`nav-item active ${active === "/login" ? "active-nav-user" : ""}`}
              >

                <NavLink
                  onClick={() => this.props.Logout()}
                  to="/login"
                  className="nav-link"
                >
                  SAIR
                </NavLink>
              </li>
            </ul>
          </Collapse>
        </Navbar>
      </div >
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
  toggleButton() {
    this.setState({
      isOpen: !this.state.isOpen
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