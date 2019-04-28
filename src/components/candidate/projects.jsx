import React, { Component } from "react";
import { Button, Modal, Jumbotron, Alert } from 'reactstrap';

import axios from "axios";
import env from "./../../consts";
import ProblemForm from "./../../components/problem/problemForm";
import ModalLearnMore from "./modalLearnMore";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      buscaTable: "",
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
      <div className="container col-md-8">
        {!this.state.problemListEdit[1] ? (
          <div>
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-main">Possíveis Projetos Selecionados</h1>
                <h3 align="center" className="display-3">Olá, Candidato!</h3>
                {/* <p align="center" className="lead">Se estiver lendo isso, significa que, você foi pré-escolhido para participar de alguns projetos.</p> */}
                <hr className="my-2" />

                <Alert
                  align="center"
                  color="info"
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    marginTop: "5px"
                  }}>
                  A relação abaixo, contem alguns possíveis projetos que você <a className="alert-link">possa participar</a>.
                   </Alert>

                <p className="lead"></p>
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
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table class="table table-main">
                  <thead>
                    <tr>
                      <th scope="col" style={{ display: "none" }}>ID</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Solicitante</th>
                      {/* COLOCAR UM TITULO OU ASSUNTO DO PROBLEMA/PROJETO*/}
                      <th scope="col">Problema</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(problem => {
                      return (
                        <tr key={`buscaTable${problem.id}`}>
                          <td style={{ display: "none" }}>{problem.id}</td>
                          <td>{problem.company.empresa}</td>
                          <td>{problem.solicit}</td>
                          <td>{problem.nprob}</td>
                          <td>
                            <ModalLearnMore />
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
            />
          )}
      </div>
    );
  }
}

export default Projects;