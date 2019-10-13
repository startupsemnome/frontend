import React, { Component } from "react";

export default class WhoWeAre extends Component {
  render() {
    return (
      <div id="header10" style={{ marginBottom: "20px" }}>
        <div className="row">
          <h1
            style={{
              marginTop: "45px",
              marginLeft: "40px",
              fontSize: "30px"
            }}
            className="titleInstitutional"
          >
            Quem somos nós
          </h1>
        </div>
        <div className="row">
          <div
            className="col-md-10"
            style={{ display: "flex", margin: "auto", marginTop: "60px" }}
          >
            <div className="col-md-4">
              <img
                className="rounded-circle"
                style={{
                  width: "100%",
                  border: "1px solid rgb(12, 225, 246)",
                  boxShadow: "-7px -1px 20px 0 rgba(0, 0, 0, 0.1)",
                  height: "260px"
                }}
                src="https://blog.softwareavaliacao.com.br/wp-content/uploads/2017/05/0089-01.jpg"
                alt=""
                srcset=""
              />
              <div>
                <h2
                  style={{
                    color: "white",
                    backgroundColor: "#29e4f7",
                    margin: "20px",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "11px"
                  }}
                >
                  Somos jovens apaixonados por tecnologia, movidos por desafios.
                  {"                 "}
                  <br />
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="rounded-circle"
                style={{
                  width: "100%",
                  border: "1px solid rgb(12, 225, 246)",
                  boxShadow: "-7px -1px 20px 0 rgba(0, 0, 0, 0.1)",
                  height: "260px"
                }}
                src="http://diabetesevida.com.br/on/wp-content/uploads/2019/04/quem-somos.png"
                alt=""
                srcset=""
              />
              <div>
                <h2
                  style={{
                    color: "white",
                    backgroundColor: "#29e4f7",
                    margin: "20px",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "11px"
                  }}
                >
                  Facilitamos a vida dos dos clientes, com soluções ágeis,
                  praticas e diretas.
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="rounded-circle"
                style={{
                  width: "100%",
                  border: "1px solid rgb(12, 225, 246)",
                  boxShadow: "-7px -1px 20px 0 rgba(0, 0, 0, 0.1)",
                  height: "260px"
                }}
                src="https://image.freepik.com/vetores-gratis/design-de-vetor-de-desenho-animado-de-trabalho-em-equipe-de-carater-empresario_1473-147.jpg"
                alt=""
                srcset=""
              />
              <div st>
                <h2
                  style={{
                    color: "white",
                    backgroundColor: "#29e4f7",
                    margin: "20px",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "11px"
                  }}
                >
                  Temos a melhor solução para seu negócio, conheça a nossa
                  plataforma.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
