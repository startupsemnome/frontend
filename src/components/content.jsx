import React, { Component } from "react";
import ContentRegister from "./componentsform/contentRegister";
import ContentLoginform from "./componentsform/contentLoginform";
export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>LOGIN</h1>
        <ContentLoginform />
        <br />
        <p>O ContentRegister vai ser aqui</p>
      </div>
    );
  }
}
