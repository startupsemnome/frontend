import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import env from "./../../consts";
import ConsultCompanyForm from "./consultCompanyForm";

class ViewCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      razaoSocial: "",
      cnpj: "",
      users: [],
      companyEdit: [null, false]
    };
  }

  goToList = () => {
    this.props.history.push("/consultar-empresa");
  };

  loadCompanys() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "company")
      .then(response => {
        // handle success
        const data = response.data[0];
        this.setState({ users: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }
  componentDidMount() {
    this.loadCompanys();
    console.log(this.props);
  }

  render() {
    return (
      <div className="loginUser col-md-12">
        <form className="signupForm form-inline">
          {!this.props.company.users == undefined ? (
            <b>{this.props.company.users.cnpj}</b>
          ) : null}

          <div className="col-md-8">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Razão Social:{" "}
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.razaoSocial}
              onChange={e => this.setState({ razaoSocial: e.target.value })}
              disabled="disabled"
            />
          </div>
          <div className="col-md-4">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              CNPJ :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.cnpj}
              disabled="disabled"
            />
          </div>
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome Fantasia:{" "}
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.nomeFantasia}
              disabled="disabled"
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              CEP :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.cep}
              disabled="disabled"
            />
          </div>
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Rua :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.rua}
              disabled="disabled"
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Numero :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.numero}
              disabled="disabled"
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Bairro :
            </label>
            <input
              className=" inputFields col-md-12"
              value={this.props.company.bairro}
              disabled="disabled"
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Cidade :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.cidade}
              disabled="disabled"
            />
          </div>
          <div className="col-md-2">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              UF :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.uf}
              disabled="disabled"
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Pais :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.pais}
              disabled="disabled"
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.nomeRepresentante}
              disabled="disabled"
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Telefone do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.telefoneRepresentante}
              disabled="disabled"
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Celular do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.celularRepresentante}
              disabled="disabled"
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              E-mail do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.emailRepresentante}
              disabled="disabled"
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Departmento:
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.departamento}
              disabled="disabled"
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Segmento da Empresa :
            </label>
            <input
              className="inputFields col-md-12"
              value={this.props.company.segmentoEmpresa}
            />
          </div>
          <div className="col-md-12">
            <button
              onClick={() => this.goToList()}
              className="join-btn-no-transform mr-1"
              style={{
                width: "45%",
                marginBottom: "5px",
                marginTop: "5px",
                marginLeft: "27%"
              }}
              type="button"
            >
              Listar Empresas
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ViewCompanyForm;
