import React, { Component } from "react";
import { Row, Col, ModalHeader, Label, Input, Table } from "reactstrap";
import {FaEye, FaCogs, FaTrashAlt } from 'react-icons/fa';
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import CompanyForm from "./companyForm";

class ConsultCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userTable: "",
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

  findCompany() {
    // Make a request for a user with a given ID
    axios
      .post(env.API + "consult-company", { search: this.state.userTable })
      .then(response => {
        // handle success
        alert("Busca Realizada com sucesso");
        const data = response.data;
        this.setState({ users: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na busca");
      });
  }
  loadCompanys() {
    // Make a request for a user with a given ID
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
    console.log("teste");
    this.loadCompanys();
  }
  visualizar(id) {
    this.props.history.push({
      pathname: "/visualizar-empresa",
      state: { id }
    });
  }
  render() {
    return (
      <div className="container col-md-8">
        {!this.state.companyEdit[1] ? (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar Empresas</h1>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div
                className="col-md-12"
                style={{
                  backgroundColor: "#1a8687",
                  justifyContent: "center",
                  backgroundColor: "rgb(26, 134, 135)",
                  display: "flex"
                }}
              >
                <input
                  type="text"
                  className="inputFields col-md-9"
                  style={{ width: "100%", marginleft: "10px" }}
                  onChange={e => this.setState({ userTable: e.target.value })}
                />
                <button
                  type="button"
                  className="join-btn-no-transform mr-1 login col-md-2"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    marginLeft: "10px"
                  }}
                  onClick={() => this.findCompany()}
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className="row">
              {this.state.users.map(company => {
                return (
                  <div
                    className="col-md-3 box"
                    style={{
                      fontSize: "18px",
                      maxWidth: "298px",
                      minHeight: "255px"
                    }}
                    inline={true}
                  >
                    <div
                      className="card"
                      body
                      outline
                      style={{
                        backgroundColor: "rgb(254, 254, 254)",
                        minHeight: "240px",
                        maxWidth: "298px",
                        maxWidth: "295px",
                        marginRight: "0px",
                        marginLeft: "0px",
                        borderRadius: "10px"
                      }}
                    >
                      <div className="card-body" key={`userTable${company.id}`}>
                        <div className="card-title">
                          <h3 style={{ color: "#707070", margin: "auto" }}>
                            Razão Social:&nbsp;{company.razaoSocial}
                            <br />
                            Nome Fantasia:&nbsp;{company.nomeFantasia}
                          </h3>
                        </div>
                        <div
                          className="card-text"
                          style={{ margin: "auto", padding: "15px" }}
                        >
                          <h5 />
                        </div>
                        <div
                          className="card-footer"
                          style={{ padding: "1.25rem 3.25rem" }}
                        >
                          <FaEye
                            to={"visualizar-empresa"}
                            style={{ width: "90%" }}
                            onClick={() => this.visualizar(company.id)}
                          />
                          <FaCogs
                            onClick={e => this.editCompany(company.id)}
                            style={{
                              width: "90%",
                              marginBottom: "5px",
                              marginTop: "5px"
                            }}
                          />
                          <FaTrashAlt
                            onClick={e => this.excluirCompany(company.id)}
                            style={{ width: "90%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
            <CompanyForm
              history={this.props.history}
              edit={this.state.companyEdit[1]}
              id={this.state.companyEdit[0]}
            />
          )}
      </div>
    );
  }
}

export default ConsultCompanyForm;
