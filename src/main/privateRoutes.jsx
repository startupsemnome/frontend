import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import { Dispatch } from "redux";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { userAuth: false, loaded: false };
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  render() {
    return this.isLoggedIn();
  }

  componentDidMount() {
    this.getAuth();
  }

  getAuth() {
    if (sessionStorage.getItem("user")) {
      this.setState({
        userAuth: true,
        loaded: true
      });
    } else {
      this.setState({
        userAuth: false,
        loaded: true
      });
    }
  }

  isLoggedIn() {
    if (!this.state.loaded) {
      return null;
    }

    if (!this.state.userAuth) {
      return <Redirect to="/login" />;
    } else {
      return <Route path={this.props.path} component={this.props.component} />;
    }
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);