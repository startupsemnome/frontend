import React, { Component } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";
import "./../../bootstrap.min.css";
class ContentLoginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lpassword: "",
      ButtoRegistro: false,
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <form action="/action_page.php">
          <label className="conlono col-md-3">Nome da Organização</label>
          <input
            className="contentlo col-md-6"
            type="text"
            id="fname"
            name="nome"
            placeholder="Nome de login"
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
            required
          />
          <label className="conlose col-md-3">Senha</label>
          <input
            className="contentlo  col-md-6"
            type="password"
            max="11"
            id="lpassword"
            name="lastname"
            placeholder="Senha de login"
            value={this.state.lpassword}
            onChange={e => this.setState({ lpassword: e.target.value })}
            required
          />
          <div className="row bottonrform" >
            <Button isOpen={this.state.ButtoRegistro} className="regemp btn btn-success">
              <Link to="/registro-empresa" className="buttonRegistro">
                Login
                </Link>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default ContentLoginform; 
