import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Progress } from 'reactstrap';

class DetailsCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      cnpj: "",
      email: "",
      tele: "",
      message: ""
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
                <label className="labelFields">Nome da Empresa:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Empresa cadastrada"
                  value={this.state.empresa}
                  onChange={e => this.setState({ empresa: e.target.value })} /><br />

                <label className="labelFields">Cnpj:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Cnpj responsável da organização"
                  value={this.state.cnpj}
                  onChange={e => this.setState({ cnpj: e.target.value })} /><br />

                <label className="labelFields">Email:</label><br />
                <input
                  className="inputFields"
                  type="email"
                  placeholder="Email cadastrado"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} /><br />


                <label className="labelFields">Telefone:</label><br />
                <input
                  className="inputFields"
                  type="tel"
                  placeholder="Telefone cadastrado"
                  value={this.state.tele}
                  onChange={e => this.setState({ tele: e.target.value })} />

              </ul>
            </div>

            <div>
              <ul>
                <label className="labelFields">Assunto da Empresa</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Assunto descrito"
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })} />

                <div className="text-center">Situação do Problema</div>

                <Progress color="success" value="100">Visualizado</Progress>

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

export default DetailsCompanyForm;
