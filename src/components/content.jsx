import React, { Component } from "react";
import ContentRegister from "./componentsform/contentRegister";
import ContentLoginform from "./componentsform/contentLoginform";
class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h3 className="contentLogin">Faça seu login</h3>
        <ContentLoginform history={this.props.history} setNavbarOpen={this.props.setNavbarOpen} />
        <br />
        <p>O ContentRegister vai ser aqui</p>
      </div>
    );
  }
}
export default Content;