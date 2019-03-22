import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";

class ConsultResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    console.log(this.props);
  }

  loadResources() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "resource")
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
    this.loadResources();
  }
  render() {
    return (
      <div className="container col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h1 className="h1-main">Consultar Recursos</h1>
          </div>
        </div>
        <div className="row mt-2 mb-2">
          <div className="col-md-12" style={{ backgroundColor: "#1a8687" }}>
            <input type="text" className="inputFields" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Sobrenome</th>
                  <th scope="col">Email</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Area de Interesse</th>
                  <th scope="col">Habilidades e Qualificações</th>
                  <th scope="col">Ultima Atualização</th>
                  <th scope="col">Data Criação</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(resource => {
                  return (
                    <tr>
                      <td>{resource.id}</td>
                      <td>{resource.fname}</td>
                      <td>{resource.lname}</td>
                      <td>{resource.email}</td>
                      <td>{resource.tel}</td>
                      <td>{resource.cid}</td>
                      <td>{resource.est}</td>
                      <td>{resource.areai}</td>
                      <td>{resource.hab}</td>
                      <td>{resource.updated_at}</td>
                      <td>{resource.created_at}</td>
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

export default ConsultResourceForm;
