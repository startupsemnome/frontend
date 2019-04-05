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
      error: "",
      sweetCreate: false
    };
    console.log(this.props);
    this.hasErros = this.hasErros.bind(this);
    this.createProblem = this.createProblem.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  listSolutions() {
    console.log(this.props);
  }
  createProblem(method, id) {

    if (!this.hasErros()) {

      if (method == "create") {
        axios
          .post(env.API + "problem", {
            empresa: this.state.empresa,
            solicit: this.state.solicit,
            email: this.state.email,
            telef: this.state.telef,
            nprob: this.state.nprob
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-problema";
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (method = "update") {

        axios
          .put(env.API + "problem/" + id, {
            empresa: this.state.empresa,
            solicit: this.state.solicit,
            email: this.state.email,
            telef: this.state.telef,
            nprob: this.state.nprob
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-problema";
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }
  }

  componentDidMount() {
    if (this.props.id) {
      const id = this.props.id;
      axios
        .get(env.API + "problem/" + id)
        .then((response) => {
          console.log(response);
          const data = response.data;
          this.setState({ empresa: data.empresa, solicit: data.solicit, email: data.email, telef: data.telef, nprob: data.nprob });
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
      this.setState({ error: "preencha o campo problema" });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="col-md-12">
        <form className="signupForm">
          <ul class="noBullet">
            <li>
            <label className="labelFields col-md-2">Empresa:</label>
            <input
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite o email do solicitante"
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })}
              required
          />
            </li>
          </ul>
          <label className="labelFields col-md-2">Solicitante:</label>
          <input
            className="inputFields"
            type="text"
            placeholder="Digite o nome do solicitante"
            value={this.state.solicit}
            onChange={e => this.setState({ solicit: e.target.value })}
            required
          />
          <br></br>
          <label className="labelFields col-md-2">Email:</label>
          <input
            className="inputFields col-md-12"
            type="text"
            placeholder="Digite o email do solicitante"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />

          <br></br>
          <label className="labelFields col-md-2">Telefone:</label>
          <input
            className="inputFields col-md-12"
            type="number"
            placeholder="Digite o telefone do solicitante"
            value={this.state.telef}
            onChange={e => this.setState({ telef: e.target.value })}
            required
          />

          <br></br>
          <label className="labelFields col-md-2">Novo Problema:</label>
          <input
            className="inputFields col-md-12"
            type="text"
            placeholder="Descreva o problema"
            value={this.state.nprob}
            onChange={e => this.setState({ nprob: e.target.value })}
            required
          />

          <label className="labelFields" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Row>
            <Col>
            
              <button
                type="button"
                onClick={() => { !this.props.id ? this.createProblem("create") : this.createProblem("update", this.props.id) }}
                className="join-btn"
              >
                {!this.props.id ? "Criar" : "Editar"} Problema
              </button>:
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                type="button"
                onClick={() => { this.listSolutions("create") }}
                className="join-btn"
              >
                Possiveis Soluções
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
          {`Cadastrado ${this.state.problem} com sucesso!`}
        </SweetAlert>
      </div>
    );
  }
}

export default ProblemForm;
