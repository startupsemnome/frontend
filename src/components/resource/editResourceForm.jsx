import React, { Component } from "react";

class EditResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: "José da Silva Pinto",
      telefone: "(11)2242-7589",
      celular: "(11)92242-7589",
      endereco: "Rua 01",
      objetivo: "Estágio",
      resumoProfissional: "Sem experiência",
      areaInteresse: "TI"
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
          <form className="signupForm">
            <label className="labelFields">Nome  do Usuario:</label><br />
            <input className="inputFields" type="text" value={this.state.nomeUsuario}
              onChange={e => this.setState({ nomeUsuario: e.target.value })} />
            <br /><br />
            <img src="https://i.ytimg.com/vi/bG1w8JkcPUo/hqdefault.jpg" width="200" height="200"></img>
            <br />
            <br />
            <div>
              <ul>
                <label className="labelFields">Dados Pessoais:</label><br />
                <br />
                <label className="labelFields">Telefone:</label><br />
                <input className="inputFields" type="text" value={this.state.telefone}
                  onChange={e => this.setState({ telefone: e.target.value })} /> <br />
                <label className="labelFields">Celular:</label><br />
                <input className="inputFields" type="text" value={this.state.celular}
                  onChange={e => this.setState({ celular: e.target.value })} /><br />
                <label className="labelFields">Endereço:</label><br />
                <input className="inputFields" type="text" value={this.state.endereco}
                  onChange={e => this.setState({ endereco: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Objetivos:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.objetivo}
                  onChange={e => this.setState({ objetivo: e.target.value })} /><br />

              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Resumo Profissional:</label><br />
                <br />

                <input className="inputFields" type="text" value={this.state.resumoProfissional}
                  onChange={e => this.setState({ resumoProfissional: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Áreas de Interesse:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.areaInteresse}
                  onChange={e => this.setState({ areaInteresse: e.target.value })} /><br />

              </ul>
            </div>


            <br />
            <br />


            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Editar"
              className="join-btn"
            />
            <input
              type="button"
              onClick={e => this.handleFormSubmit(e)}
              value="Cancelar"
              className="btn btn-warning"
            />

          </form>
        </div>
      </div>
    );
  }
}

export default EditResourceForm;
