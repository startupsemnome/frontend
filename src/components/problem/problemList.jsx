import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";
import ProblemForm from "./problemForm";

class ProblemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      buscaTable: "",
      problemListEdit: [null, false]
    };
    console.log(this.props);
    this.deleteProblem = this.deleteProblem.bind(this);
  }
  handleChangeProblemList = problemListEdit => {
    this.setState({ problemListEdit });
  };
  findProblem() {
    // Chama a api do banco com o método buscar
    axios
      .post(env.API + "consult-problem", { search: this.state.buscaTable })
      .then(response => {
        alert("Busca Realizada com Sucesso!");
        // apos excluir carrega novamente os usuarios da tabela
        this.setState({ users: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na busca do item");
      });
  }
  deleteProblem(id) {
    // chama a api do banco com o metodo de delete
    axios
      .delete(env.API + "problem/" + id)
      .then(response => {
        alert("Excluido com sucesso");
        // apos excluir carrega novamente os usuarios da tabela
        this.loadProblems();
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na exclusao do item");
      });
  }
  detailProblem(id) {
    this.setState({ problemListEdit: [-1, true, id] });
  }
  editProblem(id) {
    this.setState({ problemListEdit: [id, true] });
  }
  formatDate = data => {
    let novaData = "";
    const year = data.substring(0, 4);
    const month = data.substring(5, 7);
    const day = data.substring(8, 10);
    novaData = day + "/" + month + "/" + year;

    return novaData;
  };

  loadProblems() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "problem")
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
    this.loadProblems();
  }
  render() {
    return (
      <div className="container col-md-8">
        {!this.state.problemListEdit[1] ? (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar Problemas</h1>
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
                  className="inputFields"
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
                  onClick={() => this.findProblem()}
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
                      <th scope="col">Contato</th>
                      <th scope="col">Problema</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Ultima Atualização</th>
                      <th scope="col">Data Criação</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(problem => {
                      return (
                        <tr key={`buscaTable${problem.id}`}>
                          <td style={{ display: "none" }}>{problem.id}</td>
                          <td>{problem.company.razaoSocial}</td>

                          <td>
                            {problem.company.emailRepresentante} <br />
                            {problem.telefone}
                          </td>
                          <td>{problem.titulo}</td>
                          <td>{problem.descricao}</td>
                          <td>{this.formatDate(problem.updated_at)}</td>
                          <td>{this.formatDate(problem.created_at)}</td>
                          <td>
                            <button
                              onClick={e => this.detailProblem(problem.id)}
                              className="join-btn-no-transform mr-1"
                              style={{ width: "100%" }}
                            >
                              Detalhes
                            </button>
                            <button
                              onClick={e => this.editProblem(problem.id)}
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
                              onClick={e => this.deleteProblem(problem.id)}
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
          <ProblemForm
            history={this.props.history}
            edit={this.state.problemListEdit[1]}
            id={this.state.problemListEdit[0]}
            idDetail={this.state.problemListEdit[2]}
            handleChangeProblemList={this.handleChangeProblemList}
          />
        )}
      </div>
    );
  }
}

export default ProblemList;
