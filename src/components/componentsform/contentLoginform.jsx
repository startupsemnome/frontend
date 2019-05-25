import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import { Link } from "react-router-dom";
import { setNavbarOpen } from "./../../redux/actions/navbarAction";

class ContentLoginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      error: null
    };
    this.hasErros = this.hasErros.bind(this);
    this.validarUser = this.validarUser.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ SweetCreate: true });
  }
  hasErros() {
    if (this.state.name === "") {
      this.setState({ error: "preencha o campo login" });
      return true;
    } else if (this.state.password === "") {
      this.setState({ error: "preencha o campo senha" });
      return true;
    }
    return false;
  }
  goToInstitutional() {
    this.props.history.push("/institutional");
  }
  validarUser() {
    if (!this.hasErros()) {
      axios
        .post(env.API + "login", {
          login: this.state.name,
          password: this.state.password
        })
        .then(response => {
          localStorage.setItem("userName", response.data.name);
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("type", response.data.type);
          this.props.setNavbarOpen(true);
          this.props.setLogin(true);
          this.props.history.push("/dashboard");
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.setState({ error: "Login ou Senha Invalidos" });
          } else {
            this.setState({
              error: "Error interno tente novamente mais tarde"
            });
          }
        });
    }
  }
  render() {
    return (
      <div className="loginUser col-md-12">
        <form style={{ marginTop: "50px", width: "80%" }}>
          <label className="labelFields nome">Nome do Usuario</label>
          <input
            className="inputFields"
            type="text"
            id="name"
            name="nome"
            placeholder="Nome de login"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            required
          />
          <label className="labelFields senha">Senha</label>
          <input
            className="inputFields"
            type="password"
            min="8"
            id="password"
            name="pastname"
            placeholder="Senha de login"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            required
          />
          <label
            className="errorForm"
            style={{
              color: "red",
              display: `${this.state.error ? "block" : "none"}`
            }}
          >
            {this.state.error}
          </label>
          <div className="labelFields">
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <div class="institucional">
                <button
                  type="button"
                  onClick={() => this.goToInstitutional()}
                  className="join-btn-no-transform mr-1 login"
                >
                  Página Inicial
                </button>
              </div>
              <br />
              <div className="login">
                <button
                  type="button"
                  onClick={() => this.validarUser()}
                  className="join-btn-no-transform mr-1 login"
                >
                  Login
                </button>
              </div>
            </Row>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);
export default ContentLoginform;
