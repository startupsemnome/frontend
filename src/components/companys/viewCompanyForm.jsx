import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import env from "./../../consts";

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
          <div className="col-md-8">
            {!this.props.company.users == undefined ? (
              <b>{this.props.company.users.cnpj}</b>
            ) : null}
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
        </form >
      </div >
    );
  }
}

export default ViewCompanyForm;
