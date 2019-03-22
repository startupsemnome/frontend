import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import CompanyForm from "./../companyForm";

class ConsultCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      companyEdit: [null, false],
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
    this.setState({ companyEdit: [id, true] })
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
      <div className="container col-md-12">
        {!this.state.companyEdit[1] ?
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h3-main">Listar Empresas</h1>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-12" style={{ backgroundColor: "#1a8687" }}>
                Pesquisar:
                <label className="inputFields" min="80">
                  <input type="text" className="labelFields" />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Cnpj</th>
                      {/* <th scope="col">Contato</th> */}
                      {/* <th scope="col">Endereço</th> */}
                      <th scope="col">Ultima Atualização</th>
                      <th scope="col">Data Criação</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(company => {
                      return (
                        <tr key={`userTable${company.id}`}>
                          <td>{company.id}</td>
                          <td>{company.empresa}</td>
                          <td>{company.cnpj}</td>
                          {/* <td>{company.email} Tel:{company.tele}</td> */}
                          {/* <td>{company.est}-{company.cid} {company.bair} {company.rua} {company.num}</td> */}
                          <td>{company.updated_at}</td>
                          <td>{company.created_at}</td>
                          <td>
                            <button onClick={(e) => this.editCompany(company.id)} className="join-btn-no-transform mr-1">Descrição</button>
                            <button onClick={(e) => this.editCompany(company.id)} className="btn btn-primary">Editar</button>
                            <button onClick={(e) => this.excluirCompany(company.id)} className="btn btn-danger">Excluir</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div> :
          <CompanyForm edit={this.state.companyEdit[1]} id={this.state.companyEdit[0]} />}
      </div>
    );
  }
}

export default ConsultCompanyForm;
