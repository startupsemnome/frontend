import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Content from "../components/content";

import { setLogin } from "./../redux/actions/authAction";
import { setNavbarOpen } from "./../redux/actions/navbarAction";

import { Helmet } from "react-helmet";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setNavbarOpen(false);
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por validar login e senha e conceder ou não o acesso ao usuário." />
          <meta name="keywords" content="site, usuários, recursos, logar, administrativo" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Login</title>
        </Helmet>

        <Content
          history={this.props.history}
          setLogin={this.props.setLogin}
          setNavbarOpen={this.props.setNavbarOpen}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ isNavbarOpen: state.navbar });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen, setLogin }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
