import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import env from "./../consts";
class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      cnpj: "",
      email: "",
      message: "",
      tele: "",
      est: "",
      cid: "",
      bair: "",
      num: "",
      rua: "",
      sweetCreate: false
    };
    console.log(this.props);
    this.hasErros = this.hasErros.bind(this);
    this.createCompany = this.createCompany.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  createCompany(method, id) {
    if (!this.hasErros()) {
      if (method == "create") {
        axios
          .post(env.API + "company", {
            empresa: this.state.empresa,
            cnpj: this.state.cnpj,
            email: this.state.email,
            message: this.state.message,
            tele: this.state.tele,
            est: this.state.est,
            cid: this.state.cid,
            bair: this.state.bair,
            num: this.state.num,
            rua: this.state.rua
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-empresa";
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (method = "update") {
        axios
          .put(env.API + "company/" + id, {
            empresa: this.state.empresa,
            cnpj: this.state.cnpj,
            email: this.state.email,
            message: this.state.message,
            tele: this.state.tele,
            est: this.state.est,
            cid: this.state.cid,
            bair: this.state.bair,
            num: this.state.num,
            rua: this.state.rua
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-empresa";
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
        .get(env.API + "company/" + id)
        .then((response) => {
          console.log(response);
          const data = response.data;
          this.setState({ empresa: data.empresa, cnpj: data.cnpj, email: data.email, message: data.message, tele: data.tele, est: data.est, cid: data.cid, bair: data.bair, num: data.num, rua: data.rua });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  goToConsulta() {
    window.location = "consultar-empresa";
  }
  hasErros() {
    if (this.state.empresa === "") {
      this.setState({ error: "preencha o campo de nome " });
      return true;
    } else if (this.state.cnpj === "") {
      this.setState({ error: "preencha o campo de cnpj" });
      return true;
    } else if (this.state.email === "") {
      this.setState({ error: "preencha o campo de email" });
      return true;
    } else if (this.state.message === "") {
      this.setState({ error: "preencha o campo de assunto" });
      return true;
    } else if (this.state.tele === "") {
      this.setState({ error: "preencha o campo de telefone" });
      return true;
    } else if (this.state.est === "") {
      this.setState({ error: "preencha o campo de estado" });
      return true;
    } else if (this.state.cid === "") {
      this.setState({ error: "preencha o campo de cidade" });
      return true;
    } else if (this.state.bair === "") {
      this.setState({ error: "preencha o campo de bairro" });
      return true;
    } else if (this.state.num === "") {
      this.setState({ error: "preencha o campo do numero" });
      return true;
    } else if (this.state.rua === "") {
      this.setState({ error: "preencha o campo da rua" });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <div>
          <form className="signupForm form-inline">

            <label className="labelFields">Nome da Organização: </label>
            <input
              className="inputFields"
              type="text"
              id="empresa"
              name="firstname"
              placeholder="Nome da empresa"
              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })}
              required
            />


            <label className="labelFields">CNPJ</label><br />
            <input
              className="inputFields"
              type="number"
              id="cnpj"
              name="lastname"
              placeholder="CNPJ"
              value={this.state.cnpj}
              onChange={e => this.setState({ cnpj: e.target.value })}
              required
            />


            <label className="labelFields">Email</label><br />
            <input
              className="inputFields"
              type="email"
              id="email"
              name="email"
              placeholder="Email da empresa"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />

            <label className="labelFields">Telefone da empresa</label><br />
            <input
              className="inputFields"
              type="tel"
              id="tele"
              name="telefone"
              placeholder="Telefone da empresa"
              value={this.state.tele}
              onChange={e => this.setState({ tele: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Estado</label><br />
            <input
              className="inputFields"
              type="text"
              id="est"
              name="estado"
              placeholder="Estado da empresa"
              value={this.state.est}
              onChange={e => this.setState({ est: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Cidade</label><br />
            <input
              className="inputFields"
              type="text"
              id="cid"
              name="cidade"
              placeholder="A cidade da empresa"
              value={this.state.cid}
              onChange={e => this.setState({ cid: e.target.value })}
              required
            />
            <br></br>
            <label className="labelFields">Bairro</label><br />
            <input
              className="inputFields"
              type="text"
              id="bair"
              name="bairro"
              placeholder="O bairro da empresa"
              value={this.state.bair}
              onChange={e => this.setState({ bair: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Rua</label><br />
            <input
              className="inputFields"
              type="text"
              id="rua"
              name="rua"
              placeholder="A rua da empresa"
              value={this.state.rua}
              onChange={e => this.setState({ rua: e.target.value })}
              required
            />
            <br /><br />
            <label className="labelFields">Numero</label><br />
            <input
              className="inputFields"
              type="number"
              id="num"
              name="numero"
              placeholder="O numero da empresa"
              value={this.state.num}
              onChange={e => this.setState({ num: e.target.value })}
              required
            />
            <br /><br />

            <label className="labelFields">Assunto</label><br />
            <input
              className="inputFields"
              id="message"
              name="message"
              placeholder="Descreva pouco sobre a necessidade da sua empresa"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />

            <label className="labelFields" style={{ color: "red" }}>
              {this.state.error}
            </label>
            <Row>
              <Col>
                {this.props.id ?
                  <button
                    type="button"
                    onClick={() => this.goToConsulta("/consultar-empresa")}
                    className="join-btn"
                  >
                    Consultar Empresa
                </button> : null}
              </Col>
              <Col>
                <button
                  type="button"
                  onClick={() => { !this.props.id ? this.createCompany("create") : this.createCompany("update", this.props.id) }}
                  className="join-btn"
                >
                  {!this.props.id ? "Cadastrar " : "Editar"} Empresa
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
            {`Cadastrado ${this.state.empresa} com sucesso!!!!}`}
          </SweetAlert>
        </div>
      </div>
    );
  }
}
export default CompanyForm; 
