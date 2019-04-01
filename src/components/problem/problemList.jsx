import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "../../consts";
import ProblemForm from "./problemForm";

class ProblemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      buscaTable:"",
      problemListEdit: [null, false],
    };
    console.log(this.props);


    this.deleteProblem = this.deleteProblem.bind(this);
  }
  findProblem() {

    // Chama a api do banco com o método buscar
    axios
      .post(env.API + "consult-problem", { search: this.state.buscaTable })
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
  editProblem(id) {
    this.setState({ problemListEdit: [id, true] })
  }
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
      <div className="container col-md-12">
        {!this.state.problemListEdit[1] ?
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Listar Problemas</h1>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-md-12" style={{ backgroundColor: "#1a8687" }}>
                <input type="text" className="inputFields" onChange={e => this.setState({ buscaTable: e.target.value })} value={this.state.buscaTable} />
                <button type="button" onClick={() => this.findProblem()}>Buscar Problema</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Solicitante</th>
                      <th scope="col">Email</th>
                      <th scope="col">Telefone</th>
                      <th scope="col">Problema</th>
                      <th scope="col">Ultima Atualização</th>
                      <th scope="col">Data Criação</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(problem => {
                      return (
                        <tr key={`problemTable${problem.id}`}>
                          <td>{problem.id}</td>
                          <td>{problem.empresa}</td>
                          <td>{problem.solicit}</td>
                          <td>{problem.email}</td>
                          <td>{problem.telef}</td>
                          <td>{problem.nprob}</td>
                          <td>{problem.updated_at}</td>
                          <td>{problem.created_at}</td>
                          <td>
                            <button onClick={(e) => this.editProblem(problem.id)} className="join-btn-no-transform mr-1">Detalhes</button>
                            <button onClick={(e) => this.editProblem(problem.id)} className="join-btn-no-transform mr-1">Editar</button>
                            <button onClick={(e) => this.deleteProblem(problem.id)} className="join-btn-no-transform mr-1">Excluir</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div> :
          <ProblemForm edit={this.state.problemListEdit[1]} id={this.state.problemListEdit[0]} />}
      </div>
    );
  }
}

export default ProblemList;
