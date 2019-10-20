import React, { Component } from "react";
import { Button, Label, Input } from "reactstrap";
import axios from "axios";
import env from "./../consts"
import ProblemForm from "./../components/problem/problemForm";
import RegisterResourceForm from "./../components/resource/registerResourceForm";
import CompanyForm from "./../components/companys/companyForm";

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      match: [],
      descricao: "",
      resource_id: "",
      problem_id: "",
    };
  }
  loadMatch() {
    const idMat = localStorage.getItem("id");
    axios
      .get(env.API + "match-resource-problem/" + idMat)
      .then(response => {
        // handle success
        const data = response.data;
        console.log(response.data);
        this.setState({ match: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
    console.log("Teste 1");
  }
  componentDidMount() {
    this.loadMatch();
    console.log("Teste 1");
  }

  //Sentiment Analysis
  // loadSentAnalys() {
  //   // Make a request for a user with a given ID
  //   const resource_id = localStorage.getItem("resource_id");
  //   axios
  //     .get(env.API + "sentiment-analysis")
  //     .then(response => {
  //       const data = response.data;
  //       console.log(response.data);
  //       this.setState({
  //         descricao: data.text,
  //         problem_id: data.problem_id,
  //       });
  //     })
  //     .catch(error => {
  //       // handle error
  //       console.log(error + "Erro na API");
  //     });
  // }
  // componentDidMount() {
  //   this.loadSentAnalys();
  //   console.log("teste 2");
  // }

  loadResouProb() {
    // Make a request for a user with a given ID
    const id_user = localStorage.getItem("userId");
    axios
      .get(env.API + "resource-problem/resource/" + id_user)
      .then(response => {
        // handle success
        const data = response.data;
        console.log(response.data);
        this.setState({ project: data });
        console.log("teste 3");
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }
  componentDidMount() {
    this.loadResouProb();
    console.log("teste 3.1");
  }
  render() {
    return (
      <div className="container col-md-12">
        <div className="row">
          <h1 className="h1-main">Feed</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="signupForm form-inline">
              {/* {!this.props..users == undefined ? (
                <b>{this.props..users.id}</b>
              ) : null} */}
              {/* <div className="col-md-4">
                <label
                  className="labelFields"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  Empresa:
                </label>
                <input
                  className="inputFields col-md-12"
                  value={this.state.descricao}
                  disabled="disabled"
                  onChange={e => this.setState({ descricao: e.target.value })}
                />
                <br /> <br /><br />
                <label
                  className="labelFields"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  Empresa:
                </label>
                <input
                  className="inputFields col-md-12"
                  value={this.state.problem_id}
                  disabled="disabled"
                  onChange={e => this.setState({ problem_id: e.target.value })}
                /> */}
                {/* {this.state.response.map(sent => {
                    return <div className=" col-md-10" key={{resource_id}}>
                      <b>{mat.razaoSocial}</b>
                    </div>
                  })}
                </input> */}
              {/* </div> */}
              {this.state.project.length > 0 ? (
              /*
               <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Descrição do Problema:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Descreva o problema"
              value={this.state.descricao}
              onChange={e => this.setState({ descricao: e.target.value })}
              disabled="disabled"
              >*/
              <p>
              {this.state.project.map(pro =>{
                return( 
                  <b>{pro.problem.categoria}</b>
                );
              })}</p>
              
               ): ( <input />)}
              </form>
          </div>
          {/* </div>  */}
        </div>
      </div>
    );
  }
}
export default Feed;