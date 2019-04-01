import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class ContentLoginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      error: ""
    };
    this.hasErros = this.hasErros.bind(this);
    this.validarUser = this.validarUser.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ SweetCreate: true })
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
  validarUser() {
    if (!this.hasErros()) {
      axios
        .post(env.API + "login", {
          login: this.state.name,
          password: this.state.password
        })
        .then(function (response) {
          localStorage.setItem('userName', response.data.name);
          this.props.history.push('/dashboard');
        }).catch((error) => {
          this.setState({ error });
        }
        );
    }
  }
  render() {
    return (
      <div className="loginUser col-md-12">
        <form>
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
          <div className="labelFields" >
            <Row>
              <Col>
                <a type="button" onClick={() => this.validarUser()} className="join-btn-no-transform mr-1">LOGIN</a>
              </Col>
            </Row>
            <p>Ou</p>
            <Row>
              <Col>
                <Link to="/institutional" className="join-btn-no-transform mr-1">Ir Para Institucional</Link>
              </Col>
            </Row>
          </div>
        </form>

      </div >
    );
  }
}
export default ContentLoginform; 
