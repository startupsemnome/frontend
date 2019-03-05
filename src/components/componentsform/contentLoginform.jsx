import React, { Component } from "react";
class ContentLoginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lpassword: "",
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div>
          <form action="/action_page.php">
            <label className="A col-md-2">Nome da Organização</label>
            <input
              className="A col-md-10"
              type="text"
              id="fname"
              name="nome"
              placeholder="Nome de login"
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
              required
            />
            <label className="A col-md-2">Senha</label>
            <input
              className="A col-md-10"
              type="password"
              max="11"
              id="lpassword"
              name="lastname"
              placeholder="Senha de login"
              value={this.state.lpassword}
              onChange={e => this.setState({ lpassword: e.target.value })}
              required
            />
            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Enviar"
              className="btn btn-success"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default ContentLoginform; 
