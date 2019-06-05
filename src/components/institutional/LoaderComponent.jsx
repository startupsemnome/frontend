import React from "react";

class LoaderComponent extends React.Component {
  render() {
    return (
      <div
        className="shopping-list"
        style={{ display: "flex", justifyContent: "center", padding: "30px" }}
      >
        <img
          src="http://www.agroeste.com.br/images/loading.gif"
          style={{ height: "115px" }}
        />
      </div>
    );
  }
}

export default LoaderComponent;
