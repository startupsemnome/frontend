import React, { Component } from "react";
import { Button, Label, Input } from "reactstrap";
import axios from "axios";
import env from "./../../consts";
import ConsultResource from "./../resource/consultResourceForm";
import ConsultCompanyForm from "./../companys/consultCompanyForm";
import ProblemForm from "./../../components/problem/problemForm";
import SweetAlert from "react-bootstrap-sweetalert";

import { setNavbarOpen } from "./../../redux/actions/navbarAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "./../../components/institutional/Header.jsx";
import HeaderLinks from "./../../components/institutional/HeaderLinks.jsx";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      users: [],
      textComment: "",
      sweetCreate: false
    };
  }
  loadProblems() {
    // Make a request for a user with a given ID
    axios
      .get(
        env.API + "resource-problem/resource/" + localStorage.getItem("userId")
      )
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ project: data });
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  goToList = () => {
    this.props.history.push("/Institucional");
  };

  loadImage = status => {
    if (status === "Triste") {
      return (
        <img
          src={
            "https://imagepng.org/wp-content/uploads/2017/10/facebook-triste-emoji-icone-4.png"
          }
          style={{ width: 30, height: 30 }}
        />
      );
    } else if (status === "Moderado") {
      return (
        <img
          src={
            "https://cdn.pixabay.com/photo/2014/10/08/02/47/bored-478651_640.png"
          }
          style={{ width: 45, height: 40 }}
        />
      );
    } else {
      return (
        <img
          src={
            "https://purepng.com/public/uploads/large/31508450200spcaug8c6yrcwtjumebwrisfwkm9zqccww9g4pndyh5ddsgiydsvillhoab2tvpio1ounuvblikb6jzlqflr5fdrnay3p2w7r5e2.png"
          }
          style={{ width: 30, height: 30 }}
        />
      );
    }
  };

  handleChangeTextComment = event => {
    this.setState({ textComment: event.target.value });
  };

  handleFormSubmit = async (event, problem_id) => {
    event.preventDefault();
    this.setState({ sweetCreate: true });
    await axios.post(env.API + "sentiment-analysis", {
      text: this.state.textComment,
      problem_id,
      resource_id: localStorage.getItem("userId")
    });
    this.loadProblems();
  };

  render() {
    const { ...rest } = this.props;
    const { project } = this.state;
    return (
      <div>
        <div className="row">
          <Header
            brand="Resource Manager"
            rightLinks={<HeaderLinks />}
            fixed
            color=""
            changeColorOnScroll={{
              height: 400
            }}
            {...rest}
          />
        </div>
        {/*row*/}
        <div className="container col-md-8 feeback">
          <div>
            <div className="feed">
              <h1>
                Escreva um feadback sobre um projeto que você esta atuando ou
                atuou
            </h1>
              {project.map((v, i) => {
                const { titulo, empresa } = v.problem;
                return (
                  <form
                    key={`form${i}`}
                    style={{ marginTop: 20 }}
                    onSubmit={e => this.handleFormSubmit(e, v.problem_id)}
                  >
                    <h1
                      style={{
                        backgroundColor: "rgba(27,161,226, 0.73)",
                        padding: 20
                      }}
                    >
                      Projeto: {titulo} | Empresa: {empresa}{" "}
                    </h1>
                    <div className="col-md-12 comemet">
                      <input
                        type="text"
                        value={this.state.textComment}
                        onChange={this.handleChangeTextComment}
                        className="inputFields col-md-10"
                        placeholder="Insira seu comentario aqui"
                      />
                      <button type="submit" className="col-md-1 env">
                        enviar
                  </button>
                    </div>
                    <div className="text">

                      {v.comment && (
                        <>
                          <h2 style={{ color: "white" }}>
                            Seu Último Comentário:
                        </h2>
                          <div className="analise">
                            {this.loadImage(v.sentiment)}

                            <h4 style={{ width: "95%", marginLeft: 20 }}>
                              {v.comment.charAt(0).toUpperCase() +
                                v.comment.slice(1)}
                            </h4>
                          </div>
                        </>
                      )}
                    </div>
                  </form>
                );
              })}
            </div>
          </div>
          {/*signupForm form-inline*/}
          <SweetAlert
            success
            show={this.state.sweetCreate}
            title="Atenção"
            onConfirm={() => this.setState({ sweetCreate: false })}
          >
            {`Feed Back realizado com sucesso!!!!}`}
          </SweetAlert>
        </div>{" "}
        {/*container col-md-8*/}
      </div>
    );
  }

  loadSentiment() {
    const resource = localStorage.getItem("userId");
    axios
      .get(env.API + "sentiment-analysis")
      .then(response => {
        // handle success
        const data = response.data;
        alert("FeedBack com sucesso");
        this.setState({
          resource_id: resource,
          problem_id: this.state.problem.id,
          text: this.state.text
        });
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  componentDidMount() {
    this.loadProblems();
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);

const mapStateToProps = state => ({ navbar: state.navbar });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
