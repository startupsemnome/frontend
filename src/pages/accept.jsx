import React, { Component } from "react";
import ListProjects from "../components/candidate/listProjects";


class Accept extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ListProjects />
      </div>
    );
  }
}

export default Accept;