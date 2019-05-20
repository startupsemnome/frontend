import React, { Component } from "react";
import { Row, Col, ModalHeader, FormGroup, Form, Label, Input, ModalBody, ModalFooter, Modal, Button, Table } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";


class RegisterResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      formacao: "",
      endereco: "",
      telefone: "",
      celular: "",
      cidade: "",
      estado: "",
      habilidades: "",
      area_interesse: "",
      message1: "",

      sweetCreate: false
    };
    console.log(this.props);
    this.hasErros = this.hasErros.bind(this);
    this.createResource = this.createResource.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  createResource(method, id) {

    if (!this.hasErros()) {

      if (method == "create") {
        axios
          .post(env.API + "resource", {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email,
            endereco: this.state.endereco,
            telefone: this.state.telefone,
            celular: this.state.celular,
            formacao: this.state.formacao,
            cidade: this.state.cidade,
            estado: this.state.estado,
            habilidades: this.state.habilidades,
            area_interesse: this.state.area_interesse,
            message1: this.state.message1

          })
          .then(function (response) {

            console.log(response);
            this.props.history.push("/cadastro-recurso");
            this.props.handleEdit();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (method = "update") {
        axios
          .put(env.API + "resource/" + id, {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email,
            endereco: this.state.endereco,
            telefone: this.state.telefone,
            celular: this.state.celular,
            formacao: this.state.formacao,
            cidade: this.state.cidade,
            estado: this.state.estado,
            habilidades: this.state.habilidades,
            area_interesse: this.state.area_interesse,
            message1: this.state.message1

          })
          .then(function (response) {
            console.log(response);
            this.props.history.push("/consultar-recurso");
            this.props.handleEdit();
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }
  }
  componentDidMount() {
    if (this.props.id) {
      const id = this.props.id;
      axios
        .get(env.API + "resource/" + id)
        .then((response) => {
          console.log(response);
          const data = response.data;
          this.setState({ nome: data.nome, sobrenome: data.sobrenome, email: data.email, endereco: data.endereco, telefone: data.telefone, celular: data.celular, formacao: data.formacao, cidade: data.cidade, estado: data.estado, habilidades: data.habilidades, area_interesse: data.area_interesse, message1: data.message1 });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  goToConsulta() {
    this.props.history.push("consultar-recurso");
    this.props.handleEdit();
  }

  hasErros() {
    if (this.state.nome === "") {
      this.setState({ error: "preencha o campo nome" });
      return true;
    } else if (this.state.sobrenome === "") {
      this.setState({ error: "preencha o campo sobrenome" });
      return true;
    } else if (this.state.email === "") {
      this.setState({ error: "preencha o campo email" });
      return true;
    } else if (this.state.formacao === "") {
      this.setState({ error: "preencha o campo formacao" });
      return true;
    } else if (this.state.endereco === "") {
      this.setState({ error: "preencha o campo endereço" });
      return true;
    } else if (this.state.telefone === "") {
      this.setState({ error: "preencha o campo telefone" });
      return true;
    } else if (this.state.celular === "") {
      this.setState({ error: "preencha o campo celular" });
      return true;
    } else if (this.state.cidade === "") {
      this.setState({ error: "preencha o campo cidade" });
      return true;
    } else if (this.state.estado === "") {
      this.setState({ error: "preencha o campo estado" });
      return true;
    } else if (this.state.habilidades === "") {
      this.setState({ error: "preencha o campo habilidades e qualificações" });
      return true;
    } else if (this.state.area_interesse === "") {
      this.setState({ error: "preencha o campo area de interesse" });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="loginUser col-md-12">
        <form className="signupForm form-inline">
          <div className="col-md-4">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome:{" "}
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o seu nome"
              value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })}
              required
            />
          </div>
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Sobrenome:{""}
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o sobrenome"
              value={this.state.sobrenome}
              onChange={e => this.setState({ sobrenome: e.target.value })}
              required
            />
          </div>
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Email:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o e-mail"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Telefone:
            </label>
            <input
              className="inputFields col-md-12"
              type="number"
              placeholder="Digite o telefone"
              value={this.state.telefone}
              onChange={e => this.setState({ telefone: e.target.value })}
              required
            />
          </div>
          <div className="col-md-2">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Celular:
            </label>
            <input
              className="inputFields col-md-12"
              type="tel"
              placeholder="Digite o celular"
              value={this.state.celular}
              onChange={e => this.setState({ celular: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Endereço:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o endereço"
              value={this.state.endereco}
              onChange={e => this.setState({ endereco: e.target.value })}
              required
            />
          </div>
          <div className="col-md-4">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Cidade:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite a cidade do responsável"
              value={this.state.cidade}
              onChange={e => this.setState({ cidade: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Estado:
          </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o estado"
              value={this.state.estado}
              onChange={e => this.setState({ estado: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Formacao Superior:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite as sua formacao superior"
              value={this.state.formacao}
              onChange={e => this.setState({ formacao: e.target.value })}
              required
            />
          </div>
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Habilidades e Qualificações:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite as suas habilidades e qualificações"
              value={this.state.habilidades}
              onChange={e => this.setState({ habilidades: e.target.value })}
              required
            />
          </div>
          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Area de Interesse:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite as suas áreas de interesse"
              value={this.state.area_interesse}
              onChange={e => this.setState({ area_interesse: e.target.value })}
              required
            />
          </div>

          <label className="labelFields col-md-12" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Col className="col-md-12 d-flex justify-content-center">
            {this.props.id ? (
              <button
                type="button"
                onClick={() => this.goToConsulta("/consultar-recurso")}
                className="join-btn-no-transform mr-1 login"
                style={{ width: "25%", margin: "0px" }}
              >
                Consultar Recurso
              </button>
            ) : null}
            <div />
            <button
              type="button"
              onClick={() => { !this.props.id ? this.createResource("create") : this.createResource("update", this.props.id) }}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              Cadastrar Recurso
            </button>
          </Col>
        </form>
        <SweetAlert
          success
          show={this.state.sweetCreate}
          title="Atenção"
          onConfirm={() => this.setState({ sweetCreate: false })}
        >
          {`Cadastrado ${this.state.nome} com sucesso!`}
        </SweetAlert>
      </div>
    );
  }
}
export default RegisterResourceForm;
