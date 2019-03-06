import React, { Component } from "react";

class EditResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: "José da Silva Pinto",
      telefone: "(11)2242-7589",
      celular: "",
      endereco: "",
      objetivo: "",
      resumoProfissional: "",
      areaInteresse: "",
      nrec: "",
      message1: ""
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
            <input className="inputFields" type="text" value={this.state.nomeUsuario} />
            <br /><br />
            <img src="https://i.ytimg.com/vi/bG1w8JkcPUo/hqdefault.jpg" width="200" height="200"></img>
            <br />
            <br />
            <div>
              <ul>
                <h1>Dados pessoais :</h1>
                <br />
                <label className="labelFields">Telefone:</label><br />
                <input className="inputFields" type="text" value={this.state.telefone} /> <br />
                <label className="labelFields">Celular:</label><br />
                <input className="inputFields" type="text" value={this.state.celular} /><br />
                <label className="labelFields">Endereço:</label><br />
                <input className="inputFields" type="text" value={this.state.endereco} /><br />
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Objetivos:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.objetivo} /><br />

              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Resumo Profissional:</label><br />
                <br />

                <input className="inputFields" type="text" value={this.state.resumoProfissional} /><br />
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Áreas de Interesse:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.areaInteresse} /><br />

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
