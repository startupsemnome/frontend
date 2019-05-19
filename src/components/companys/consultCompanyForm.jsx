import React, { Component } from "react";
import { Row, Col, ModalHeader, Label, Input, Table } from "reactstrap";
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
  visualizar() {
    this.setState({ modal: !this.state.modal })
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
                }}>
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
                  onClick={() => this.findCompany()}>
                  Buscar
                </button>
              </div>
            </div>
            {/* <div class="card">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <div className="card-footer">
                </div>
              </div>
            </div> */}
            <div className="row">
              {/* <div className="col-md-12"> */}
              {/* <table className="table table-main">
                  <thead>
                    <tr>
                      <th scope="col" style={{ display: "none" }}>
                        ID
                      </th>
                      <th scope="col">Razão Social</th>
                      <th scope="col">Nome Fantasia</th>
                      <th scope="col">CNPJ</th>
                      <th scope="col">CEP</th>
                      <th scope="col">rua</th>
                      <th scope="col">numero</th>
                      <th scope="col">bairro</th>
                      <th scope="col">cidade</th>
                      <th scope="col">uf</th>
                      <th scope="col">pais</th>
                      <th scope="col">nomeRepresentante</th>
                      <th scope="col">telefoneRepresentante</th>
                      <th scope="col">celularRepresentante</th>
                      <th scope="col">emailRepresentante</th>color: "rgb(52, 58, 64)"
                      <th scope="col">departamento</th>
                      <th scope="col">segmentoEmpresa</th>
                    </tr>
                  </thead>
                  <tbody> */}
              {/* <div className="row" > */}
              {this.state.users.map(company => {
                return (
                  <div className="col-md-3 box" style={{ fontSize: "18px", maxWidth: "298px", minHeight: "255px" }} inline={true}>
                    <div className="card" body outline style={{ backgroundColor: "rgb(254, 254, 254)", minHeight: "240px", maxWidth: "298px", maxWidth: "295px", marginRight: "0px", marginLeft: "0px", borderRadius: "10px" }}>
                      {/* // <tr >
                          //   <td style={{ display: "none" }}>{company.id}</td>
                          //   <td>{company.razaoSocial}</td>
                          //   <td>{company.nomeFantasia}</td>
                          //   <td>{company.cnpj}</td>
                          //   <td>{company.cep}</td>
                          //   <td>{company.rua}</td>
                          //   <td>{company.numero}</td>
                          //   <td>{company.bairro}</td>
                          //   <td>{company.cidade}</td>
                          //   <td>{company.uf}</td>
                          //   <td>{company.pais}</td>
                          //   <td>{company.nomeRepresentante}</td>
                          //   <td>{company.telefoneRepresentante}</td>
                          //   <td>{company.celularRepresentante}</td>
                          //   <td>{company.emailRepresentante}</td>
                          //   {/* <td>{company.nomeRepresentante}</td> */}
                      {/*  <td>{company.departamento}</td>
                          //   <td>{company.segmentoEmpresa}</td> */}

                      {/* <td>{company.updated_at}</td>
                          //   <td>{company.created_at}</td> x
                          //   <td>
                          //     <button
                          //       onClick={e => this.editCompany(company.id)}
                          //       className="join-btn-no-transform mr-1"
                          //       style={{ width: "100%" }}
                          //     >
                          //       Detalhes
                          //     </button>
                          //     <button
                          //       onClick={e => this.editCompany(company.id)}
                          //       className="join-btn-no-transform mr-1"
                          //       style={{
                          //         width: "100%",
                          //         marginBottom: "5px",
                          //         marginTop: "5px"
                          //       }}
                          //     >
                          //       Editar
                          //     </button>
                          //     <button
                          //       onClick={e => this.excluirCompany(company.id)}
                          //       className="join-btn-no-transform mr-1"
                          //       style={{ width: "100%" }}
                          //     >
                          //       Excluir
                          //     </button>
                          //   </td>
                          // </tr>


                          //   {/* </tbody>
                          // </table> */}

                      <div className="card-body" key={`userTable${company.id}`}>
                        <div className="card-title">
                          <h3 style={{ color: "#707070", margin: "auto" }}>Razão Social:&nbsp;{company.razaoSocial}<br />
                            Nome Fantasia:&nbsp;{company.nomeFantasia}
                          </h3>
                        </div>
                        <div className="card-text" style={{ margin: "auto", padding: "15px" }}>
                          <h5>
                          </h5>
                        </div>
                        <div className="card-footer" style={{ padding: "0.25rem 3.25rem" }}>
                          <button className="btn btn-primary" to={"visualizar-empresa"} style={{ width: "100%" }}>Visualizar</button>
                          {/* <Link onClick={e => this.visualizarCompany(company.id)}>Lista De Empresas</Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* </div> */}
            </div>
            {/* </div> */}
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
