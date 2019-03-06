import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Progress } from 'reactstrap';

class DetailsProblemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opera: "",
      fname: "",
      solic: "",
      email: "",
      telef: "",
      dprob: ""
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div>
          <form action="/action_page.php">
            <label className="A col-md-2">Operador</label>
            <input
              className="A col-md-10"
              type="text"
              id="opera"
              name="firstname"
              placeholder="Operador responsável:"
              value={this.state.opera}
              onChange={e => this.setState({ opera: e.target.value })}
              required
            />

            <label className="A col-md-2">Nome da empresa</label>
            <input
              className="A col-md-10"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Nome da empresa:"
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
              required
            />

            <label className="A col-md-2">Solicitante</label>
            <input
              className="A col-md-10"
              type="text"
              max="11"
              id="solic"
              name="requesting"
              placeholder="Nome do solicitante:"
              value={this.state.lname}
              onChange={e => this.setState({ solic: e.target.value })}
              required
            />

            <label className="A col-md-2">Email</label>
            <input
              className="A col-md-10"
              type="email"
              id="email"
              name="email"
              placeholder="Email da empresa:"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />

            <label className="A col-md-2">Telefone</label>
            <input
              className="A col-md-10"
              type="tel"
              id="telef"
              name="telefone"
              placeholder="Telefone:"
              value={this.state.telef}
              onChange={e => this.setState({ telef: e.target.value })}
              required
            />

            <label className="A col-md-2">Descrição</label>
            <textarea
              className="A col-md-10"
              id="dprob"
              name="Editar Problema"
              placeholder="Descrição do problema: "
              onChange={e => this.setState({ dprob: e.target.value })}
              value={this.state.dprob}
            />

            {/* VERIFICAR DE COLOCAR O TIPO DA SITUAÇÃO 
            COMO UM INDICADOR (INICIO, ANDAMENTO, ENCERRADO) */}

            <br></br>
            <div className="text-center">Situação do Problema</div>
            <br></br>

            <Progress color="success" value="100">Finalizado</Progress>

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

          </form>
        </div>
      </div >
    );
  }
}

export default DetailsProblemForm;
