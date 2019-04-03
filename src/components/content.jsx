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
        <h3 className="contentLogin">Olá usuario</h3>
        <ContentLoginform history={this.props.history} setNavbarOpen={this.props.setNavbarOpen} />
      </div>
    );
  }
}
export default Content;