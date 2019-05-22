import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import env from "./../../consts";
import ConsultCompanyForm from "./consultCompanyForm";

class ViewCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      companyEdit: [null, false]
    };
    console.log(this.props);
    this.excluirCompany = this.excluirCompany.bind(this);
  }
  excluirCompany(id) {
    //chama a api do banco com o metodo de delete
    axios
      .delete(env.API + "company/" + id)
      .then(response => {
        alert(" Excluido com sucesso! ");
        //apos excluir carrega novamente os usuarios da tabela
        this.loadCompanys();
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na exclusão do item");
      });
  }
  editCompany(id) {
    this.setState({ companyEdit: [id, true] });
  }
  loadCompanys() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "user")
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
    this.loadCompanys();
  }
  // {!this.state.companyEdit[1] ? (
  render() {
    return (
      <div className="loginUser col-md-12">
        {!this.state.companyEdit[1] ? (
          <div>
            <form className="signupForm form-inline">
              {this.state.users.map(company => {
                return (
                  <div>
                    <p style={{ display: "none" }}>{company.id}</p>
                    <div className="col-md-8">
                      <label
                        className="labelFields"
                        style={{ display: "flex", justifyContent: "end" }}
                      >
                        Razão Social:{" "}
                      </label>
                      <input
                        className="inputFields col-md-12"
                        value={company.razaoSocial}
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
                        value={company.cnpj}
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
                        value={company.nomeFantasia}
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
                        value={company.cep}
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
                        value={company.rua}
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
                        value={company.numero}
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
                        value={company.bairro}
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
                        value={company.cidade}
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
                        value={company.uf}
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
                        value={company.pais}
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
                        value={company.nomeRepresentante}
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
                        value={company.telefoneRepresentante}
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
                        value={company.celularRepresentante}
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
                        value={company.emailRepresentante}
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
                        value={company.departamento}
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
                        value={company.segmentoEmpresa}
                      />
                    </div>
                    <button
                      onClick={(e) => this.editCompany(company.id)}
                      className="join-btn-no-transform mr-1"
                      style={{
                        width: "100%",
                        marginBottom: "5px",
                        marginTop: "5px"
                      }}
                    >
                      Editar
                  </button>
                    <button
                      onClick={(e) => this.excluirCompany(company.id)}
                      className="join-btn-no-transform mr-1"
                      style={{ width: "100%" }}
                    >
                      Excluir
                  </button>
                  </div>
                );
              })}
            </form>
          </div>
        ) : (
            <ConsultCompanyForm
              history={this.props.history}
              edit={this.state.companyEdit[1]}
              id={this.state.companyEdit[0]}
            />
          )}
      </div>
    );
  }
}

export default ViewCompanyForm;
