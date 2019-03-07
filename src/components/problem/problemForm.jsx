import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";

class ProblemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      solicit: "",
      email: "",
      telef: "",
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
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Novo Problema</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Descreve o problema"
                  value={this.state.nprob}
                  onChange={e => this.setState({ nprob: e.target.value })} />

              </ul>
            </div>

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
            {`Cadastrado ${this.state.empresa} com sucesso!`}
          </SweetAlert>

        </div>
      </div>

    );
  }
}

export default ProblemForm;
