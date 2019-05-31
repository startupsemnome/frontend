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

        const segManha = !Boolean(disponibilidade.segunda.substring(0, 1));
        const segTarde = !Boolean(disponibilidade.segunda.substring(1, 1));
        const segNoite = !Boolean(disponibilidade.segunda.substring(2, 1));

        const terManha = !Boolean(disponibilidade.terca.substring(0, 1));
        const terTarde = !Boolean(disponibilidade.terca.substring(1, 1));
        const terNoite = !Boolean(disponibilidade.terca.substring(2, 1));

        const quaManha = !Boolean(disponibilidade.quarta.substring(0, 1));
        const quaTarde = !Boolean(disponibilidade.quarta.substring(1, 1));
        const quaNoite = !Boolean(disponibilidade.quarta.substring(2, 1));

        const quiManha = !Boolean(disponibilidade.quinta.substring(0, 1));
        const quiTarde = !Boolean(disponibilidade.quinta.substring(1, 1));
        const quiNoite = !Boolean(disponibilidade.quinta.substring(2, 1));

        const sexManha = !Boolean(disponibilidade.sexta.substring(0, 1));
        const sexTarde = !Boolean(disponibilidade.sexta.substring(1, 1));
        const sexNoite = !Boolean(disponibilidade.sexta.substring(2, 1));

        console.log(disponibilidade.sabado);
        const sabManha = !Boolean(disponibilidade.sabado.substring(0, 1));
        const sabTarde = !Boolean(disponibilidade.sabado.substring(1, 1));
        const sabNoite = !Boolean(disponibilidade.sabado.substring(2, 1));
        console.log(sabManha);
        console.log(sabTarde);
        console.log(sabNoite);

        const domManha = !Boolean(disponibilidade.domingo.substring(0, 1));
        const domTarde = !Boolean(disponibilidade.domingo.substring(1, 1));
        const domNoite = !Boolean(disponibilidade.domingo.substring(2, 1));

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
    // const valueNew = e.target.value === "on" ? false : "1";
    change[e.target.name] = !this.state[e.target.name];
    console.log(!this.state[e.target.name]);
    console.log(change[e.target.name]);
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
                      checked={segManha}
                    />
                  </td>
                  <td>
                    <input
                      name="terManha"
                      type="checkbox"
                      id="m-terca"
                      onChange={this.handleChange}
                      checked={terManha}
                    />
                  </td>
                  <td>
                    <input
                      name="quaManha"
                      type="checkbox"
                      id="m-quarta"
                      onChange={this.handleChange}
                      checked={quaManha}
                    />
                  </td>
                  <td>
                    <input
                      name="quiManha"
                      type="checkbox"
                      id="m-quinta"
                      onChange={this.handleChange}
                      checked={quiManha}
                    />
                  </td>
                  <td>
                    <input
                      name="sexManha"
                      type="checkbox"
                      id="m-sexta"
                      onChange={this.handleChange}
                      checked={sexManha}
                    />
                  </td>
                  <td>
                    <input
                      name="sabManha"
                      type="checkbox"
                      id="m-sabado"
                      onChange={this.handleChange}
                      checked={sabManha}
                    />
                  </td>
                  <td>
                    <input
                      name="domManha"
                      type="checkbox"
                      id="m-domingo"
                      onChange={this.handleChange}
                      checked={domManha}
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
                      checked={segTarde}
                    />
                  </td>
                  <td>
                    <input
                      name="terTarde"
                      type="checkbox"
                      id="t-terca"
                      onChange={this.handleChange}
                      checked={terTarde}
                    />
                  </td>
                  <td>
                    <input
                      name="quaTarde"
                      type="checkbox"
                      id="t-quarta"
                      onChange={this.handleChange}
                      checked={quaTarde}
                    />
                  </td>
                  <td>
                    <input
                      name="quiTarde"
                      type="checkbox"
                      id="t-quinta"
                      onChange={this.handleChange}
                      checked={quiTarde}
                    />
                  </td>
                  <td>
                    <input
                      name="sexTarde"
                      type="checkbox"
                      id="t-sexta"
                      onChange={this.handleChange}
                      checked={sexTarde}
                    />
                  </td>
                  <td>
                    <input
                      name="sabTarde"
                      type="checkbox"
                      id="t-sabado"
                      onChange={this.handleChange}
                      checked={sabTarde}
                    />
                  </td>
                  <td>
                    <input
                      name="domTarde"
                      type="checkbox"
                      id="t-domingo"
                      onChange={this.handleChange}
                      checked={domTarde}
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
                      checked={segNoite}
                    />
                  </td>
                  <td>
                    <input
                      name="terNoite"
                      type="checkbox"
                      id="n-terca"
                      onChange={this.handleChange}
                      checked={terNoite}
                    />
                  </td>
                  <td>
                    <input
                      name="quaNoite"
                      type="checkbox"
                      id="n-quarta"
                      onChange={this.handleChange}
                      checked={quaNoite}
                    />
                  </td>
                  <td>
                    <input
                      name="quiNoite"
                      type="checkbox"
                      id="n-quinta"
                      onChange={this.handleChange}
                      checked={quiNoite}
                    />
                  </td>
                  <td>
                    <input
                      name="sexNoite"
                      type="checkbox"
                      id="n-sexta"
                      onChange={this.handleChange}
                      checked={sexNoite}
                    />
                  </td>
                  <td>
                    <input
                      name="sabNoite"
                      type="checkbox"
                      id="n-sabado"
                      onChange={this.handleChange}
                      checked={sabNoite}
                    />
                  </td>
                  <td>
                    <input
                      name="domNoite"
                      type="checkbox"
                      id="n-domingo"
                      onChange={this.handleChange}
                      checked={domNoite}
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
