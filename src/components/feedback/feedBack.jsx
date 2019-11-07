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
      sweetCreate: false
    };
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
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }
  componentWillReceiveProps(props) {
    this.loadProblems();
    console.log(localStorage.getItem("userId"));
  }
  // componentDidMount() {
  //   this.loadProblems();
  // }
  goToList = () => {
    this.props.history.push("/Institucional");
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  componentDidMount() {
    this.props.setNavbarOpen(false);
  }

  render() {
    const { ...rest } = this.props;
    return (
      <div>
        <div className="row">
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
          <div className="col-md-12">
            <h1 className="h1-main">Feed Back</h1>
          </div>
        </div>{/*row*/}
        <div className="container col-md-8">
          <div className="signupForm form-inline">
            {this.state.project.length > 0 ? (
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-11">
                    {this.state.project.map(proj => {
                      return (
                        <div key={proj.id}>
                          <label style={{ display: "none" }}>{proj.problem.id}</label>
                          <div className="empresa">
                            <label className="labelFields"><b>Razão Social</b></label><br />
                            <label className="labelFields">{proj.problem.empresa}</label>
                          </div>
                          <div className="problema">
                            <label className="labelFields"><b>Descrição Do Problema</b></label><br />
                            <label className="labelFields">{proj.problem.descricao}</label>
                          </div>
                        </div>
                      );
                    })}
                  </div>{/*col-md-11*/}
                </div>
              </div>/*row*/
            ) : (
                <h1 style={{ display: "flex", fontSize: "30px", justifyContent: "center" }}> ERROR #404</h1>
              )}
          </div>{/*signupForm form-inline*/}

          <form className="signupForm form-inline">
            <div className="col-md-12">
              <label
                className="labelFields"
              >
                Feed-Back:{" "}
              </label>
              <textarea
                type="text"
                className="inputFields col-md-12"
                max="150"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
              />
            </div>
            <div className="col-md-11">
              <button
                onClick={() => this.goToList()}
                className="join-btn-no-transform mr-1"
                type="button"
              >
                Confirmar
              </button>
            </div>
          </form>{/*signupForm form-inline*/}
          <SweetAlert
            success
            show={this.state.sweetCreate}
            title="Atenção"
            onConfirm={() => this.setState({ sweetCreate: false })}
          >
            {`Feed Back realizado com sucesso!!!!}`}
          </SweetAlert>
        </div > {/*container col-md-8*/}
      </div >
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
  // componentWillReceiveProps(props) {
  //   this.loadSentiment(console.log(localStorage.getItem("problem.id")));
  // }
  componentDidMount() {
    this.loadSentiment();
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);

const mapStateToProps = state => ({ navbar: state.navbar });

export default connect(mapStateToProps, mapDispatchToProps)
  (Feedback);
