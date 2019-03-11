import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";

class ConsultCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  loadUsers() {
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
    console.log("teste");
    this.loadUsers();
  }
  render() {
    return (
      <div className="container col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h1 className="h1-main">Listar Empresas</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ backgroundColor: "#1a8687" }}>
            <label htmlFor="" className="labelFields m-l-1">
              Pesquisar:
            </label>
            <input type="text" className="inputFields" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Cnpj</th>
                  <th scope="col">Email</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Ultima Atualização</th>
                  <th scope="col">Data Criação</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.empresa}</td>
                      <td>{user.cnpj}</td>
                      <td>{user.email}</td>
                      <td>{user.telefone}</td>
                      <td>{user.updated_at}</td>
                      <td>{user.created_at}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultCompanyForm;
