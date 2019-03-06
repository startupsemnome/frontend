import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      sweetCreate: false
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  render() {
    return (
      <div className="col-md-12">
        <form className="signupForm">
          <ul class="noBullet">
            <li>
              <label className="labelFields col-md-2">Nome:</label>
              <input
                className="inputFields col-md-10"
                type="text"
                placeholder="Digite o seu nome"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                required
              />
            </li>
          </ul>
          <label className="labelFields col-md-2">Email:</label>
          <input
            className="inputFields col-md-10"
            type="email"
            placeholder="Digite o sobrenome"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />

          <label className="labelFields col-md-2">Senha:</label>
          <input
            className="inputFields col-md-12"
            type="password"
            placeholder="Ex: 1234"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            required
          />
          <Row>
            <Col>
              <button
                type="button"
                onClick={e => this.handleFormSubmit(e)}
                className="join-btn"
              >
                Criar Usuário
              </button>
            </Col>
          </Row>
        </form>

        <SweetAlert
          success
          show={this.state.sweetCreate}
          onConfirm={() => this.setState({ sweetCreate: false })}
        >
          {`Cadastrado ${this.state.name} com sucesso!`}
        </SweetAlert>
      </div>
    );
  }
}

export default UserForm;
