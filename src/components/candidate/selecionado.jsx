import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import env from "./../../consts";
import { Link } from "react-router-dom";
class Selecionado extends Component {
  //class CompanyForm extends Component 
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props);
  }
  goToProjetos() {
    this.props.history.push("/lista-projetos");
  }

  render() {
    return (
      <div className="escolhido col-md-12">
        <div className="faixa1"></div>
        <h1 className="titulo">Seja Bem Vindo</h1>
        <h3 className="frase">Você foi escolhido para participar do projeto <b>colocar o nome do projeto aqui de form dinamica</b></h3>
        <p className="continuar">Clique no botão para ver seu projeto :D</p>
        <Button className="btn btn-success selecao" onClick={() => this.this.goToProjetos}>
          Vê projeto
        </Button>
        <div className="faixa2"></div>
      </div>
    );
  }
}
export default Selecionado;
