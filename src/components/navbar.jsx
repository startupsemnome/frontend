import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../css/menu.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-bar">
        <div id="cssmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>  
            </li>
            <li>
              <Link to="/cadastro-empresa">Cadastrar Empresa</Link>
              <ul>
                <li>
                  <Link to="/cadastro-empresa">Empresa</Link>
                  <ul>
                    <li>
                      <Link to="/cadastro-empresa">Nova</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/cadastro-produto">Cadastrar Produto</Link>
            </li>

            <li>
              <Link to="/cadastro-problema">Cadastrar Problema</Link>
            </li>

            <li>
              <Link to="/cadastro-recurso">Cadastrar Recurso</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
