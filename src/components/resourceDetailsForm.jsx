import React, { Component } from "react";

class ResourceDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nrec: "",
      descp: "",
      end: "",
      tel: "",
      cel: "",
      cid: "",
      est: "",
      desc: "",
      areai: "",
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
          <form action="/action_page.php">
          <h1>Nome  do Usuario: José da Silva Pinto</h1>
          <br/><br/>
          <img src="https://i.ytimg.com/vi/bG1w8JkcPUo/hqdefault.jpg" width ="200" height="200"></img>
          <br/>  
          <br/>      
            <div>
                <ul>
                    <h1>Dados pessoais :</h1> 
                    <br/>                    
                    <li> Telefone: (11)2242-7589</li>
                    <li> Celular :(11)94207-9857</li>
                    <li> Endereco: Rua Tenente Lamoro 023242320 São Paulo São Paulo Brasil</li>
               </ul>
           </div>
            <br/><br/>
            <div>
                <ul>
                    <h1>Objetivos:</h1>  
                    <br/>              
                    <li>T.I, preferencialmente em desenvolvimento de sistemas.</li>
                    
               </ul>
           </div>
           <br/><br/>
           <div>
                <ul>
                    <h1>Resumo Profissional:</h1>  
                    <br/>                  

                    <li>Sou profissional nas áreas comercial, administrativa e design passando por empresas como: Grupo Pão de Açúcar, Lojas Americanas/Itaú, Cosntrudecor (DICICO), Saraiva e Siciliano e Paggo Administradora de Crédito (OI). 
                        Atualmente cursando Análise e Desenvolvimento de Sistemas</li>
                </ul>
           </div>
           <br/><br/>
           <div>
                <ul>
                    <h1>Áreas de Interesse : </h1>  
                    <br/>                  
                    <li> Informática/T.I. no nível Auxiliar/Operacional</li>
                    <li> Informática/T.I. no nível Junior/Trainee</li>

                </ul>
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
              value="Cancelar Cadastro"
              className="btn btn-warning"
            />

          </form>
        </div>
      </div>
    );
  }
}

export default ResourceDetailsForm;
