import React, { Component } from "react";
import { Row, Col } from "reactstrap";
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
              <div className="col-md-12">
                <table className="table table-main">
                  <thead>
                    <tr>
                      <th scope="col" style={{ display: "none" }}>
                        ID
                      </th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Cnpj</th>
                      <th scope="col">Contato</th>
                      <th scope="col">Ultima Atualização</th>
                      <th scope="col">Data Criação</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(company => {
                      return (
                        <tr key={`userTable${company.id}`}>
                          <td style={{ display: "none" }}>{company.id}</td>
                          <td>{company.empresa}</td>
                          <td>{company.cnpj}</td>
                          <td>
                            {company.email} <br />
                            {company.tele}
                          </td>
                          {/* <td>{company.est}-{company.cid}</td> */}
                          <td>{company.updated_at}</td>
                          <td>{company.created_at}</td>
                          <td>
                            <button
                              onClick={e => this.editCompany(company.id)}
                              className="join-btn-no-transform mr-1"
                              style={{ width: "100%" }}
                            >
                              Detalhe
                            </button>
                            <button
                              onClick={e => this.editCompany(company.id)}
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
                              onClick={e => this.excluirCompany(company.id)}
                              className="join-btn-no-transform mr-1"
                              style={{ width: "100%" }}
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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
