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
      NavLinkRecurso: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleUsuario = this.toggleUsuario.bind(this);
    this.toggleRecurso = this.toggleRecurso.bind(this);
  }
  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-cor">
          <a className="navbar-brand" href="#">
            Navbar
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
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro-empresa">
                  Empresa
                </Link>
              </li>


              <Dropdown
                isOpen={this.state.NavLinkRecurso}
                toggle={this.toggleRecurso}
              >
                <DropdownToggle caret>Recurso</DropdownToggle>
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
                      to="/detalhes-recurso"
                    >
                      Detalhar
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      className="nav-link text-secondary"
                      to="/detalhes-recurso"
                    >
                      Editar
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown isOpen={this.state.NavLinkProblem} toggle={this.toggle}>
                <DropdownToggle caret>Problemas</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      className="nav-link"
                      to="/cadastro-problema"
                      className="nav-link text-secondary"
                    >
                      Criar
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

              <Link className="nav-link" to="/institucional">
                Institucional
              </Link>

              <Dropdown
                isOpen={this.state.NavLinkUsuario}
                toggle={this.toggleUsuario}
              >
                <DropdownToggle caret>Usuario</DropdownToggle>
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
  toggleRecurso() {
    this.setState({
      NavLinkRecurso: !this.state.NavLinkRecurso
    });
  }
}

export default NavBar;
