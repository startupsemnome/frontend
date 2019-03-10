import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";

class ProblemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      solicit: "",
      email: "",
      telef: "",
      nprob: "",
      sweetCreate: false
    };
    this.hasErros = this.hasErros.bind(this);
    this.createProblem = this.createProblem.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  createProblem() {
    alert(1);
    if (!this.hasErros()) {
      axios
        .post(env.API + "problem", {
          empresa: this.state.empresa,
          solicit: this.state.solicit,
          email: this.state.email,
          telef: this.state.telef,
          nprob: this.state.nprob
        })
        .then(function (response) {
          alert(2);
          console.log(response);
          window.location = "/consultar-problema";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  hasErros() {
    if (this.state.empresa === "") {
      this.setState({ error: "preencha o campo empresa" });
      return true;
    } else if (this.state.solicit === "") {
      this.setState({ error: "preencha o campo solicitante" });
      return true;
    } else if (this.state.email === "") {
      this.setState({ error: "preencha o campo email" });
      return true;
    } else if (this.state.telef === "") {
      this.setState({ error: "preencha o campo telefone" });
      return true;
    } else if (this.state.nprob === "") {
      this.setState({ error: "preencha o campo novo problema" });
      return true;
    }
    return false;
  }


  render() {
    return (
      <div className="App">
        <div>
          <form className="signupForm">
            <label className="labelFields">Nome da empresa:</label><br />
            <input
              className="inputFields"
              type="text"
              placeholder="Digite o nome da empresa"
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })} />
            <div>
              <ul>
                <br />

                <label className="labelFields">Solicitante:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o nome do solicitante"
                  value={this.state.solicit}
                  onChange={e => this.setState({ solicit: e.target.value })} /> <br />

                <label className="labelFields">Email:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o email do responsável"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} /><br />

                <label className="labelFields">Telefone:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Digite o telefone do responsável"
                  value={this.state.telef}
                  onChange={e => this.setState({ telef: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Novo Problema</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Descreve o problema"
                  value={this.state.nprob}
                  onChange={e => this.setState({ nprob: e.target.value })} />

              </ul>
            </div>

            <Row>
              <Col>
                <button
                  type="button"
                  onClick={this.createProblem}
                  className="join-btn"
                >
                  Cadastrar Problema
              </button>
              </Col>
            </Row>
          </form>


          <SweetAlert
            success
            show={this.state.sweetCreate}
            title="Atenção"
            onConfirm={() => this.setState({ sweetCreate: false })}
          >
            {`Cadastrado ${this.state.empresa} com sucesso!`}
          </SweetAlert>




        </div>
      </div>

    );
  }
}

export default ProblemForm;
