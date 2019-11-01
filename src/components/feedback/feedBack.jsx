import React, { Component } from "react";
import { Button, Label, Input } from "reactstrap";
import axios from "axios";
import env from "./../../consts";
import ConsultResource from "./../resource/consultResourceForm";
import ConsultCompanyForm from "./../companys/consultCompanyForm";
import ProblemForm from "./../../components/problem/problemForm";
import { setNavbarOpen } from "./../../redux/actions/navbarAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "./../../components/institutional/Header.jsx";
import HeaderLinks from "./../../components/institutional/HeaderLinks.jsx";
//import { setNavbarOpen } from "./../../../redux/actions/navbarAction";

//import { Link } from "react-router-dom";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      users: [],
      sweetCreate: false
    };
  }
  // problem_id comment resource_problem id status = CHAMADO 
  loadProblems() {
    // Make a request for a user with a given ID
    const id_user = localStorage.getItem("userId");
    axios
      .get(env.API + "resource-problem/resource/" + id_user)
      .then(response => {
        // handle success
        const data = response.data;//data;
        this.setState({ project: data });
        console.log(data);
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

  goToList = () => { this.props.history.push("/Institucional"); console.log(this.state.project); }

  componentDidMount() {
    // this.loadSentiment();
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
                  <table className="table table-main">
                    <thead>
                      <tr>
                        <th scope="col" style={{ display: "none" }}>
                          ID
                      </th>
                        <th scope="row">Razão Social</th>
                        <th scope="row">Descrição Do Problema</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.project.map(proj => {
                        return (
                          <div key={proj.id}>
                            <td style={{ display: "none" }}>{proj.problem.id}</td>
                            <td>{proj.problem.empresa}</td>
                            <td>{proj.problem.descricao}</td>
                          </div>
                        );
                      })}

                    </tbody>
                  </table>
                </div>
              </div>/*row*/
            ) : (
                <h1 style={{ display: "flex", fontSize: "30px", justifyContent: "center" }}>ERROR #404</h1>
              )}
          </div>{/*signupForm form-inline*/}

          <form className="signupForm form-inline">
            <div className="col-md-12">
              <label
                className="labelFields"
                style={{ display: "flex", fontSize: "22px", justifyContent: "center" }}
              >
                Feed-Back:{" "}
              </label>
              <textarea
                type="text"
                style={{ marginTop: "5px" }}
                className="inputFields col-md-12"
                max="150"
                value={this.state.users.text}
              // onChange={e => this.setState({ text: e.target.value })}
              />
            </div>
          </form>{/*signupForm form-inline*/}
        </div>{/*container col-md-8*/}
      </div>
    );
  }

  loadSentiment() {
    axios
      // "resource_id": 1 "sentiment-analysis" + { resource_id })
      .get(env.API + "sentiment-analysis")
      .then(response => {
        // handle success        
        const data = response.data;
        this.setState({
          resource_id: this.state.project.resource.id,
          problem_id: this.state.project.problem.id,
          text: this.state.users.text
        });
        console.log(response);
        // console.log(id_resource);
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }
  componentWillReceiveProps(props) {
    this.loadSentiment();
  }

}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);

const mapStateToProps = state => ({ navbar: state.navbar });

export default connect(mapStateToProps, mapDispatchToProps)
  (Feedback);
