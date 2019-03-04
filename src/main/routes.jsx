import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route, Router } from "react-router-dom";
import { browserHistory } from "react-router";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import RegisterCompany from "../pages/registerCompany";
import Home from "../pages/home";

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/cadastro-empresa" component={RegisterCompany} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth, network: state.network });

export default connect(
  mapStateToProps,
  null
)(Routes);
