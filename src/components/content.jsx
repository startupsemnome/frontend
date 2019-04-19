import React, { Component } from "react";
import ContentRegister from "./componentsform/contentRegister";
import ContentLoginform from "./componentsform/contentLoginform";
class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="containerLogin" style={{ marginTop: "90px" }}>
        <h3 className="contentLogin">Seja bem Vindo!</h3>
        <ContentLoginform
          history={this.props.history}
          setLogin={this.props.setLogin}
          setNavbarOpen={this.props.setNavbarOpen}
        />
      </div>
    );
  }
}
export default Content;
