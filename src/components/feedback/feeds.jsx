import React, { Component } from "react";
import { Button, Label, Input } from "reactstrap";
import axios from "axios";
import env from "./../../consts";
class Feeds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  findFeeds() {
    // Chama a api do banco com o método buscar
    axios
      .post(env.API + "sentiment-analysis", { search: this.state.buscaTable })
      .then(response => {
        // apos excluir carrega novamente os usuarios da tabela
        this.setState({ users: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na busca do item");
      });
  }
  render() {
    return (
      <div className="container col-md-9">
        <div>
          <div className="row">
            <div className="col-md-12">
              <h1 className="h1-main">Listar Feed Backs</h1>
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div
              className="col-md-12"
              style={{
                backgroundColor: "#1a8687",
                justifyContent: "center",
                backgroundColor: "rgb(26, 134, 135)",
                display: "flex"
              }}
            >
              <input
                type="text"
                className="inputFields col-md-9"
                style={{ width: "100%", marginleft: "10px" }}
              // onChange={e => this.setState({ userTable: e.target.value })}
              />
              <button
                type="button"
                className="join-btn-no-transform mr-1 login col-md-2"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  marginLeft: "10px"
                }}
              // onClick={() => this.findFeeds()}
              >
                Buscar
                </button>
            </div>
          </div>
          <form className="signupForm form-inline">
            <div className="col-md-12" style={{ border: "solid 14px black", marginTop: "-13px", paddingTop: "8px" }}>
              {/* 
                Nome company v
                descricao do problem v
                nome do recource ou user v
                o feedback do problem text v
                setiment v verde ou x vermelho ou traço amarelo 
            */}
              <div className="col-md-12">
                <label
                  className="labelFields"
                  style={{ display: "flex", fontSize: "22px", justifyContent: "center" }}
                >
                  Razão Social:{" "}
                </label>
                <input
                  className="inputFields col-md-12"
                  style={{ marginTop: "5px" }}
                  // value={this.props.company.razaoSocial}
                  // onChange={e => this.setState({ razaoSocial: e.target.value })}
                  disabled="disabled"
                />
              </div>
              <div className="col-md-12">
                <label
                  className="labelFields"
                  style={{ display: "flex", fontSize: "22px", justifyContent: "center" }}
                >
                  Descrição do problema:{" "}
                </label>
                <input
                  className="inputFields col-md-12"
                  style={{ marginTop: "5px" }}
                  // value={this.props.company.razaoSocial}
                  // onChange={e => this.setState({ razaoSocial: e.target.value })}
                  disabled="disabled"
                />
              </div>
              <div className="col-md-12">
                <label
                  className="labelFields"
                  style={{ display: "flex", fontSize: "22px", justifyContent: "center" }}
                >
                  Nome do Resource:{" "}
                </label>
                <input
                  className="inputFields col-md-12"
                  style={{ marginTop: "5px" }}
                  // value={this.props.company.razaoSocial}
                  // onChange={e => this.setState({ razaoSocial: e.target.value })}
                  disabled="disabled"
                />
              </div>
              <div className="col-md-12">
                <label
                  className="labelFields"
                  style={{ display: "flex", fontSize: "22px", justifyContent: "center" }}
                >
                  Feed-Back:{" "}
                </label>
                <textarea
                  type="text"
                  style={{ marginTop: "5px" }}
                  className="inputFields col-md-12"
                  // value={this.props.company.razaoSocial}
                  // onChange={e => this.setState({ razaoSocial: e.target.value })}
                  disabled="disabled"
                />
              </div>
            </div>
            <br />
          </form>
        </div>
      </div>/*container col-md-8*/
    );
  }
}
export default Feeds;





