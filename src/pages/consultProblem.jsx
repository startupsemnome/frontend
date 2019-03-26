import React, { Component } from "react";
import ProblemList from "../components/problem/problemList";

export default class ConsultProblem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProblemList />
      </div>
    );
  }
}
