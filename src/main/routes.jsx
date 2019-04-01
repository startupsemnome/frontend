import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route, Router } from "react-router-dom";
import { browserHistory } from "react-router";

// Components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import PrivateRoute from "./privateRoutes";
// Pages
import Home from "../pages/home";
import NotFound from "../pages/notFound";
// Pages Company
import RegisterCompany from "../pages/registerCompany";
import DetailsCompany from "../pages/detailsCompany";
import EditCompany from "../pages/editCompany";
import ConsultCompany from "../pages/consultCompany";

import RegisterResource from "../pages/registerResource";
import ConsultResource from "../pages/consultResource";


import RegisterProblem from "../pages/registerProblem";
import EditProblem from "../pages/editProblem";
import DetailsProblem from "../pages/detailsProblem";
import ConsultProblem from "../pages/consultProblem";

import EditProblemForm from "../components/problem/editProblemForm";
import institutionalForm from "../components/institutional/institutionalForm";
import ProblemList from "../components/problem/problemList";
import ResourceDetails from "../pages/resourceDetails";
import EditResource from "../pages/editResource";

import RegisterUsuario from "../pages/registerUser";
import Login from "../pages/login";
import Institutional from "../pages/institutional";


import UserList from "../components/user/userList";

import ContentRegister from "../components/componentsform/contentRegister";



export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null
    }
  }
  componentDidMount() {
    var url_atual = window.location.href;
    var ar_url = url_atual.split("/");
    this.setState({ url: ar_url[3] });
  }
  render() {
    return (
      <div>
        {this.state.url != "institutional" ?
          <Navbar /> : null}
        <Switch>

          <PrivateRoute exact={true} path="/private" component={Home} />
          <Route exact={true} path="/" component={Home} />

          <Route exact={true} path="/login" component={Login} />
          {/* Empresa */}
          <Route exact={true} path="/cadastro-empresa" component={RegisterCompany} />
          <Route exact={true} path="/consultar-empresa" component={ConsultCompany} />
          {/* Recurso */}
          <Route exact={true} path="/cadastro-recurso" component={RegisterResource} />
          <Route exact={true} path="/consultar-recurso" component={ConsultResource} />
          {/* Usuário */}
          <Route exact={true} path="/cadastro-usuario" component={RegisterUsuario} />
          <Route exact={true} path="/consultar-usuario" component={UserList} />
          {/* Problema */}
          <Route exact={true} path="/cadastro-problema" component={RegisterProblem} />
          <Route exact={true} path="/consultar-problema" component={ConsultProblem} />
          {/* Institucional */}
          <Route exact={true} path="/institutional" component={Institutional} />
          <Route exact={true} path="/registro-empresa" component={ContentRegister} />

          <Route exact={true} component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
