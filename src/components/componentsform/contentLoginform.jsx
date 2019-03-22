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
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="loginUser col-md-12">
        <form action="signupForm">
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
            max="11"
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
                <button /* onClick={(e) => this.editUser(user.id)}*/ className="join-btn-no-transform mr-1">LOGIN</button>
              </Col>
            </Row>
            Or
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
