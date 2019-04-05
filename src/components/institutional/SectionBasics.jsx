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
                  placeholder="Nome da Empresa"
                  value={this.state.lname}
                  onChange={e => this.setState({ empresa: e.target.value })} /> <br />
                <label className="labelFields">CNPJ::</label><br />
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
                  value={this.state.categoria}
                  onChange={e => this.setState({ end: e.target.value })} /><br />

                <label className="labelFields">Problema:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o problema"
                  value={this.state.problema}
                  onChange={e => this.setState({ tel: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
            <label className="labelFields" style={{ color: "red" }}>
              {this.state.error}
            </label>

            <Row>
              <Col>
                {this.props.id ?
                  <button
                    type="button"
                    //onClick={() => this.goToConsulta("/consultar-recurso")}
                    className="join-btn w-25"
                  >
                    Enviar
                  </button> : null}

                <button
                  type="button"
                  //onClick={() => { !this.props.id ? this.createResource("create") : this.createResource("update", this.props.id) }}
                  className="join-btn"
                >
                  Enviar
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
