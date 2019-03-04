import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route, Router } from "react-router-dom";
import { browserHistory } from "react-router";

// Components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

// Pages
import RegisterCompany from "../pages/registerCompany";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import RegisterResource from "../pages/registerResource";
import RegisterProblem from "../pages/registerProblem";
import RegisterUsuario from "../pages/registerUser";

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route
            exact={true}
            path="/cadastro-empresa"
            component={RegisterCompany}
          />
          <Route
            exact={true}
            path="/cadastro-recurso"
            component={RegisterResource}
          />
          <Route
            exact={true}
            path="/cadastro-usuario"
            component={RegisterUsuario}
          />
          <Route
            exact={true}
            path="/cadastro-problema"
            component={RegisterProblem}
          />

          <Route exact={true} component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
