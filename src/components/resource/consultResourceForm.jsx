import React, { Component } from "react";

class ConsultResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaAtuacao: "ex: Backend, Frontend, Fullstack",
      experiencia: "ex: Java, PHP",
      regiao: "ex: São Paulo -SP",
      formacao: "ex: Superior Completo",      
      disponibilidade: "ex: Segunda, terça e quinta"
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
           
            <div>
              <ul>
                <label className="labelFields">Consultar Recurso</label><br />
                <br />
                <label className="labelFields">Area de Atuação</label><br />
                <input className="inputFields" type="text" value={this.state.areaAtuacao}
                  onChange={e => this.setState({ areaAtuacao: e.target.value })} /> <br />
                <label className="labelFields">Experiência</label><br />
                <input className="inputFields" type="text" value={this.state.experiencia}
                  onChange={e => this.setState({ experiencia: e.target.value })} /><br />
                <label className="labelFields">Regiao:</label><br />
                <input className="inputFields" type="text" value={this.state.regiao}
                  onChange={e => this.setState({ endereco: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Formação</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.formacao}
                  onChange={e => this.setState({ formacao: e.target.value })} /><br />

              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Disponibilidade</label><br />
                <br />

                <input className="inputFields" type="text" value={this.state.disponibilidade}
                  onChange={e => this.setState({ disponibilidade: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
                       <br />
            <br />


            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Consultar"
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

export default ConsultResourceForm;
