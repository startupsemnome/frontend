import React, { Component } from "react";
import Content from "../components/content";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <Content />
      </div>
    );
  }
}
