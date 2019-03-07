import React, { Component } from "react";
import "./../../bootstrap.min.css";

class ContentRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "Star",
      lname: "Sem ",
      email: "aedscw@com",
      message: "ops",
      tele: "11-1111-11111",
      est: "sp",
      bair: "sw",
      num: "12",
      rua: "sasaxasa"
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <h1 className="companyRe"> Company Registration </h1>
        <form action="/action_page.php">
          <label className="acr col-md-2">Nome da Organização</label>
          <input
            className="acr nomee col-md-8"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Nome da empresa"
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
            required
          />
          <label className="acr col-md-2">CNPJ</label>
          <input
            className="acr cnpjcr col-md-8"
            type="text"
            max="11"
            id="lname"
            name="lastname"
            placeholder="CNPJ"
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
            required
          />

          <label className="acr col-md-2">Rua</label>
          <input
            className="acr ruacr col-md-8"
            type="text"
            id="rua"
            name="rua"
            placeholder="A rua da empresa"
            value={this.state.rua}
            onChange={e => this.setState({ rua: e.target.value })}
            required
          />

          <label className="acr col-md-2">Numero</label>
          <input
            className="acr numce col-md-8"
            type="number"
            id="num"
            name="numero"
            placeholder="O numero da empresa"
            value={this.state.num}
            onChange={e => this.setState({ num: e.target.value })}
            required
          />

          <label className="acr col-md-2">Bairro</label>
          <input
            className="acr bairoce col-md-8"
            type="text"
            id="bair"
            name="bairro"
            placeholder="O bairro da empresa"
            value={this.state.bair}
            onChange={e => this.setState({ bair: e.target.value })}
            required
          />

          <label className="acr col-md-2">Estado</label>
          <input
            className="acr estce col-md-8"
            type="text"
            id="est"
            name="estado"
            placeholder="Estado da empresa"
            value={this.state.est}
            onChange={e => this.setState({ est: e.target.value })}
            required
          />

          <label className="acr col-md-2">Email</label>
          <input
            className="acr emace col-md-8"
            type="email"
            id="email"
            name="email"
            placeholder="Email da empresa"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />
          <label className="acr col-md-2">Telefone da empresa</label>
          <input
            className="acr telce col-md-8"
            type="tel"
            id="tele"
            name="telefone"
            placeholder="Telefone da empresa"
            value={this.state.tele}
            onChange={e => this.setState({ tele: e.target.value })}
            required
          />
          <label className="acr astce col-md-12">Assunto</label>
          <textarea
            className="acr asce col-md-8"
            id="message"
            name="message"
            placeholder="Descreva pouco sobre a necessidade da sua empresa"
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
          />
        </form>
      </div>
    );
  }
}
export default ContentRegister; 
