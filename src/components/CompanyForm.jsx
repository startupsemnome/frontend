import React, { Component } from 'react';
class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      tele:'',
      est:'',
      bair:'',
      num:'',
      rua:'',
    }
  }
  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return (
    <div className="App">
      <div>
        <form action="/action_page.php">
          <label className="A col-md-2">Nome da Organização</label>
          <input className="A col-md-10" type="text" id="fname" name="firstname" placeholder="Nome da empresa" 
            value={this.state.fname}
            onChange={e => this.setState({fname: e.target.value})}
            required />
          <label className="A col-md-2">CNPJ</label>
          <input className="A col-md-10" type="text" max="11" id="lname" name="lastname" placeholder="CNPJ" 
            value={this.state.lname}
            onChange={e => this.setState({lname: e.target.value})} 
            required />
  
            <label className="A col-md-2">Rua</label>
            <input className="A col-md-10" type="text" id="rua" name="rua" placeholder="A rua da empresa" 
              value={this.state.rua}
              onChange={e => this.setState({rua: e.target.value})} 
              required />
            
            <label className="A col-md-2">Numero</label>
            <input className="A col-md-10" type="" id="num" name="numero" placeholder="O numero da empresa" 
              value={this.state.num}
              onChange={e => this.setState({num: e.target.value})} 
              required />
            
            <label className="A col-md-2">Bairro</label>
            <input className="A col-md-10" type="text" id="bair" name="bairro" placeholder="O bairro da empresa" 
              value={this.state.bair}
              onChange={e => this.setState({bair: e.target.value})} 
              required />
            
            <label className="A col-md-2">Estado</label>
            <input className="A col-md-10" type="text" id="est" name="estado" placeholder="Estado da empresa" 
            value={this.state.email}
            onChange={e => this.setState({est: e.target.value})} 
            required />

          <label className="A col-md-2">Email</label>
          <input className="A col-md-10" type="email" id="email" name="email" placeholder="Email da empresa" 
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})} 
            required />
          <label className="A col-md-2">Telefone da empresa</label>
          <input className="A col-md-10" type="tel" id="tele" name="telefone" placeholder="Telefone da empresa" 
            value={this.state.tele}
            onChange={e => this.setState({tele: e.target.value})} 
            required />
          <label className="A col-md-2">Assunto</label>
          <textarea className="A col-md-10" id="message" name="message" placeholder="Descreva pouco sobre a necessidade da sua empresa"
            onChange={e => this.setState({message: e.target.value})}
            value={this.state.message}
          ></textarea>
          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Enviar"  class="btn btn-success"/>
        </form>
      </div>
    </div>
    );
  }
}

export default CompanyForm;
