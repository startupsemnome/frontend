import React, { Component } from "react";
import { Row, Col, ModalHeader, FormGroup, Form, Label, Input, ModalBody, ModalFooter, Modal, Button, Table } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import ConsultResourceForm from "../resource/consultResourceForm";

class AcceptResourceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      users:[],
      name:"Leonardo",
      error:""
    };
    // this.hasErros = this.hasErros.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  render() {
    return (        
         <div>
        <Button             
            className="join-btn-no-transform mr-1 login" 
            style={{ minwidth: "55%", margin: "0px", maxwidth:"55%" }} 
            onClick={this.toggle}>
              Recursos Aceitos  
        </Button>
            
        
        <Modal size ="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Recursos Aceitos</ModalHeader>
          <ModalBody>
          <Form inline={true}>
              {/* <FormGroup>
                <Label for="exampleEmail">Nome <br />
                  <Input type="email" name="email" id="exampleEmail" placeholder="" /></Label>
              </FormGroup> */}
              {/* <FormGroup className="ml-2">
                <Label for="exampleSelect">Formação <br />
                  <Input type="select" name="select" id="exampleSelect">
                    <option>SISTEMAS DA INFORMACAO</option>
                    <option>CIÊNCIA DA COMPUTAÇÃO</option>
                  </Input></Label> */}
              {/* </FormGroup> */}
              {<FormGroup className="ml-2">
                <Label for="exampleSelect">Habilidades</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Desenvolvimento de Sistemas WEB</option>
                  <option>Gerenciamento de Projetos</option>
                  <option>Infraestrutura e Redes</option>
                  <option>Ramo Hospitalar</option>
                </Input>
              </FormGroup> }
            </Form>
            <br />
            <br />
            <Table dark>
              <thead>
                <tr>                  
                  <th>Nome</th>
                  <th>Formação</th>
                  <th>Habilidades</th>
                  <th>Experiência</th>
                  <th>Contato</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(resource => {
                  return (
                    <tr>                      
                      <td>Wandell</td>
                      <td>{resource.formacao}</td>
                      <td>{resource.hab}</td>
                      <td>{resource.cid}</td>
                      <td>{resource.email}<br />
                      {resource.cel}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button className="join-btn-no-transform mr-1 login" onClick={this.toggle}>Enviar Proposta</Button>{' '}
            <Button className="join-btn-no-transform mr-1 login" onClick={this.toggle}>Voltar</Button>
          </ModalFooter>
        </Modal>      
      </div>
    );
  }
}

export default AcceptResourceForm;
