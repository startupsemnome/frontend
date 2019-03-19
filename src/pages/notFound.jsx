import React, { Component } from "react";

// img
import img404 from "./../images/pages/404-page-not-found.png";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1-main">PÁGINA NÃO ENCONTRADA</h1>
        <img className="not-found-img" src={img404} alt="" />
      </div>
    );
  }
}
