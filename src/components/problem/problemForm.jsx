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
import Disponibilidade from "./../disponibilidade";
import AcceptResourceForm from "../problem/acceptResourceForm";

class ProblemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      resourcesCall: [],
      userTable: "",
      // email: "",
      // telefone: "",
      // solicitante: "",
      empresa: "",
      titulo: "",
      categoria: "",
      descricao: "",
      disponibilidade: null,
      modal: false,
      error: "",
      // alteração
      sweetCreate: false,
      NamesCompany: 0,
      acceptOpen: false
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
  loadNamesCompany() {
    // Carregando os nomes das empresas
    console.log(this.props);
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
  loadResources() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "match-resource-problem/" + this.props.idDetail)
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

  showAceeptForm() {
    this.setState({ acceptOpen: !this.state.acceptOpen });
  }
  handleChangeDisp = disponibilidade => {
    this.setState({ disponibilidade });
  };
  createProblem(method, id) {
    if (!this.hasErros()) {
      if (method == "create") {
        axios
          .post(env.API + "problem", {
            empresa_id: 1,
            empresa: this.state.empresa,
            titulo: this.state.titulo,
            categoria: this.state.categoria,
            descricao: this.state.descricao,
            disponibilidade: this.state.disponibilidade
          })
          .then(function(response) {
            console.log(response);
            this.props.history.push("/consultar-problema");
          })
          .catch(function(error) {
            console.log(error);
          });
      } else if ((method = "update")) {
        axios
          .put(env.API + "problem/" + id, {
            empresa: this.state.empresa,
            titulo: this.state.titulo,
            categoria: this.state.categoria,
            descricao: this.state.descricao,
            disponibilidade: this.state.disponibilidade
          })
          .then(function(response) {
            console.log(response);
            this.props.history.push("/consultar-problema");
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }

  componentDidMount() {
    this.loadNamesCompany();
    this.loadResources();
    if (this.props.id) {
      const id = this.props.id;
      axios
        .get(env.API + "problem/" + this.props.idDetail)
        .then(response => {
          console.log(response);
          const data = response.data;
          this.setState({
            empresa: data.empresa,
            titulo: data.titulo,
            categoria: data.categoria,
            descricao: data.descricao,
            disponibilidade: data.disponibilidade
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  handleCallResourcerSetList(id) {
    const arrayAux = this.state.resourcesCall;
    if (arrayAux.indexOf(id) > -1) {
      const index = arrayAux.indexOf(id);
      arrayAux.splice(index, 1);
    } else {
      arrayAux.push(id);
    }
    this.setState({ resourcesCall: arrayAux });
  }

  callResource() {
    this.setState({ modal: !this.state.modal });
    axios
      .post(env.API + "communicate-resource", {
        id_resource: this.state.resourcesCall,
        id_problem: this.props.idDetail
      })
      .then(response => {
        alert("email enviado para recursos");
      })
      .catch(error => {
        console.log(error + "Erro na API");
      });
  }

  goToPageListProblem() {
    this.props.handleChangeProblemList([null, false]);
  }

  findResources() {
    this.setState({ modal: !this.state.modal });
  }

  hasErros() {
    if (this.state.razaoSocial === "") {
      this.setState({ error: "preencha o campo empresa" });
      return true;
    } else if (this.state.titulo === "") {
      this.setState({ error: "preencha o campo titulo" });
      return true;
    } else if (this.state.categoria === "") {
      this.setState({ error: "preencha o campo categoria" });
      return true;
    } else if (this.state.descricao === "") {
      this.setState({ error: "preencha o campo descricao" });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="loginUser col-md-12">
        <form className="signupForm form-inline">
          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Empresa:
            </label>
            {/* <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o nome da empresa do solicitante"
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })}
              required
            /> */}

            <Input
              className="inputFields col-md-12"
              type="select"
              name="select"
              id="empresabanco"
              style={{ width: "100%" }}
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })}
              required
            >
              {this.state.users.map(company => {
                return <option>{company.razaoSocial}</option>;
              })}
            </Input>
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
              Categoria:
            </label>
            {/* <input
              className="inputFields col-md-12"
              type="number"
              placeholder="Digite o telefone do solicitante"
              value={this.state.telefone}
              onChange={e => this.setState({ telefone: e.target.value })}
              required
            /> */}

            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="category"
              id="optioncategory"
              style={{ width: "100%" }}
              value={this.state.categoria}
              onChange={e => this.setState({ categoria: e.target.value })}
              required
            >
              ><option value="1">Administração</option>
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
            </Input>
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
            <br />
          </div>
          {this.state.disponibilidade ? (
            <Disponibilidade
              disp={this.state.disponibilidade}
              handleChangeDisp={this.handleChangeDisp}
            />
          ) : null}
          <label className="labelFields col-md-12" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Col className="col-md-12 d-flex justify-content-center">
            <button
              type="button"
              onClick={() => {
                !this.props.id
                  ? this.createProblem("create")
                  : this.props.id == -1
                  ? this.goToPageListProblem()
                  : this.createProblem("update", this.props.id);
              }}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              {!this.props.id
                ? "Criar"
                : this.props.id == -1
                ? "Voltar"
                : "Editar"}{" "}
              Problema
            </button>
            {this.props.idDetail ? (
              <AcceptResourceForm
                modal={this.state.acceptOpen}
                problem_id={this.props.idDetail}
                onChange={() => this.showAceeptForm()}
              />
            ) : null}
            <div />
            <button
              type="button"
              onClick={() => {
                this.findResources();
              }}
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
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.findResources}
          style={{ width: "100%" }}
        >
          <ModalHeader toggle={this.findResources}>
            Selecione os recursos para este problema
          </ModalHeader>
          <ModalBody>
            <br />
            <Table dark>
              <thead>
                <tr>
                  <th>Selecionar</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Formação</th>
                  <th>Area de interesse</th>
                  <th>Cidade</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(resource => {
                  return (
                    <tr>
                      <td>
                        <FormGroup check>
                          <Label check>
                            <input
                              type="checkbox"
                              onChange={() =>
                                this.handleCallResourcerSetList(resource.id)
                              }
                            />{" "}
                          </Label>
                        </FormGroup>
                      </td>
                      <td>{resource.nome}</td>
                      <td>{resource.email}</td>
                      <td>{resource.formacao}</td>
                      <td>{resource.categoria}</td>
                      <td>{resource.cidade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button
              className="join-btn-no-transform mr-1 login"
              onClick={this.callResource}
            >
              Comunicar Recursos
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProblemForm;
