import React, { Component } from "react";
import Feeds from "../components/feedback/feeds";
import { Helmet } from "react-helmet";

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="página responsável por realizar uma lista que contém os feedbacks realizados em forma de lista." />
          <meta name="keywords" content="site, consultar feedbacks, listar feedbacks" />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Consultar Feedbacks</title>
        </Helmet>
        <Feeds history={this.props.history} />
      </div>
    );
  }
}