import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h1 className="h1-main">Listar Usuarios</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ backgroundColor: "#1a8687" }}>
            <label htmlFor="" className="labelFields m-l-1">
              Pesquisar:
            </label>
            <input type="text" className="inputFields" />
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
