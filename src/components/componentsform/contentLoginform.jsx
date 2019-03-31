import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
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
          console.log(response.data);
          Storage.setItem('userName', response.data.name);
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
                <button type="button" onClick={() => this.validarUser()} className="join-btn-no-transform mr-1">LOGIN</button>
              </Col>
            </Row>
            <p>Ou</p>
            <Row>
              <Col>
                <button /* onClick={(e) => this.editUser(user.id)}*/ className="join-btn-no-transform mr-1">CADASTRAR</button>
              </Col>
            </Row>
          </div>
        </form>

      </div >
    );
  }
}
export default ContentLoginform; 
