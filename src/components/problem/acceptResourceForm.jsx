import React, { Component } from "react";
import {
  Row,
  Col,
  ModalHeader,
  FormGroup,
  Form,
  Label,
  Input,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
  Table
} from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import ConsultResourceForm from "../resource/consultResourceForm";

class AcceptResourceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.acceptOpen,
      users: [],
      name: "Leonardo",
      error: ""
    };
    // this.hasErros = this.hasErros.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    if (!this.state.modal) {
      this.loadResourcesOk();
    }
  }

  componentDidUpdate(props) {}

  loadResourcesOk() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "resource-aceept/" + this.props.problem_id)
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ users: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  render() {
    return (
      <div>
        <Button
          className="join-btn-no-transform mr-1 login"
          style={{ minwidth: "55%", margin: "0px", maxwidth: "55%" }}
          onClick={this.toggle}
        >
          Recursos Aceitos
        </Button>

        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Recursos Aceitos</ModalHeader>
          <ModalBody>
            <Table dark>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Formação</th>
                  <th>Habilidades</th>
                  <th>Area de Interesse</th>
                  <th>Email</th>
                  <th>Contato</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => {
                  return (
                    <tr>
                      <td>{user.resource.nome}</td>
                      <td>{user.resource.formacao}</td>
                      <td>{user.resource.habilidades}</td>
                      <td>{user.resource.area_interesse}</td>
                      <td>{user.resource.email}</td>
                      <td>{user.resource.celular}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <h1 style={{ color: "black" }}>
              Estes recursos aceitaram o projeto!
            </h1>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AcceptResourceForm;
