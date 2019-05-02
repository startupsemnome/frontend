import React, { Component } from "react";
import { Row, Col, ModalHeader, FormGroup, Form, Label, Input, ModalBody, ModalFooter, Modal, Button, Table } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import ConsultResourceForm from "../resource/consultResourceForm";




class ProblemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empresa: "",
      users: [],
      solicitante: "",
      email: "",
      telefone: "",
      descricao: "",
      modal: false,
      error: "",
      sweetCreate: false
    };
    this.hasErros = this.hasErros.bind(this);
    this.createProblem = this.createProblem.bind(this);
    this.callResource = this.callResource.bind(this);
    this.findResources = this.findResources.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  listSolutions() {
    console.log(this.props);
  }
  loadResources() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "resource")
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

  createProblem(method, id) {

    if (!this.hasErros()) {

      if (method == "create") {
        axios
          .post(env.API + "problem", {
            empresa: this.state.empresa,
            solicitante: this.state.solicitante,
            email: this.state.email,
            telefone: this.state.telefone,
            titulo: this.state.titulo,
            descricao: this.state.descricao
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-problema";
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (method = "update") {

        axios
          .put(env.API + "problem/" + id, {
            empresa: this.state.empresa,
            solicitante: this.state.solicitante,
            email: this.state.email,
            telefone: this.state.telefone,
            descricao: this.state.descricao
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-problema";
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }
  }

  componentDidMount() {
    this.loadResources();
    if (this.props.id) {
      const id = this.props.id;
      axios
        .get(env.API + "problem/" + id)
        .then((response) => {
          console.log(response);
          const data = response.data;
          this.setState({ empresa: data.empresa, solicitante: data.solicitante, email: data.email, telefone: data.telefone, descricao: data.descricao });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  callResource() {
    this.setState({ modal: !this.state.modal })
    alert("Será comunicado os recursos");
  }

  findResources() {
    this.setState({ modal: !this.state.modal })
  }

  hasErros() {
    if (this.state.empresa === "") {
      this.setState({ error: "preencha o campo empresa" });
      return true;
    } else if (this.state.solicitante === "") {
      this.setState({ error: "preencha o campo solicitante" });
      return true;
    } else if (this.state.email === "") {
      this.setState({ error: "preencha o campo email" });
      return true;
    } else if (this.state.telefone === "") {
      this.setState({ error: "preencha o campo telefone" });
      return true;
    } else if (this.state.titulo === "") {
      this.setState({ error: "preencha o campo titulo" });
      return true;
    } else if (this.state.descricao === "") {
      this.setState({ error: "preencha o campo problema" });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="loginUser col-md-12">
        <form className="signupForm form-inline">
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Empresa:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o nome da empresa do solicitante"
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Solicitante:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o nome do solicitante"
              value={this.state.solicitante}
              onChange={e => this.setState({ solicitante: e.target.value })}
              required
            />
          </div>
          <div className="col-md-8">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Email:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o email do solicitante"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div className="col-md-4">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Telefone:
            </label>
            <input
              className="inputFields col-md-12"
              type="number"
              placeholder="Digite o telefone do solicitante"
              value={this.state.telefone}
              onChange={e => this.setState({ telefone: e.target.value })}
              required
            />
          </div>


          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Titulo do Problema:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite em poucas palavras o titulo do seu problema"
              value={this.state.titulo}
              onChange={e => this.setState({ titulo: e.target.value })}
              required
            />
          </div>


          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Descrição do Problema:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Descreva o problema"
              value={this.state.descricao}
              onChange={e => this.setState({ descricao: e.target.value })}
              required
            />
          </div>
          <label className="labelFields col-md-12" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Col className="col-md-12 d-flex justify-content-center">
            <button
              type="button"
              onClick={() => {
                !this.props.id
                  ? this.createProblem("create")
                  : this.createProblem("update", this.props.id)
              }}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              {!this.props.id ? "Criar" : "Editar"} Problema
              </button>
            <div />
            <button
              type="button"
              onClick={() => { this.findResources() }}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              Possiveis Soluções
              </button>
          </Col>
        </form>
        <SweetAlert
          success
          show={this.state.sweetCreate}
          title="Atenção"
          onConfirm={() => this.setState({ sweetCreate: false })}
        >
          {`Cadastrado ${this.state.problem} com sucesso!`}
        </SweetAlert>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.findResources} style={{ width: "100%" }}>
          <ModalHeader toggle={this.findResources}>Selecione os Recursos Para Esse Problema</ModalHeader>
          <ModalBody>
            <Form inline={true}>
              <FormGroup>
                <Label for="exampleEmail">Nome <br />
                  <Input type="email" name="email" id="exampleEmail" placeholder="" /></Label>
              </FormGroup>
              <FormGroup className="ml-2">
                <Label for="exampleSelect">Formacao <br />
                  <Input type="select" name="select" id="exampleSelect">
                    <option>SISTEMAS DA INFORMACAO</option>
                  </Input></Label>
              </FormGroup>
              <FormGroup className="ml-2">
                <Label for="exampleSelect">Experiencia</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1 ANOS</option>
                </Input>
              </FormGroup>
            </Form>
            <br />
            <br />
            <Table dark>
              <thead>
                <tr>
                  <th>Selecionar</th>
                  <th>Nome</th>
                  <th>Formacao</th>
                  <th>Area de Interece</th>
                  <th>Cidade</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(resource => {
                  return (
                    <tr>
                      <td><FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          marcar
                        </Label>
                      </FormGroup>
                      </td>
                      <td>{resource.fname}</td>
                      <td>{resource.formacao}</td>
                      <td>{resource.areai}</td>
                      <td>{resource.cid}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.callResource}>Comunicar Recursos</Button>{' '}
            <Button color="secondary" onClick={this.findResources}>Voltar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProblemForm;
