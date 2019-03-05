import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavLinkProblem: false
    }
    this.toggle = this.toggle.bind(this);
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
            <ul className="navbar-nav">
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
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro-recurso">
                  Recurso
                </Link>
              </li>


              <Dropdown isOpen={this.state.NavLinkProblem} toggle={this.toggle}>
                <DropdownToggle caret>
                  Problemas
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Criar
                    <li className="nav-item">
                      <Link className="nav-link" to="/cadastro-problema">
                      </Link>
                    </li>
                  </DropdownItem>
                  <DropdownItem>
                    Editar
                    <li className="nav-item">
                      <Link className="nav-link" to="/editar-problema">
                      </Link>
                    </li>
                  </DropdownItem>
                  <DropdownItem>Consultar</DropdownItem>
                  <DropdownItem>Detalhes</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <li className="nav-item">
                <Link className="nav-link" to="/institucional">
                  Institucional
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro-usuario">
                  Usuario
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

    })

  }
}

export default NavBar;

