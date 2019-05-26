import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";

class SectionBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      sweetCreate: false
    };
    this.hasErros = this.hasErros.bind(this);
    this.cadastrarResource = this.cadastrarResource.bind(this);
  }

  hasErros() {
    if (this.state.nome === "") {
      this.setState({ error: "preencha o campo nome" });
      return true;
    } else if (this.state.sobrenome === "") {
      this.setState({ error: "preencha o campo sobrenome" });
      return true;
    } else if (this.state.nome != this.state.sobrenome) {
      this.setState({ error: "Campo de senha e confirmação não são iguais" });
      return true;
    } else if (this.state.email === "") {
      this.setState({ error: "preencha o campo email" });
      return true;
    } else if (this.state.senha === "") {
      this.setState({ error: "preencha o campo senha" });
      return true;
    }
    return false;
  }

  cadastrarResource() {
    if (!this.hasErros()) {
      axios
        .post(env.API + "resource", {
          nome: this.state.nome,
          sobrenome: this.state.sobrenome,
          email: this.state.email,
          senha: this.state.senha
        })
        .then(response => {
          console.log(response);
          this.props.history("/login");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div>
          <h1 id="header3" className="footer-H1-Question">
            Deseja cadastrar o seu perfil?
          </h1>
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
            <label className="labelFields col-md-12" style={{ color: "red" }}>
              {this.state.error}
            </label>
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
                  onClick={() => this.cadastrarResource()}
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
