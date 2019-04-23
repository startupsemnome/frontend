import React, { Component } from "./node_modules/react";
import { Row, Col } from "./node_modules/reactstrap";
import SweetAlert from "./node_modules/react-bootstrap-sweetalert";
import { Button, Form, FormGroup, Label, Input, FormText } from './node_modules/reactstrap';

class EditCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      cnpj: "",
      email: "",
      tele: "",
      message: "",
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
            <label className="labelFields">Nome da empresa:</label><br />
            <input
              className="inputFields"
              type="text"
              placeholder="Digite o nome da empresa"
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })} />
            <div>
              <ul>
                <br />

                <label className="labelFields">Cnpj:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Digite o nome da empresa"
                  value={this.state.cnpj}
                  onChange={e => this.setState({ cnpj: e.target.value })} /> <br />

                <label className="labelFields">Email:</label><br />
                <input
                  className="inputFields"
                  type="email"
                  placeholder="Digite o email da empresa"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} /><br />

                <label className="labelFields">Telefone:</label><br />
                <input
                  className="inputFields"
                  type="tel"
                  placeholder="Digite o telefone da empresa"
                  value={this.state.tele}
                  onChange={e => this.setState({ tele: e.target.value })} /><br />

                <label className="labelFields">Estado:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o estado da empresa"
                  value={this.state.est}
                  onChange={e => this.setState({ est: e.target.value })} /><br />

                <label className="labelFields">Cidade:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o cidade da empresa"
                  value={this.state.cid}
                  onChange={e => this.setState({ cid: e.target.value })} /><br />

                <label className="labelFields">Bairro:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o bairro da empresa"
                  value={this.state.bair}
                  onChange={e => this.setState({ bair: e.target.value })} /><br />

                <label className="labelFields">Rua:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o rua da empresa"
                  value={this.state.rua}
                  onChange={e => this.setState({ rua: e.target.value })} /><br />

                <label className="labelFields">Número:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Digite o numero da empresa"
                  value={this.state.num}
                  onChange={e => this.setState({ num: e.target.value })} /><br />
              </ul>
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
            </div>
            <br /><br />
            <Row>
              <Col>
                <button
                  type="button"
                  onClick={e => this.handleFormSubmit(e)}
                  className="join-btn"
                > Salvar
              </button>
              </Col>
            </Row>

          </form>
          <SweetAlert
            success
            show={this.state.sweetCreate}
            onConfirm={() => this.setState({ sweetCreate: false })}
          >
            {`Alterado ${this.state.empresa} com sucesso!`}
          </SweetAlert>

        </div>
      </div>

    );
  }
}

export default EditCompanyForm;
