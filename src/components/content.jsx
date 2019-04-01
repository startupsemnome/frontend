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
        <ContentLoginform />
      </div>
    );
  }
}
export default Content;