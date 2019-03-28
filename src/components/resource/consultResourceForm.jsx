import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import RegisterResourceForm from "./registerResourceForm";

class ConsultResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      buscaTable: "",
      resourceListEdit: [null, false],
    };
    console.log(this.props);
    this.excluirResource = this.excluirResource.bind(this);
  }

  findResource() {

    // chama a api do banco com o metodo de delete
    axios
      .post(env.API + "consult-resource", { search: this.state.buscaTable })
      .then(response => {
        alert("buscou");
        // apos excluir carrega novamente os usuarios da tabela
        this.setState({ users: response.data })
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na busca do item");
      });
  }
  excluirResource(id) {
    // chama a api do banco com o metodo de delete
    axios
      .delete(env.API + "resource/" + id)
      .then(response => {
        alert("Excluido com sucesso");
        // apos excluir carrega novamente os usuarios da tabela
        this.loadResources();
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na exclusao do item");
      });
  }
  editResource(id) {
    this.setState({ resourceListEdit: [id, true] })
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
        {!this.state.resourceListEdit[1] ?
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar Recursos</h1>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-12" style={{ backgroundColor: "#1a8687" }}>
                <input type="text" className="inputFields" onChange={e => this.setState({ buscaTable: e.target.value })} value={this.state.buscaTable} />
                <button type="button" onClick={() => this.findResource()}>buscar2</button>
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
                      <th scope="col">Opções</th>
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
                          <td>
                            <button onClick={(e) => this.editResource(resource.id)} className="join-btn-no-transform mr-1">Detalhe</button>
                            <button onClick={(e) => this.editResource(resource.id)} className="join-btn-no-transform mr-1">Editar</button>
                            <button onClick={(e) => this.excluirResource(resource.id)} className="join-btn-no-transform mr-1">Excluir</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div> :
          <RegisterResourceForm edit={this.state.resourceListEdit[1]} id={this.state.resourceListEdit[0]} />}
      </div>

    );
  }
}

export default ConsultResourceForm;
