import React, { Component } from "react";

class ConsultResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          <form action="/action_page.php">
          <h1>Nome  do Usuario: José da Silva Pinto</h1>
          <br/><br/>       

          </form>
        </div>
      </div>
    );
  }
}

export default ConsultResourceForm;
