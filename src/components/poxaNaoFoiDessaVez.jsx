import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class poxaNaoFoiDessaVez extends Component {
  render() {
    return (
      <div className="container mt-1">
        <div className="row">
          <div className="col-md-12">
            <img
              style={{ width: "100%" }}
              src="https://bized.aacsb.edu/-/media/bized2017/images/issue-article-images/2017/november/why-its-fine-to-fail.ashx?h=355&la=en&mw=1000&w=715&hash=D412DC04C94EE0CAA8EB19FD49CD6701DC77CE24"
              alt=""
            />
            <div style={{ backgroundColor: "#174f78", padding: 20 }}>
              <h1 className="h1-main">
                Todos os projetos erraram o alvo dessa vez, atualize seu
                cadastro para que os projetos consigam encontra-lo melhor.{" "}
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
          </div>
        </div>
      </div>
    );
  }
}
