import React, { Component } from "react";
import UserForm from "../components/user/userForm";
import { Row, Col } from "reactstrap";

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
        <Row>
          <Col>
            <h1 className="h1-main">Cadastrar Usuario</h1>
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
