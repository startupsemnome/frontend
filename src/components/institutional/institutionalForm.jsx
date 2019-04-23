import React, { Component } from "./node_modules/react";
import { Row, Col } from "./node_modules/reactstrap";
import SweetAlert from "./node_modules/react-bootstrap-sweetalert";
import { Button, Form, FormGroup, Label, Input, FormText } from './node_modules/reactstrap';
import axios from "./node_modules/axios";
import env from "../../consts";
class InstitutionalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      cnpj: "",
      email: "",
      message: "",
      tele: "",
      est: "",
      cid: "",
      bair: "",
      num: "",
      rua: "",
      sweetCreate: false
    };
  }


  render() {
    return (
      <div className="App">
        <div>
          <form className="signupForm form-inline">

            <label className="labelFields">Nome da Organização: </label>
            <input
              className="inputFields"
              type="text"
              id="empresa"
              name="firstname"
              placeholder="Nome da empresa"
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })}
              required
            />


            <label className="labelFields">CNPJ</label><br />
            <input
              className="inputFields"
              type="number"
              id="cnpj"
              name="lastname"
              placeholder="CNPJ"
              value={this.state.cnpj}
              onChange={e => this.setState({ cnpj: e.target.value })}
              required
            />


            <label className="labelFields">Email</label><br />
            <input
              className="inputFields"
              type="email"
              id="email"
              name="email"
              placeholder="Email da empresa"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />

            <label className="labelFields">Telefone da empresa</label><br />
            <input
              className="inputFields"
              type="tel"
              id="tele"
              name="telefone"
              placeholder="Telefone da empresa"
              value={this.state.tele}
              onChange={e => this.setState({ tele: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Estado</label><br />
            <input
              className="inputFields"
              type="text"
              id="est"
              name="estado"
              placeholder="Estado da empresa"
              value={this.state.est}
              onChange={e => this.setState({ est: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Cidade</label><br />
            <input
              className="inputFields"
              type="text"
              id="cid"
              name="cidade"
              placeholder="A cidade da empresa"
              value={this.state.cid}
              onChange={e => this.setState({ cid: e.target.value })}
              required
            />
            <br></br>
            <label className="labelFields">Bairro</label><br />
            <input
              className="inputFields"
              type="text"
              id="bair"
              name="bairro"
              placeholder="O bairro da empresa"
              value={this.state.bair}
              onChange={e => this.setState({ bair: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Rua</label><br />
            <input
              className="inputFields"
              type="text"
              id="rua"
              name="rua"
              placeholder="A rua da empresa"
              value={this.state.rua}
              onChange={e => this.setState({ rua: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Numero</label><br />
            <input
              className="inputFields"
              type="number"
              id="num"
              name="numero"
              placeholder="O numero da empresa"
              value={this.state.num}
              onChange={e => this.setState({ num: e.target.value })}
              required
            />
            <br /><br />

            <label className="labelFields">Assunto</label><br />
            <input
              className="inputFields"
              id="message"
              name="message"
              placeholder="Descreva pouco sobre a necessidade da sua empresa"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />

            <label className="labelFields" style={{ color: "red" }}>
              {this.state.error}
            </label>
          </form>
        </div>
      </div>
    );
  }
}
export default InstitutionalForm; 
