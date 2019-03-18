import React, { Component } from "react";
import HomeDash from "./../components/homeDash";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

        <h1 className="h1-main">Seja bem-vindo!</h1>
        <HomeDash />

      </div>
    );
  }
}
