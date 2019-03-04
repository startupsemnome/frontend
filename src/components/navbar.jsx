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
              <Link to="cadastro-empresa">Home</Link>
            </li>
            <li>
              <Link to="cadastro-empresa">Cadastrar Empresa</Link>
              <ul>
                <li>
                  <a href="#">Product 1</a>
                  <ul>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="cadastro-empresa">Cadastrar Produto</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
