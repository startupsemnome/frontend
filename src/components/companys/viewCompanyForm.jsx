import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import env from "./../../consts";
import ConsultCompanyForm from "./consultCompanyForm";

class ViewCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      razaoSocial:"",
      cnpj:"",
      users:[],
      companyEdit: [null, false]
    };
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
  componentDidMount(id) {
    console.log("OK");
    this.loadCompanys();
  }
  
  render(){
    return (
      <div className="loginUser col-md-12">
            <form className="signupForm form-inline">
                {!this.state.users == undefined ? (
                <b>{this.state.users.cnpj}</b>
                ) : (
                  null
                )}
                <div>
                    <div className="col-md-8">
                      <label
                        className="labelFields"
                        style={{ display: "flex", justifyContent: "end" }}
                      >
                        Razão Social:{" "}
                      </label>
                      <input
                        className="inputFields col-md-12"
                        value={this.state.razaoSocial}
                        onChange={e => this.setState({razaoSocial: e.target.value })}
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
                        value={this.state.cnpj}
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
                        value={this.state.nomeFantasia}
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
                        value={this.state.cep}
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
                        value={this.state.rua}
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
                        value={this.state.numero}
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
                        value={this.state.bairro}
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
                        value={this.state.cidade}
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
                        value={this.state.uf}
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
                        value={this.state.pais}
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
                        value={this.state.nomeRepresentante}
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
                        value={this.state.telefoneRepresentante}
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
                        value={this.state.celularRepresentante}
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
                        value={this.state.emailRepresentante}
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
                        value={this.state.departamento}
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
                        value={this.state.segmentoEmpresa}
                      />
                    </div>
                    <button
                      onClick={(e) => this.editCompany(this.state.users.id)}
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
                      onClick={(e) => this.excluirCompany(this.state.users.company.id)}
                      className="join-btn-no-transform mr-1"
                      style={{ width: "100%" }}
                    >
                      Excluir
                  </button>
                  </div>    
            </form>
            <ConsultCompanyForm
               history={this.props.history}
              />
      </div>
    );
  }
}

export default ViewCompanyForm;
