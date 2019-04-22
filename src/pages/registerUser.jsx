import React, { Component } from "react";
import UserForm from "../components/user/userForm";
import { Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ""
    };
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar o cadastro dos usuários." />
          <meta name="keywords" content="site, cadastro usuários, crud usuários" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Cadastrar Usuário</title>
        </Helmet>
        <Row>
          <Col>
            <h1 className="h1-main">Cadastrar Usuario</h1>
            <br /><br />
          </Col>
        </Row>
        <Row>
          <Col>
            <UserForm />
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterUser;
