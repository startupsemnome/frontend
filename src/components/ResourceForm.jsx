import React, { Component } from "react";
import "./../bootstrap.min.css";
class ResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      end: "",
      tel: "",
      cel: "",
      cid: "",
      est: "",
      desc: "",
      areai: "",
      message1:""
      
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
            <div>  
                <h1>Cadastro de Recursos</h1>
                <br/>
            </div>
            <form action="/action_page.php">
            <label className="A col-md-2">Nome</label>
            <input
              className="A col-md-10"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Digite o seu nome"
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
              required
            />
            <label className="A col-md-2">Sobrenome</label>
            <input
              className="A col-md-10"
              type="text"
              max="11"
              id="lname"
              name="lastname"
              placeholder="Digite o sobrenome"
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
              required
            />

            <label className="A col-md-2">Endereco</label>
            <input
              className="A col-md-10"
              type="text"
              id="end"
              name="endereco"
              placeholder="Ex: Rua dos Pivetes , 53"
              value={this.state.rua}
              onChange={e => this.setState({ rua: e.target.value })}
              required
            />
            
            <label className="A col-md-2">Telefone</label>
            <input
              className="A col-md-10"
              type=""
              id="tel"
              name="telefone"
              placeholder="EX :(99)9999-9999"
              value={this.state.num}
              onChange={e => this.setState({ num: e.target.value })}
              required
            />

            <label className="A col-md-2">Celular</label>
            <input
              className="A col-md-10"
              type="text"
              id="cel"
              name="bairro"
              placeholder="EX :(99)99999-9999"
              value={this.state.bair}
              onChange={e => this.setState({ bair: e.target.value })}
              required
            />

            <label className="A col-md-2">Cidade</label>
            <input
              className="A col-md-10"
              type="text"
              id="cid"
              name="cidade"
              placeholder="EX: São Paulo"
              value={this.state.email}
              onChange={e => this.setState({ est: e.target.value })}
              required
            />

            <label className="A col-md-2">Estado</label>
            <input
              className="A col-md-10"
              type="text"
              id="est"
              name="estado"
              placeholder="EX: SP"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            
            <label className="A col-md-2">Descrição</label>
            <textarea
              className="A col-md-10"
              id="desc"
              name="descricao"
              placeholder="Informe suas qualidades, habilidades e experiências"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />
            <label className="A col-md-2">Áreas de Interesse</label>
            <textarea
              className="A col-md-10"
              id="areai"
              name="areadeinteresse"
              placeholder="Informe as áreas de interesse na qual você deseja atuar"
              onChange={e => this.setState({ message1: e.target.value })}
              value={this.state.message1}
            />
            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Confirmar Cadastro"
              class="btn btn-success"
            />
             <input
              type="button"
              onClick={e => this.handleFormSubmit(e)}
              value="Cancelar Cadastro"
              class="btn btn-warning"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ResourceForm;