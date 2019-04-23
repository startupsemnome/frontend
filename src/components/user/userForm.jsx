import React, { Component } from "./node_modules/react";
import { Row, Col } from "./node_modules/reactstrap";
import SweetAlert from "./node_modules/react-bootstrap-sweetalert";
import axios from "./node_modules/axios";
import env from "../../consts";

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
    console.log(this.props);
    this.hasErros = this.hasErros.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }

  createUser(method, id) {

    if (!this.hasErros()) {

      if (method == "create") {
        axios
          .post(env.API + "user", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-usuario";
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (method = "update") {

        axios
          .put(env.API + "user/" + id, {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-usuario";
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }
  }

  componentDidMount() {
    if (this.props.id) {
      const id = this.props.id;
      axios
        .get(env.API + "user/" + id)
        .then((response) => {
          console.log(response);
          const data = response.data;
          this.setState({ name: data.name, password: data.password, email: data.email });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  goToConsulta() {
    console.log(this.props);
    window.location = "consultar-usuario";
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
      <div className="loginUser col-md-12">
        <form className="signupForm form-inline">
          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome do Usuario:{" "}
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o seu nome"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-7">
            <label className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Email:
            </label>
            <input
              className="inputFields col-md-12"
              type="email"
              placeholder="Digite o sobrenome"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Senha:
            </label>
            <input
              className="inputFields col-md-12"
              type="password"
              placeholder="Ex: 1234"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
          </div>
          <label className="labelFields col-md-12" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Col className="col-md-12 d-flex justify-content-center">
            {this.props.id ? (
              <button
                type="button"
                onClick={() => this.goToConsulta("/consultar-usuarios")}
                className="join-btn-no-transform mr-1 login"
                style={{ width: "25%", margin: "0px" }}
              >
                Consultar Usuarios
                </button>
            ) : null}
            <div />
            <button
              type="button"
              onClick={() => { !this.props.id ? this.createUser("create") : this.createUser("update", this.props.id) }}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              {!this.props.id ? "Criar" : "Editar"} Usuário
            </button>
          </Col>
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
