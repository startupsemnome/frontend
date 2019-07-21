import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import UserForm from "./userForm";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      buscaUser: "",
      userListEdit: [null, false]
    };
    this.excluirUser = this.excluirUser.bind(this);
  }

  buscarUsuario() {
    // Chama a api do banco com o método buscar
    axios
      .post(env.API + "consult-user", { search: this.state.buscaUser })
      .then(response => {
        // apos excluir carrega novamente os usuarios da tabela
        this.setState({ users: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na busca do item");
      });
  }
  excluirUser(id) {
    // chama a api do banco com o metodo de delete
    axios
      .delete(env.API + "user/" + id)
      .then(response => {
        alert("Excluido com sucesso");
        // apos excluir carrega novamente os usuarios da tabela
        this.loadUsers();
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na exclusao do item");
      });
  }
  editUser(id) {
    this.setState({ userListEdit: [id, true] });
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
    this.loadUsers();
  }
  render() {
    return (
      <div className="container col-md-8">
        {!this.state.userListEdit[1] ? (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar Usuarios</h1>
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
                  onChange={e => this.setState({ buscaUser: e.target.value })}
                />
                <button
                  type="button"
                  className="join-btn-no-transform mr-1 login col-md-2"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    marginLeft: "10px"
                  }}
                  onClick={() => this.buscarUsuario()}
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
                      <th scope="col">Nome</th>
                      <th scope="col">Email</th>
                      <th scope="col">Ultima Atualização</th>
                      <th scope="col">Data Criação</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(user => {
                      return (
                        <tr key={`buscaUser${user.id}`}>
                          <td style={{ display: "none" }}>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.updated_at}</td>
                          <td>{user.created_at}</td>
                          <td>
                            <button
                              onClick={e => this.editUser(user.id)}
                              className="join-btn-no-transform mr-1"
                              style={{ width: "100%" }}
                            >
                              Detalhes
                            </button>
                            <button
                              onClick={e => this.editUser(user.id)}
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
                              onClick={e => this.excluirUser(user.id)}
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
          <UserForm
            history={this.props.history}
            edit={this.state.userListEdit[1]}
            id={this.state.userListEdit[0]}
          />
        )}
      </div>
    );
  }
}

export default UserList;
