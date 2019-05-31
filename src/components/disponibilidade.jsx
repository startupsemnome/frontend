import React, { Component } from "react";

import axios from "axios";
import env from "./../consts";

class Disponibilidade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disponibilidade: null,
      segManha: false,
      segTarde: false,
      segNoite: false,
      terManha: false,
      terTarde: false,
      terNoite: false,
      quaManha: false,
      quaTarde: false,
      quaNoite: false,
      quiManha: false,
      quiTarde: false,
      quiNoite: false,
      sexManha: false,
      sexTarde: false,
      sexNoite: false,
      sabManha: false,
      sabTarde: false,
      sabNoite: false,
      domManha: false,
      domTarde: false,
      domNoite: false
    };
  }
  componentDidMount() {
    axios
      .get(env.API + "resource/" + 1)
      .then(response => {
        // handle success
        const disponibilidade = response.data.disponibilidade;

        const segManha = disponibilidade.segunda.substring(1, 0);
        const segTarde = disponibilidade.segunda.substring(2, 1);
        const segNoite = disponibilidade.segunda.substring(3, 2);

        const terManha = disponibilidade.terca.substring(1, 0);
        const terTarde = disponibilidade.terca.substring(2, 1);
        const terNoite = disponibilidade.terca.substring(3, 2);

        const quaManha = disponibilidade.quarta.substring(1, 0);
        const quaTarde = disponibilidade.quarta.substring(2, 1);
        const quaNoite = disponibilidade.quarta.substring(3, 2);

        const quiManha = disponibilidade.quinta.substring(1, 0);
        const quiTarde = disponibilidade.quinta.substring(2, 1);
        const quiNoite = disponibilidade.quinta.substring(3, 2);

        const sexManha = disponibilidade.sexta.substring(1, 0);
        const sexTarde = disponibilidade.sexta.substring(2, 1);
        const sexNoite = disponibilidade.sexta.substring(3, 2);

        const sabManha = disponibilidade.sabado.substring(1, 0);
        const sabTarde = disponibilidade.sabado.substring(2, 1);
        const sabNoite = disponibilidade.sabado.substring(3, 2);

        const domManha = disponibilidade.domingo.substring(0, 1);
        const domTarde = disponibilidade.domingo.substring(2, 1);
        const domNoite = disponibilidade.domingo.substring(3, 2);

        this.setState({
          disponibilidade,
          segManha,
          segTarde,
          segNoite,
          terManha,
          terTarde,
          terNoite,
          quaManha,
          quaTarde,
          quaNoite,
          quiManha,
          quiTarde,
          quiNoite,
          sexManha,
          sexTarde,
          sexNoite,
          sabManha,
          sabTarde,
          sabNoite,
          domManha,
          domTarde,
          domNoite
        });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  handleChange = e => {
    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change = {};
    const valueNew = this.state[e.target.name] === "1" ? "0" : "1";

    change[e.target.name] = valueNew;
    this.setState(change);
  };

  render() {
    const {
      disponibilidade,
      segManha,
      segTarde,
      segNoite,
      terManha,
      terTarde,
      terNoite,
      quaManha,
      quaTarde,
      quaNoite,
      quiManha,
      quiTarde,
      quiNoite,
      sexManha,
      sexTarde,
      sexNoite,
      sabManha,
      sabTarde,
      sabNoite,
      domManha,
      domTarde,
      domNoite
    } = this.state;
    if (disponibilidade) {
      return (
        <div className="col-md-12">
          <div className="">
            <table className="table table">
              <thead>
                <tr>
                  <th scope="col" style={{ display: "none" }}>
                    ID
                  </th>
                  <th scope="col">Período</th>
                  <th scope="col">Segunda-feira</th>
                  <th scope="col">Terça-feira</th>
                  <th scope="col">Quarta-feira</th>
                  <th scope="col">Quinta-feira</th>
                  <th scope="col">Sexta-feira</th>
                  <th scope="col">Sábado</th>
                  <th scope="col">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manhã</td>
                  <td>
                    <input
                      type="checkbox"
                      id="m-segunda"
                      name="segManha"
                      onChange={this.handleChange}
                      checked={segManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="terManha"
                      type="checkbox"
                      id="m-terca"
                      onChange={this.handleChange}
                      checked={terManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quaManha"
                      type="checkbox"
                      id="m-quarta"
                      onChange={this.handleChange}
                      checked={quaManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quiManha"
                      type="checkbox"
                      id="m-quinta"
                      onChange={this.handleChange}
                      checked={quiManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sexManha"
                      type="checkbox"
                      id="m-sexta"
                      onChange={this.handleChange}
                      checked={sexManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sabManha"
                      type="checkbox"
                      id="m-sabado"
                      onChange={this.handleChange}
                      checked={sabManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="domManha"
                      type="checkbox"
                      id="m-domingo"
                      onChange={this.handleChange}
                      checked={domManha === "1" ? true : false}
                    />
                  </td>
                </tr>
                {/* LINHA - TARDE */}
                <tr>
                  <td>Tarde</td>
                  <td>
                    <input
                      name="segTarde"
                      type="checkbox"
                      id="t-segunda"
                      onChange={this.handleChange}
                      checked={segTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="terTarde"
                      type="checkbox"
                      id="t-terca"
                      onChange={this.handleChange}
                      checked={terTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quaTarde"
                      type="checkbox"
                      id="t-quarta"
                      onChange={this.handleChange}
                      checked={quaTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quiTarde"
                      type="checkbox"
                      id="t-quinta"
                      onChange={this.handleChange}
                      checked={quiTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sexTarde"
                      type="checkbox"
                      id="t-sexta"
                      onChange={this.handleChange}
                      checked={sexTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sabTarde"
                      type="checkbox"
                      id="t-sabado"
                      onChange={this.handleChange}
                      checked={sabTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="domTarde"
                      type="checkbox"
                      id="t-domingo"
                      onChange={this.handleChange}
                      checked={domTarde === "1" ? true : false}
                    />
                  </td>
                  {/* LINHA - NOITE */}
                </tr>
                <tr>
                  <td>Noite</td>
                  <td>
                    <input
                      name="segNoite"
                      type="checkbox"
                      id="n-segunda"
                      onChange={this.handleChange}
                      checked={segNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="terNoite"
                      type="checkbox"
                      id="n-terca"
                      onChange={this.handleChange}
                      checked={terNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quaNoite"
                      type="checkbox"
                      id="n-quarta"
                      onChange={this.handleChange}
                      checked={quaNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quiNoite"
                      type="checkbox"
                      id="n-quinta"
                      onChange={this.handleChange}
                      checked={quiNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sexNoite"
                      type="checkbox"
                      id="n-sexta"
                      onChange={this.handleChange}
                      checked={sexNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sabNoite"
                      type="checkbox"
                      id="n-sabado"
                      onChange={this.handleChange}
                      checked={sabNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="domNoite"
                      type="checkbox"
                      id="n-domingo"
                      onChange={this.handleChange}
                      checked={domNoite === "1" ? true : false}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Disponibilidade;
