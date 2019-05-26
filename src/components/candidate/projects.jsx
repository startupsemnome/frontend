import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Button, Modal, Jumbotron, Alert } from "reactstrap";

import axios from "axios";
import env from "./../../consts";
import ProblemForm from "./../../components/problem/problemForm";
import ModalLearnMore from "./modalLearnMore";
import Header from "./../../components/institutional/Header.jsx";
import HeaderLinks from "./../../components/institutional/HeaderLinks.jsx";
import PoxaNaoFoiDessaVez from "./../../components/poxaNaoFoiDessaVez.jsx";
import { setNavbarOpen } from "./../../redux/actions/navbarAction";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      buscaTable: "",
      problemListEdit: [null, false]
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
  editProblem(id) {
    this.setState({ problemListEdit: [id, true] });
  }
  loadProblems() {
    // Make a request for a user with a given ID
    const id_user = localStorage.getItem("userId");
    axios
      .get(env.API + "resource-problem/resource/" + id_user)
      .then(response => {
        // handle success
        const data = response.data;
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
  componentDidMount() {
    this.props.setNavbarOpen(false);
    //document.body.style.backgroundImage = "";
  }
  render() {
    const { ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Resource Manager"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400
          }}
          {...rest}
        />
        <div
          className="container col-md-8 mt-5"
          style={{ marginTop: "130px !important" }}
        >
          {!this.state.problemListEdit[1] ? (
            <div>
              <div className="row" style={{ marginTop: 60 }}>
                <div className="col-md-12">
                  <h3 align="center" className="display-3">
                    Olá, Candidato!
                  </h3>
                  <h1 className="h1-main">
                    Você foi selecionado para os seguintes projetos:
                  </h1>
                  {/* <p align="center" className="lead">Se estiver lendo isso, significa que, você foi pré-escolhido para participar de alguns projetos.</p> */}
                  <hr className="my-2" />
                  <p className="lead" />
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
                />
              </div>

              {!this.state.project ? (
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-main">
                      <thead>
                        <tr>
                          <th scope="col" style={{ display: "none" }}>
                            ID
                          </th>
                          <th scope="col">Empresa</th>
                          <th scope="col">Solicitante</th>
                          <th scope="col">Status</th>
                          {/* COLOCAR UM TITULO OU ASSUNTO DO PROBLEMA/PROJETO*/}
                          <th scope="col">Tituto</th>
                          <th scope="col">Opções</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.project.map(proj => {
                          return (
                            <tr key={`buscaTable${proj.id}`}>
                              <td style={{ display: "none" }}>
                                {proj.problem.id}
                              </td>
                              <td>{proj.problem.company.empresa}</td>
                              <td>{proj.problem.solicitante}</td>
                              <td>{proj.status}</td>
                              <td>{proj.problem.titulo}</td>
                              <td>
                                <ModalLearnMore
                                  atualProblemId={proj.problem.id}
                                  titulo={proj.problem.titulo}
                                  history={this.props.history}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <PoxaNaoFoiDessaVez history={this.props.history} />
              )}
            </div>
          ) : (
            <ProblemForm
              history={this.props.history}
              edit={this.state.problemListEdit[1]}
              id={this.state.problemListEdit[0]}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);

const mapStateToProps = state => ({ navbar: state.navbar });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
