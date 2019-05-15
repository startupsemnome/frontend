import React, { Component } from "react";
import { Row, Col, ModalHeader, FormGroup, Form, Label, Input, ModalBody, ModalFooter, Modal, Button, Table } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import ConsultResourceForm from "../resource/consultResourceForm";

import { MDBInput, MDBFormInline } from 'mdbreact';
import ReactResponsiveSelect from 'react-responsive-select';
import ReactDOM from 'react-dom';

class ProblemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empresa: "",
      users: [],
      userTable: "",
      solicitante: "",
      email: "",
      telefone: "",
      descricao: "",
      modal: false,
      error: "",
      sweetCreate: false,
      // alteração
      NamesCompany: 0
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

  loadNamesCompany() {
    // Carregando os nomes das empresas
    axios
      .get(env.API + "company")
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

  componentDidMount() {
    this.loadResources();
    this.loadNamesCompany();
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
            <Form inline={true}>
              <FormGroup className="">
                <Label className="">
                  <Input className="inputFields col-md-12" type="select" name="select" id="exampleSelect">
                    {this.state.users.map(company => {
                      return (
                        <option>{company.empresa}</option>
                      );
                    })}
                  </Input>
                </Label>
              </FormGroup>
            </Form>
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
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Categoria:
            </label>
            <Form inline={true}>
              <FormGroup className="" >
                <Label className="">
                  <Input
                    select className="inputFields col-md-12"
                    type="select"
                    select="multiple"
                    name="category"
                    id="optioncategory"
                  >
                    <option value="1">Administração</option>
                    <option valeu="2">Comércio Exterior</option>
                    <option value="3">Tecnologia</option>
                    <option value="4">Arquitetura</option>
                    <option value="5">Medicina</option>
                    <option value="6">Contábeis</option>
                    <option value="7">Economia</option>
                    <option value="8">Cinema e Audiovisual</option>
                    <option value="9">Radio e TV</option>
                    <option value="10">Design</option>
                    <option value="11">Direito</option>
                    <option value="12">Educação Física</option>
                    <option value="13">Enfermagem</option>
                    <option value="14">Engenharia Civil</option>
                    <option value="15">Engenharia de Automação e Controle</option>
                    <option value="16">Engenharia de Produção</option>
                    <option value="17">Engenharia Elétrica</option>
                    <option value="18">Engenharia Eletrônica</option>
                    <option value="19">Engenharia Mecânica</option>
                    <option value="20">Engenharia Química</option>
                    <option value="21">Psicologia</option>
                    <option value="22">Farmácia</option>
                    <option value="23">Fisioterapia</option>
                    <option value="24">Comercial</option>
                    <option value="25">Qualidade</option>
                    <option value="26">Logística</option>
                    <option value="27">Marketing</option>
                    <option value="28">Medicina Veterinária</option>
                    <option value="29">Nutrição</option>
                    <option value="30">Odontologia</option>
                    <option value="31">Psicologia</option>
                    <option value="32">Relações Públicas</option>
                    <option value="33">Publicidade e Propaganda</option>
                    <option value="34">Turismo</option>
                    <option value="35">Outros</option>
                  </Input></Label>
              </FormGroup>
            </Form>
          </div>
          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Descrição do Problema:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Descreva o problema"
              value={this.state.descricao}
              onChange={e => this.setState({ descricao: e.target.value })}
              required
            />
          </div>
          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Informe a atuação do Problema:
            </label>
            <br></br>
          </div>
          <div className="col-md-12">
            <div className="">
              <table className="table table">
                <thead>
                  <tr>
                    <th scope="col" style={{ display: "none" }}>ID</th>
                    <th scope="col">Período</th>
                    <th scope="col">Segunda-feira</th>
                    <th scope="col">Terça-feira</th>
                    <th scope="col">Quarta-feira</th>
                    <th scope="col">Quinta-feira</th>
                    <th scope="col">Sexta-feira</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manhã</td>
                    <td>
                      <input
                        name="segunda"
                        type="checkbox"
                        id="m-segunda"
                      />
                    </td>
                    <td>
                      <input
                        name="terça"
                        type="checkbox"
                        id="m-terca"
                      />
                    </td>
                    <td>
                      <input
                        name="quarta"
                        type="checkbox"
                        id="m-quarta"
                      />
                    </td>
                    <td>
                      <input
                        name="quinta"
                        type="checkbox"
                        id="m-quinta"
                      />
                    </td>
                    <td>
                      <input
                        name="sexta"
                        type="checkbox"
                        id="m-sexta"
                      />
                    </td>
                  </tr>
                  {/* LINHA - TARDE */}
                  <tr>
                    <td>Tarde</td>
                    <td>
                      <input
                        name="segunda"
                        type="checkbox"
                        id="t-segunda"
                      />
                    </td>
                    <td>
                      <input
                        name="terca"
                        type="checkbox"
                        id="t-terca"
                      />
                    </td>
                    <td>
                      <input
                        name="quarta"
                        type="checkbox"
                        id="t-quarta"
                      />
                    </td>
                    <td>
                      <input
                        name="quinta"
                        type="checkbox"
                        id="t-quinta"
                      />
                    </td>
                    <td>
                      <input
                        name="sexta"
                        type="checkbox"
                        id="t-sexta"
                      />
                    </td>
                    {/* LINHA - NOITE */}
                  </tr>
                  <tr>
                    <td>Noite</td>
                    <td>
                      <input
                        name="segunda"
                        type="checkbox"
                        id="n-segunda"
                      />
                    </td>
                    <td>
                      <input
                        name="terca"
                        type="checkbox"
                        id="n-terca"
                      />
                    </td>
                    <td>
                      <input
                        name="quarta"
                        type="checkbox"
                        id="n-quarta"
                      />
                    </td>
                    <td>
                      <input
                        name="quinta"
                        type="checkbox"
                        id="n-quinta"
                      />
                    </td>
                    <td>
                      <input
                        name="sexta"
                        type="checkbox"
                        id="n-sexta"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
