import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <footer className="App-footer">
          <h5>&copy;Todos os direitos reservados - 2019</h5>
        </footer>
      </div>
    );
  }
}

export default Footer;
