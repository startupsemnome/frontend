import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";


class SectionBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      empresa: "",
      cnpj: "",
      categoria: "",
      problema: "",
      sweetCreate: false
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <form className="signupForm">
            <label className="labelFields">Nome</label><br />
            <input
              className="inputFields"
              type="text"
              placeholder="Digite o seu nome"
              value={this.state.fname}
              onChange={e => this.setState({ nome: e.target.value })} />
            <div>
              <ul>
                <br />
                <label className="labelFields">Empresa:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite a empresa"
                  value={this.state.empresa}
                  onChange={e => this.setState({ empresa: e.target.value })} /> <br />
                <label className="labelFields">CNPJ:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o CNPJ"
                  value={this.state.cnpj}
                  onChange={e => this.setState({ cnpj: e.target.value })} /> <br />

                <label className="labelFields">Categoria:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite a categoria"
                  value={this.state.end}
                  onChange={e => this.setState({ categoria: e.target.value })} /><br />

                <label>Problema:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o problema"
                  value={this.state.tel}
                  onChange={e => this.setState({ problema: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
            <Row>
              <Col>
                <button
                  type="button"
                  className="join-btn"
                >
                  Cadastrar
                    </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}
export default SectionBasics;
