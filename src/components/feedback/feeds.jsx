import React, { Component } from "react";
import { Button, Label, Input } from "reactstrap";
import axios from "axios";
import env from "./../../consts";
class Feeds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      busca: ""
    };
  }
  findFeeds() {
    // Chama a api do banco com o método buscar
    axios
      .post(env.API + "consult-feed", { search_feed: this.state.busca })
      .then(response => {
        // apos excluir carrega novamente os usuarios da tabela  status = CHAMADO 
        this.setState({ users: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na busca do item");
      });
  }

  loadProblems() {
    // Make a request for a user with a given ID
    const id_user = localStorage.getItem("userId");
    axios
      .get(env.API + "resource-problem/resource/" + id_user)
      .then(response => {
        // handle success
        const data = response.data;
        console.log(response.data);
        this.setState({ project: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }
  componentWillReceiveProps(props) {
    this.loadProblems();
  }
  render() {
    return (
      <div className="container col-md-9">
        {this.state.project.length > 0 ? (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar Feed Backs</h1>
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
                  onClick={() => this.findFeeds()}
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
                      <th scope="col">Descricao do problem</th>
                      <th scope="col">Status</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Feedback</th>
                      <th scope="col">Analise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.project.map(proj => {
                      return (
                        <tr key={`buscaTable${proj.id}`}>
                          <td style={{ display: "none" }}>
                            {proj.problem.id}
                          </td>
                          <td>{proj.problem.empresa}</td>
                          <td>{proj.problem.categoria}</td>
                          <td>{proj.status}</td>
                          <td>{proj.problem.titulo}</td>
                          <td>{proj.problem}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>/col-md-12/
            </div>/"row"/
          </div>
        ) : (<h1><b>Sem feeds!!!</b></h1>)}
      </div>/*container col-md-9*/
    );
  }
}
export default Feeds;





