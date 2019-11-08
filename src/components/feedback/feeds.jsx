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
      .post(env.API + "consult-feed", { search: this.state.busca })
      .then(response => {
        // apos excluir carrega novamente os usuarios da tabela  status = CHAMADO
        this.setState({ users: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na busca do item");
      });
  }

  componentDidMount() {
    this.findFeeds();
  }

  render() {
    return (
      <div className="container col-md-9">
        {this.state.users.length > 0 ? (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar FeedBacks</h1>
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
            {/*row mt-2 mb-2*/}

            <div className="row feeds">
              <div className="col-md-12">
                {this.state.users.map(proj => {
                  return (
                    <div
                      key={`buscaTable${proj.id}`}
                      style={{
                        backgroundColor: "#6f90ff",
                        padding: 5,
                        margin: 30,
                        justifyContent: "flex",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "row"
                      }}
                    >
                      <div style={{ width: "0%" }}>
                        <p scope="col" style={{ display: "none" }}>
                          ID
                        </p>
                      </div>
                      <div style={{ width: "10%", margin: 20 }}>
                        <label
                          className="row"
                          style={{ fontSize: 14, padding: 10 }}
                        >
                          Empresa:
                        </label>
                        <p style={{ color: "white" }}>{proj.problem.empresa}</p>
                      </div>
                      <div style={{ width: "30%", margin: 20 }}>
                        <label
                          className="row"
                          style={{ fontSize: 14, padding: 10 }}
                        >
                          Descricao do problema:
                        </label>
                        <p style={{ color: "white" }}>
                          {proj.problem.descricao}
                        </p>
                      </div>
                      <div style={{ width: "20%", margin: 20 }}>
                        <label
                          style={{ fontSize: 14, padding: 10 }}
                          className="row"
                        >
                          Nome:
                        </label>
                        <p style={{ color: "white" }}>{proj.resource.nome}</p>
                      </div>
                      <div style={{ width: "20%", margin: 20 }}>
                        <label
                          style={{ fontSize: 14, padding: 10 }}
                          className="row"
                        >
                          Feedback:
                        </label>
                        <p style={{ color: "white" }}>{proj.comment}</p>
                      </div>
                      <div style={{ width: "5%", margin: 20 }}>
                        <label
                          style={{ fontSize: 14, padding: 10 }}
                          className="row"
                        >
                          Analise:
                        </label>
                        <p style={{ color: "white" }}>{proj.sentiment}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/*col-md-12*/}
            </div>
            {/*row feeds*/}
          </div>
        ) : (
          <h1>
            <b>Sem feeds!!!</b>
          </h1>
        )}
      </div> /*container col-md-9*/
    );
  }
}
export default Feeds;
