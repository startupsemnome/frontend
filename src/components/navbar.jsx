import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavLinkProblem: false,
      NavLinkUsuario: false,
      NavLinkEmpresa: false,
      NavLinkRecurso: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleEmpresa = this.toggleEmpresa.bind(this);
    this.toggleUsuario = this.toggleUsuario.bind(this);
    this.toggleRecurso = this.toggleRecurso.bind(this);
  }
  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-cor">
          <a className="navbar-brand" href="#">
            HACK
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
              <li className="nav-item active" style={{ margin: "15px" }} >
                <Link to="/" className="nav-link">
                  DASHBOARD
                </Link>
              </li>

              <Dropdown isOpen={this.state.NavLinkEmpresa} toggle={this.toggleEmpresa} style={{ margin: "10px" }} >
                <DropdownToggle color="link" style={{ textDecoration: "none", marginTop: "3px" }} caret>EMPRESA</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/cadastro-empresa" className="nav-link text-secondary">
                      Cadastrar
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link className="nav-link text-secondary" to="/editar-empresa" >
                      Editar
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link className="nav-link text-secondary" to="/consultar-empresa" >
                      Consultar
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link className="nav-link text-secondary" to="/detalhes-empresa" >
                      Detalhes
                    </Link>
                  </DropdownItem>

                </DropdownMenu>
              </Dropdown>
              <Dropdown
                isOpen={this.state.NavLinkRecurso}
                toggle={this.toggleRecurso}
                style={{ margin: "10px" }}
              >
                <DropdownToggle color="link" style={{ textDecoration: "none", marginTop: "3px" }} caret>RECURSO</DropdownToggle>
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
                      to="/editar-recurso"
                    >
                      Editar
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

                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/detalhes-recurso"
                    >
                      Detalhes
                    </Link>
                  </DropdownItem>

                </DropdownMenu>
              </Dropdown>

              <Dropdown isOpen={this.state.NavLinkProblem} toggle={this.toggle} style={{ margin: "10px" }} >
                <DropdownToggle color="link" style={{ textDecoration: "none", marginTop: "3px" }} caret>PROBLEMA</DropdownToggle>
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
                      to="/editar-problema"
                    >
                      Editar
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
                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/detalhes-problema"
                    >
                      Detalhes
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                isOpen={this.state.NavLinkUsuario}
                toggle={this.toggleUsuario}
                style={{ margin: "10px" }}
              >
                <DropdownToggle color="link" style={{ textDecoration: "none", marginTop: "3px" }} caret>USUARIO</DropdownToggle>
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
                      to="/editar-usuario"
                    >
                      Editar
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
                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/detalhes-usuario"
                    >
                      Detalhes
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <li className="nav-item active" style={{ margin: "15px" }} >
                <Link to="/institutional" className="nav-link">
                  INSTITUCIONAL
                </Link>
              </li>

              <li style={{ position: "absolute", right: "0px", margin: "15px" }}>
                <Link to="/login" className="nav-link">
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

export default NavBar;
