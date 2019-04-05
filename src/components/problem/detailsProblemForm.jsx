import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Progress } from 'reactstrap';

class DetailsProblemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operador: "",
      empresa: "",
      solicit: "",
      email: "",
      telef: "",
      descricao: ""
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
            <div>
              <ul>
                <label className="labelFields">Operador:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Operador responsável pelo cadastro"
                  value={this.state.operador}
                  onChange={e => this.setState({ operador: e.target.value })} /> <br />


                <label className="labelFields">Nome da Empresa:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Empresa cadastrada"
                  value={this.state.empresa}
                  onChange={e => this.setState({ empresa: e.target.value })} /><br />

                <label className="labelFields">Solicitante:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Solicitante responsável pela abertura"
                  value={this.state.solicit}
                  onChange={e => this.setState({ solicit: e.target.value })} /><br />

                <label className="labelFields">Email:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Email cadastrado"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} /><br />


                <label className="labelFields">Telefone:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Telefone cadastrado"
                  value={this.state.telef}
                  onChange={e => this.setState({ telef: e.target.value })} />

              </ul>
            </div>

            <div>
              <ul>
                <label className="labelFields">Descrição do Problema</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Problema descrito"
                  value={this.state.descricao}
                  onChange={e => this.setState({ descricao: e.target.value })} />

                <div className="text-center">Situação do Problema</div>

                <Progress color="success" value="100">Finalizado</Progress>

                <br></br>
                <br></br>

                <input
                  type="submit"
                  onClick={e => this.handleFormSubmit(e)}
                  value="Voltar"
                  className="btn btn-info"
                />

                <br></br>
                <br></br>

                <div class="alert alert-warning">
                  <strong>Atenção!!</strong> Informações sujeitas a alterações.
                </div>
              </ul>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default DetailsProblemForm;
