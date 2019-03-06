import React, { Component } from "react";
import DetailsProblemForm from "../components/problem/detailsProblemForm"

export default class DetailsProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>DetailsProblem</h1>

        <DetailsProblemForm />

      </div>
    );
  }
}
