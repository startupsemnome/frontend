import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CompanyForm extends Component {
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
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  render() {
    return (
      <div className="App">
        <div>
          <form className="signupForm">
            <label className="labelFields">Nome da Organização</label><br />
            <br></br>
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
            <br></br>
            <label className="labelFields">CNPJ</label><br />
            <input
              className="inputFields"
              type="number"
              max="11"
              id="cnpj"
              name="lastname"
              placeholder="CNPJ"
              value={this.state.cnpj}
              onChange={e => this.setState({ cnpj: e.target.value })}
              required
            />
            <br></br>
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
            <br></br>
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
            <br></br>
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
            <br></br>
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
            <br></br>
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
            <br></br>
            <div>
              <label className="labelFields">Assunto</label><br />
              <input
                className="inputFields"
                id="message"
                name="message"
                placeholder="Descreva pouco sobre a necessidade da sua empresa"
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
              />
            </div>
            <Row>
              <Col>
                <button
                  type="button"
                  onClick={e => this.handleFormSubmit(e)}
                  className="join-btn"
                > Cadastrar
              </button>
              </Col>
            </Row>
          </form>

          <SweetAlert
            success
            show={this.state.sweetCreate}
            onConfirm={() => this.setState({ sweetCreate: false })}
          >
            {`Cadastrado ${this.state.empresa} com sucesso!!!!}`}
          </SweetAlert>
        </div>
      </div>
    );
  }
}
export default CompanyForm; 
