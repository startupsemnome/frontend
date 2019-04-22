import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
// import { Table } from 'reactstrap';
// import ModalLearnMore from "./modalLearnMore";
class Selecionado extends Component {
  //class CompanyForm extends Component 
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props);
  }

  render() {
    return (
      <div className="escolhido row">
        <h1>Seja Bem Vindo</h1>
        <h3>Você foi escolhido para participar do projeto <b>colocar o nome do projeto aqui de form dinamica</b></h3>
        <p>Clique no botão para ver seu projeto :D</p>
        <Button class="success">
          Vê projeto
        </Button>
      </div>
    );
  }
}
export default Selecionado;
