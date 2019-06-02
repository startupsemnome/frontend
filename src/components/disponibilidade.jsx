import React, { Component } from "react";

import axios from "axios";
import env from "./../consts";

class Disponibilidade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disponibilidade: this.props.disp,
      segManha: "0",
      segTarde: "0",
      segNoite: "0",
      terManha: "0",
      terTarde: "0",
      terNoite: "0",
      quaManha: "0",
      quaTarde: "0",
      quaNoite: "0",
      quiManha: "0",
      quiTarde: "0",
      quiNoite: "0",
      sexManha: "0",
      sexTarde: "0",
      sexNoite: "0",
      sabManha: "0",
      sabTarde: "0",
      sabNoite: "0",
      domManha: "0",
      domTarde: "0",
      domNoite: "0"
    };
  }

  loadVariablesDisponibility = () => {
    const disponibilidade = this.state.disponibilidade;
    console.log(this.props.disp);
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
  };

  componentDidMount() {
    this.loadVariablesDisponibility();
  }

  handleChange = e => {
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

    const n = e.target.name;
    let change = {};
    const valueNew = this.state[n] === "1" ? "0" : "1";
    change[n] = valueNew;

    const segunda = `${n === "segManha" ? valueNew : segManha}${
      n === "segTarde" ? valueNew : segTarde
    }${n === "segNoite" ? valueNew : segNoite}`;

    const terca = `${n === "terManha" ? valueNew : terManha}${
      n === "terTarde" ? valueNew : terTarde
    }${n === "terNoite" ? valueNew : terNoite}`;

    const quarta = `${n === "quaManha" ? valueNew : quaManha}${
      n === "quaTarde" ? valueNew : quaTarde
    }${n === "quaNoite" ? valueNew : quaNoite}`;

    const quinta = `${n === "quiManha" ? valueNew : quiManha}${
      n === "quiTarde" ? valueNew : quiTarde
    }${n === "quiNoite" ? valueNew : quiNoite}`;

    const sexta = `${n === "sexManha" ? valueNew : sexManha}${
      n === "sexTarde" ? valueNew : sexTarde
    }${n === "sexNoite" ? valueNew : sexNoite}`;

    const sabado = `${n === "sabManha" ? valueNew : sabManha}${
      n === "sabTarde" ? valueNew : sabTarde
    }${n === "sabNoite" ? valueNew : sabNoite}`;

    const domingo = `${n === "domManha" ? valueNew : domManha}${
      n === "domTarde" ? valueNew : domTarde
    }${n === "domNoite" ? valueNew : domNoite}`;

    const newDisponibilidade = {
      segunda,
      terca,
      quarta,
      quinta,
      sexta,
      sabado,
      domingo
    };
    this.props.handleChangeDisp(newDisponibilidade);
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
    if (domNoite) {
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
