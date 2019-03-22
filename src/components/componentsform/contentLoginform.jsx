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
      <div className="col-md-12">
        <form action="signupForm">
          <label className="labelFields">Nome do Usuario</label>
          <input
            className="contentlo col-md-6"
            type="text"
            id="name"
            name="nome"
            placeholder="Nome de login"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            required
          />
          <label className="labelFields">Senha</label>
          <input
            className="contentlo  col-md-6"
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
            {/* <SweetAlert
              onConfim={() => this.setState({ sweetCreate: false })}
              show={this.state.sweetCreate}
              className="regemp btn btn-success">
              {/* <Link to="/registro-empresa" className="buttonRegistro">
                Login
                </Link>
            {`Logado ${this.state.name} com sucesso!!!`}
            </SweetAlert> */}
          </div>
        </form>
      </div >
    );
  }
}
export default ContentLoginform; 
