import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class poxaNaoFoiDessaVez extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div style={{ backgroundColor: "#174f78", padding: 20 }}>
              <h1 className="h1-main">
                Você Ainda não foi chamado pra um projeto, atualize seu cadastro e iremos entrar em contato assim que encontrarmos um projeto com seu perfil.{" "}
                <br />
                <br />
                <Link
                  className="join-btn-no-transform mr-1 login col-md-12"
                  to="institutional#header3"
                  style={{ textDecoration: "none" }}
                >
                  Atualizar Cadastro
                </Link>
              </h1>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
