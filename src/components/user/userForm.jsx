import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
      sweetCreate: false
    };
    this.hasErros = this.hasErros.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  createUser() {
    alert(1);
    if (!this.hasErros()) {
      axios
        .post(env.API + "user", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
        .then(function(response) {
          alert(2);
          console.log(response);
          window.location = "/consultar-usuario";
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  hasErros() {
    if (this.state.name === "") {
      this.setState({ error: "preencha o campo nome" });
      return true;
    } else if (this.state.email === "") {
      this.setState({ error: "preencha o campo email" });
      return true;
    } else if (this.state.password === "") {
      this.setState({ error: "preencha o campo senha" });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="col-md-12">
        <form className="signupForm">
          <ul class="noBullet">
            <li>
              <label className="labelFields col-md-2">Nome:</label>
              <input
                className="inputFields col-md-10"
                type="text"
                placeholder="Digite o seu nome"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                required
              />
            </li>
          </ul>
          <label className="labelFields col-md-2">Email:</label>
          <input
            className="inputFields col-md-10"
            type="email"
            placeholder="Digite o sobrenome"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />

          <label className="labelFields col-md-2">Senha:</label>
          <input
            className="inputFields col-md-12"
            type="password"
            placeholder="Ex: 1234"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            required
          />
          <label className="labelFields" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Row>
            <Col>
              <button
                type="button"
                onClick={this.createUser}
                className="join-btn"
              >
                Criar Usuário
              </button>
            </Col>
          </Row>
        </form>
        <SweetAlert
          success
          show={this.state.sweetCreate}
          title="Atenção"
          onConfirm={() => this.setState({ sweetCreate: false })}
        >
          {`Cadastrado ${this.state.name} com sucesso!`}
        </SweetAlert>
      </div>
    );
  }
}

export default UserForm;
