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
import DetailsCompany from "../pages/detailsCompany";
import EditCompany from "../pages/editCompany";
import ConsultCompany from "../pages/consultCompany";

import Home from "../pages/home";
import NotFound from "../pages/notFound";
import RegisterResource from "../pages/registerResource";
import RegisterProblem from "../pages/registerProblem";
import EditProblem from "../pages/editProblem";
import DetailsProblem from "../pages/detailsProblem";
import RegisterUsuario from "../pages/registerUser";
import Login from "../pages/login";
import Institutional from "../pages/institutional";
import EditProblemForm from "../components/problem/editProblemForm";
import ConsultProblemForm from "../components/problem/consultProblemForm";
import ResourceDetails from "../pages/resourceDetails";
import EditResource from "../pages/editResource";
import UserList from "../components/user/userList";
import ConsultProblem from "../pages/consultProblem";
import ContentRegister from "../components/componentsform/contentRegister";
import ConsultResource from "../pages/consultResource";
 

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
          <Route exact={true} path="/cadastro-empresa" component={RegisterCompany} />
          <Route exact={true} path="/detalhes-empresa" component={DetailsCompany} />
          <Route exact={true} path="/editar-empresa" component={EditCompany} />
          <Route exact={true} path="/consultar-empresa" component={ConsultCompany} />

          <Route
            exact={true}
            path="/cadastro-recurso"
            component={RegisterResource}
          />
          <Route
            exact={true}
            path="/detalhes-recurso"
            component={ResourceDetails}
          />
          <Route 
          exact={true} 
          path="/editar-recurso" 
          component={EditResource}
          />

          <Route 
          exact={true} 
          path="/consultar-recurso" 
          component={ConsultResource}
          />
          
          <Route exact={true} 
          path="/consultar-usuario" 
          component={UserList} 
          />
          <Route
            exact={true}
            path="/cadastro-usuario"
            component={RegisterUsuario}
          />
          <Route exact={true} path="/login" component={Login} />

          <Route
            exact={true}
            path="/cadastro-problema"
            component={RegisterProblem}
          />
          <Route
            exact={true}
            path="/detalhes-problema"
            component={DetailsProblem}
          />
          <Route exact={true} path="/editar-problema" component={EditProblem} />

          <Route
            exact={true}
            path="/consultar-problema"
            component={ConsultProblem} />

          <Route exact={true} path="/institucional" component={Institutional} />

          <Route
            exact={true}
            path="/detalhes-recurso"
            component={ResourceDetails}
          />
          <Route exact={true} path="/editar-recurso" component={EditResource} />

          <Route
            exact={true}
            path="/registro-empresa"
            component={ContentRegister}
          />
          <Route exact={true} component={NotFound} />
        
        </Switch>
        <Footer/>
      </div>
    );
  }
}
