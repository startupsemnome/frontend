import React, { Component } from "react";

//Alterar o nome do class.
export default class RegisterResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>RegisterResource</h1>
        <form>
            <input type="text" name="fname" placeholder="Nome" />Nome<br/>
            <input type="text" name="lname" placeholder="Sobrenome"/>Sobrenome<br/>
            <input type="text" name="lname" placeholder="Endereco"/>Endereço<br/>
            <input type="text" name="lname" placeholder="E-mail"/>E-mail<br/>
            <input type="text" name="lname" placeholder=""/><br/>
            <input type="submit" value="Submit"/>
          </form> 
        
      </div>
    );
  }
}