import React, { Component } from "react";

import axios from "axios";
import env from "./../consts";

class Disponibilidade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disponibilidade: null
    };
  }
  componentDidMount() {
    axios
      .get(env.API + "resource/" + 1)
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ disponibilidade: data.disponibilidade });
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
    const { disp } = this.state.disponibilidade;
    if (disp) {
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
                      checked={() => this.checkedOrNo(disp.segunda, "MANHÃ")}
                    />
                  </td>
                  <td>
                    <input name="terça" type="checkbox" id="m-terca" />
                  </td>
                  <td>
                    <input name="quarta" type="checkbox" id="m-quarta" />
                  </td>
                  <td>
                    <input name="quinta" type="checkbox" id="m-quinta" />
                  </td>
                  <td>
                    <input name="sexta" type="checkbox" id="m-sexta" />
                  </td>
                  <td>
                    <input name="sabado" type="checkbox" id="m-sabado" />
                  </td>
                  <td>
                    <input name="domingo" type="checkbox" id="m-domingo" />
                  </td>
                </tr>
                {/* LINHA - TARDE */}
                <tr>
                  <td>Tarde</td>
                  <td>
                    <input name="segunda" type="checkbox" id="t-segunda" />
                  </td>
                  <td>
                    <input name="terca" type="checkbox" id="t-terca" />
                  </td>
                  <td>
                    <input name="quarta" type="checkbox" id="t-quarta" />
                  </td>
                  <td>
                    <input name="quinta" type="checkbox" id="t-quinta" />
                  </td>
                  <td>
                    <input name="sexta" type="checkbox" id="t-sexta" />
                  </td>
                  <td>
                    <input name="sabado" type="checkbox" id="t-sabado" />
                  </td>
                  <td>
                    <input name="domingo" type="checkbox" id="t-domingo" />
                  </td>
                  {/* LINHA - NOITE */}
                </tr>
                <tr>
                  <td>Noite</td>
                  <td>
                    <input name="segunda" type="checkbox" id="n-segunda" />
                  </td>
                  <td>
                    <input name="terca" type="checkbox" id="n-terca" />
                  </td>
                  <td>
                    <input name="quarta" type="checkbox" id="n-quarta" />
                  </td>
                  <td>
                    <input name="quinta" type="checkbox" id="n-quinta" />
                  </td>
                  <td>
                    <input name="sexta" type="checkbox" id="n-sexta" />
                  </td>
                  <td>
                    <input name="sabado" type="checkbox" id="n-sabado" />
                  </td>
                  <td>
                    <input name="domingo" type="checkbox" id="n-domingo" />
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
