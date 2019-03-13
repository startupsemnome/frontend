import React, { Component } from "react";

class ResourceDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: "José da Silva Pinto",
      telefone: "Telefone: (11)2242-7589",
      celular: "Celular: (11)94207-9857",
      endereco: "Endereço :Rua Tenente Lamoro 023242320 São Paulo São Paulo Brasil",
      objetivo: "T.I, preferencialmente em desenvolvimento de sistemas.",
      resprofissional: "Sou profissional nas áreas comercial, administrativa e design passando por empresas como: Grupo Pão de Açúcar, Lojas Americanas/Itaú, Cosntrudecor (DICICO), Saraiva e Siciliano e Paggo Administradora de Crédito (OI)",     
      areainteresse1: "Informática/T.I. no nível Auxiliar/Operacional",
      areainteresse2: "Informática/T.I. no nível Junior/Trainee"     
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
          <label className="labelFields">Nome do Usuario:</label><br/>
          <input className="inputFields" type="text" value={this.state.nomeUsuario} onChange={e => this.setState({ nomeUsuario: e.target.value })} />
          <br/><br/>
          <img src="https://i.ytimg.com/vi/bG1w8JkcPUo/hqdefault.jpg" width ="200" height="200"></img>
          <br/>  
          <br/>      
            <div>
                
                    <label className="labelFields">Dados Pessoais :</label><br/>
                    <br/>                    
                     <input className="inputFields" type="text" value={this.state.telefone} onChange={e => this.setState({ telefone: e.target.value })} />
                     <br/> 
                     <input className="inputFields" type="text" value={this.state.celular} onChange={e => this.setState({ celular: e.target.value })} />
                     <br/> 
                     <input className="inputFields" type="text" value={this.state.endereco} onChange={e => this.setState({ endereco: e.target.value })} />                                   
           </div>
            <br/>
            <br/>
            <div>
                
                    <label className="labelFields">Objetivos: </label><br/>
                    <br/>              
                    <input className="inputFields" type="text" value={this.state.objetivo} onChange={e => this.setState({ objetivo: e.target.value })} />
                                   
           </div>
           <br/>
           <br/>
           <div>
                
                <label className="labelFields">Resumo Profissional: </label><br/>  
                <br/>
                <textarea className="A col-md-10" id="nprob" name="Editar Problema" placeholder="Sou profissional nas áreas comercial, administrativa e design passando por empresas como: Grupo Pão de Açúcar, Lojas Americanas/Itaú, Cosntrudecor (DICICO), Saraiva e Siciliano e Paggo Administradora de Crédito (OI)" onChange={e => this.setState({resprofissional: e.target.value })}
              value={this.state.resprofissional}
            />              

                
           </div>
           <br/><br/>
           <div>
                
                  <label className="labelFields">Areas de Interesse: </label>
                  <br/> 
                  <input className="inputFields" type="text" value={this.state.areainteresse1} onChange={e => this.setState({ areainteresse1: e.target.value })} />
                  <br/>
                  <input className="inputFields" type="text" value={this.state.areainteresse2} onChange={e => this.setState({ areainteresse2: e.target.value })} />                

                
           </div>

           
            <br/>
            <br/>
            
      
             <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Contatar"
              className="btn btn-success"
            />
            <input
              type="button"
              onClick={e => this.handleFormSubmit(e)}
              value="voltar"
              className="btn btn-warning"
            />

          </form>
        </div>
      </div>
    );
  }
}

export default ResourceDetailsForm;
