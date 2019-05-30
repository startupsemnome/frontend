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
      segNoite: false
    };
  }
  componentDidMount() {
    axios
      .get(env.API + "resource/" + 1)
      .then(response => {
        // handle success
        const disp = response.data.disponibilidade;
        const segManha = disp.segunda.substring(0, 1);
        const segTarde = disp.segunda.substring(1, 1);
        const segNoite = disp.segunda.substring(2, 1);

        // this.setState({ disponibilidade: disp, segManha: disp.  });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  checkedOrNo = (str, periodo) => {
    if (periodo === "MANHÃ") {
      if (str.sub(0, 0) == 1) {
        return true;
      }
    }
    return true;
  };

  render() {
    const { segManha, segTarde, segNoite } = this.state;
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
                      name="segunda"
                      type="checkbox"
                      id="m-segunda"
                      checked={segManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="terça"
                      type="checkbox"
                      id="m-terca"
                      checked={terManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quarta"
                      type="checkbox"
                      id="m-quarta"
                      checked={quaManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quinta"
                      type="checkbox"
                      id="m-quinta"
                      checked={quiManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sexta"
                      type="checkbox"
                      id="m-sexta"
                      checked={sexManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sabado"
                      type="checkbox"
                      id="m-sabado"
                      checked={sabManha === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="domingo"
                      type="checkbox"
                      id="m-domingo"
                      checked={domManha === "1" ? true : false}
                    />
                  </td>
                </tr>
                {/* LINHA - TARDE */}
                <tr>
                  <td>Tarde</td>
                  <td>
                    <input
                      name="segunda"
                      type="checkbox"
                      id="t-segunda"
                      checked={segTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="terca"
                      type="checkbox"
                      id="t-terca"
                      checked={terTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quarta"
                      type="checkbox"
                      id="t-quarta"
                      checked={quaTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quinta"
                      type="checkbox"
                      id="t-quinta"
                      checked={quiTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sexta"
                      type="checkbox"
                      id="t-sexta"
                      checked={sexTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sabado"
                      type="checkbox"
                      id="t-sabado"
                      checked={sabTarde === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="domingo"
                      type="checkbox"
                      id="t-domingo"
                      checked={domTarde === "1" ? true : false}
                    />
                  </td>
                  {/* LINHA - NOITE */}
                </tr>
                <tr>
                  <td>Noite</td>
                  <td>
                    <input
                      name="segunda"
                      type="checkbox"
                      id="n-segunda"
                      checked={segNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="terca"
                      type="checkbox"
                      id="n-terca"
                      checked={terNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quarta"
                      type="checkbox"
                      id="n-quarta"
                      checked={quaNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="quinta"
                      type="checkbox"
                      id="n-quinta"
                      checked={quiNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sexta"
                      type="checkbox"
                      id="n-sexta"
                      checked={sexNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="sabado"
                      type="checkbox"
                      id="n-sabado"
                      checked={sabNoite === "1" ? true : false}
                    />
                  </td>
                  <td>
                    <input
                      name="domingo"
                      type="checkbox"
                      id="n-domingo"
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
