import React, { Component } from "react";
import "./../bootstrap.min.css";
class ProblemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      solic: "",
      email: "",
      telef: "",
      nprob: ""
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
            <label className="A col-md-2">Nome da empresa</label>
            <input
              className="A col-md-10"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Nome da empresa"
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
              placeholder="Nome do Solicitante"
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
              placeholder="Email da empresa"
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
              placeholder="Telefone"
              value={this.state.telef}
              onChange={e => this.setState({ telef: e.target.value })}
              required
            />

            <label className="A col-md-2">Novo Problema</label>
            <textarea
              className="A col-md-10"
              id="nprob"
              name="Novo problema"
              placeholder="Descreva seu problema:"
              onChange={e => this.setState({ nprob: e.target.value })}
              value={this.state.nprob}
            />

            <button type="button" className="btn btn-success">
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProblemForm;
