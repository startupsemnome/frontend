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
    // Chama a api do banco com o método buscar
    axios
      .post(env.API + "consult-resource", { search: this.state.buscaTable })
      .then(response => {
        alert("Busca Realizada com Sucesso!");
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
  handleEdit() {
    this.setState({ resourceListEdit: [null, false] });
  }
  render() {
    return (
      <div className="container col-md-8">
        {!this.state.resourceListEdit[1] ? (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar Recursos</h1>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              {/* Local onde vai receber o input do usuário e o botão dispara a ação de buscar */}
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
                  onChange={e => this.setState({ buscaTable: e.target.value })} 
                />
                <button
                  type="button"
                  className="join-btn-no-transform mr-1 login col-md-2"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    marginLeft: "10px"
                  }}
                  onClick={() => this.findResource()}
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table class="table table-main">
                  <thead>
                    <tr>
                      <th scope="col" style={{ display: "none" }}>ID</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Email</th>
                      <th scope="col">Telefone</th>
                      <th scope="col">Cidade</th>
                      <th scope="col">Area de Interesse</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(resource => {
                      return (
                        <tr key={`buscaTable${resource.id}`}>
                          <td style={{ display: "none" }}>{resource.id}</td>
                          <td>{resource.fname}</td>
                          <td>{resource.email}</td>
                          <td>{resource.tel}</td>
                          <td>{resource.cid}</td>
                          <td>{resource.areai}</td>
                          <td>
                            <button
                              onClick={(e) => this.editResource(resource.id)}
                              className="join-btn-no-transform mr-1"
                              style={{ width: "100%" }}
                            >
                              Detalhes
                            </button>
                            <button
                              onClick={(e) => this.editResource(resource.id)}
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
                              onClick={(e) => this.excluirResource(resource.id)}
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
            <RegisterResourceForm
              edit={this.state.resourceListEdit[1]}
              history={this.props.history}
              handleEdit={() => this.handleEdit()}
              id={this.state.resourceListEdit[0]}
            />
          )}
      </div>
    );
  }
}

export default ConsultResourceForm;
