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
      confirmSenha: "",
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
    } else if (this.state.senha !== this.state.confirmSenha) {
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
          localStorage.setItem("userId", JSON.stringify(response.data.id));
          localStorage.setItem("userName", JSON.stringify(response.data.nome));
          localStorage.setItem("type", "RESOURCE");
          window.location.reload();
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
       
          <form className="signupFor form-inline">
            <div className="col-md-3">
              <label className="labelField"
                style={{ display: "flex", justifyContent: "end" }}
                >
                Nome
             </label>
             <input
                className="inputFields col-md-12"
                type="text"
                placeholder="Digite o seu nome"
                value={this.state.nome}
                onChange={e => this.setState({ nome: e.target.value })}
              />
            </div>

            <div className="col-md-9">
              <label className="labelField"
                 style={{ display: "flex", justifyContent: "end" }}
                >
                  Sobrenome:
                </label>
                <input
                  className="inputFields col-md-12"
                  type="text"
                  placeholder="Digite o seu sobrenome"
                  value={this.state.sobrenome}
                  onChange={e => this.setState({ sobrenome: e.target.value })}
                />{" "}
            </div>
          <div className="col-md-6">
                <label className="labelField" style={{ display: "flex", justifyContent: "end" }}>E-mail:</label>
                <input
                  className="inputFields col-md-12"
                  type="text"
                  placeholder="Digite o seu e-mail"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />{" "}
                </div>
            <div className="col-md-3">
                <label className="labelField">Cadastrar Senha:</label>
                <input
                  className="inputFields col-md12"
                  type="password"
                  placeholder="Digite a sua senha"
                  value={this.state.senha}
                  onChange={e => this.setState({ senha: e.target.value })}
                />
                </div>
                  <div className="col-md-3">
                    <label className="labelField" style={{ display: "flex", justifyContent: "end" }}>Confirmação de Senha:</label>
                      <input
                        className="inputFields col-md-12"
                        type="password"
                        placeholder="Confirme a sua senha"
                        onChange={e =>
                          this.setState({ confirmSenha: e.target.value })
                        }
                      />
                  </div>
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
