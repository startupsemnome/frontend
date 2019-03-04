import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <form>
          <label className="A col-md-2">Nome</label>
          <input
            className="A col-md-10"
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            required
          />
          <label className="A col-md-2">Email</label>
          <input
            className="A col-md-10"
            type="text"
            max="11"
            id="email"
            name="email"
            placeholder="Digite o sobrenome"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />

          <label className="A col-md-2">Senha</label>
          <input
            className="A col-md-10"
            type="text"
            id="end"
            name="endereco"
            placeholder="Ex: 1234"
            value={this.state.senha}
            onChange={e => this.setState({ senha: e.target.value })}
            required
          />
          <input
            type="submit"
            onClick={e => this.handleFormSubmit(e)}
            value="Confirmar Cadastro"
            className="btn btn-success"
          />
          <input
            type="button"
            onClick={e => this.handleFormSubmit(e)}
            value="Cancelar Cadastro"
            className="btn btn-warning"
          />
        </form>
      </div>
    );
  }
}

export default UserForm;
