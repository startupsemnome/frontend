import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Content from "../components/content";

import { setNavbarOpen } from "./../redux/actions/navbarAction";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.history);
  }

  componentDidMount() {
    this.props.setNavbarOpen(false);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">Login</h1>
        <Content history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ isNavbarOpen: state.navbar });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
