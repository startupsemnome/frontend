import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route, Router, IndexRoute } from "react-router-dom";
import { browserHistory } from "react-router";

// Components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import PrivateRoute from "./privateRoutes";
// Pages
import Dashboard from "../pages/home";
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
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>

          <Route exact={true} path="/institutional" component={Institutional} />
          <Route exact={true} path="/" component={Institutional} />
          <Route exact={true} path="/login" component={Login} />

          <PrivateRoute exact={true} path="/dashboard" component={Dashboard} />

          <PrivateRoute exact={true} path="/cadastro-empresa" component={RegisterCompany} />
          <PrivateRoute exact={true} path="/consultar-empresa" component={ConsultCompany} />

          <PrivateRoute exact={true} path="/cadastro-recurso" component={RegisterResource} />
          <PrivateRoute exact={true} path="/consultar-recurso" component={ConsultResource} />

          <PrivateRoute exact={true} path="/cadastro-usuario" component={RegisterUsuario} />
          <PrivateRoute exact={true} path="/consultar-usuario" component={UserList} />

          <PrivateRoute exact={true} path="/cadastro-problema" component={RegisterProblem} />
          <PrivateRoute exact={true} path="/consultar-problema" component={ConsultProblem} />

          <PrivateRoute exact={true} path="/registro-empresa" component={ContentRegister} />

          <Route exact={true} component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
