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
      sobrenome: "",
      email: "",
      senha: "",
      // nome: "",
      // empresa: "",
      // cnpj: "",
      // categoria: "",
      // problema: "",
      sweetCreate: false
    };
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div>
          <h1 id="header3" className="footer-H1-Question">Deseja cadastrar o seu perfil?</h1>
        </div>
        <div
          style={{
            padding: "32px 80px",
            backgroundColor: "#33b3e2",
            marginTop: "28px"
          }}
        >
          <form className="signupFor">
            <label className="labelField">Nome</label>
            <br />
            <input
              className="inputFields"
              type="text"
              placeholder="Digite o seu nome"
              value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })}
            />
            <div>
              <ul>
                <label className="labelField">Sobrenome:</label>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o seu sobrenome"
                  value={this.state.sobrenome}
                  onChange={e => this.setState({ sobrenome: e.target.value })}
                />{" "}
                <br />

                <label className="labelField">E-mail:</label>
                <br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o seu e-mail"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />{" "}
                <br />

                <label className="labelField">Cadastrar Senha:</label>
                <br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite a sua senha"
                  value={this.state.senha}
                  onChange={e => this.setState({ senha: e.target.value })}
                />
                <br />
                <label className="labelField">Confirmação de Senha:</label>
                <br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Confirme a sua senha"
                />
                <br />

              </ul>
            </div>
            <br />
            <br />
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <button
                  type="button"
                  className="join-btn-no-transform mr-1 login"
                  style={{ width: "100%" }}
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
