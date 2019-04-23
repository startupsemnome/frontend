import React, { Component } from "./node_modules/react";
import { Row, Col } from "./node_modules/reactstrap";
import SweetAlert from "./node_modules/react-bootstrap-sweetalert";
import { Button, Form, FormGroup, Label, Input, FormText } from './node_modules/reactstrap';

class EditProblemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      solic: "",
      email: "",
      telef: "",
      alter: "",
      nprob: "",
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

                <label className="labelFields">Solicitante:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o nome do solicitante"
                  value={this.state.solicit}
                  onChange={e => this.setState({ solicit: e.target.value })} /> <br />

                <label className="labelFields">Email:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o email do responsável"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} /><br />

                <label className="labelFields">Telefone:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Digite o telefone do responsável"
                  value={this.state.telef}
                  onChange={e => this.setState({ telef: e.target.value })} /><br />

                <label className="labelFields">Editar Problema:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Digite o telefone do responsável"
                  value={this.state.alter}
                  onChange={e => this.setState({ alter: e.target.value })} /><br />

                <FormGroup>
                  <Label for="exampleSelect">Tipo de Alteração</Label>
                  <Input type="select" className="select" id="exampleSelect">
                    <option>1 - Inclusão</option>
                    <option>2 - Alteração</option>
                    <option>3 - Exclusão</option>
                  </Input>
                </FormGroup>
              </ul>
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

export default EditProblemForm;
