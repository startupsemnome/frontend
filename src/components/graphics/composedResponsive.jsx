import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import axios from "axios";
import env from "./../../consts";

export default class ComposedResponsive extends PureComponent {
  static jsfiddleUrl = "//jsfiddle.net/alidingling/9wnuL90w/";
  constructor(props) {
    super(props);
    this.state = { data: [], restrospect: [] };
    this.getEntradaGrafico = this.getEntradaGrafico.bind(this);
  }

  diaDaSemana(semana) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    var data = today;
    var arr = data.split("/").reverse();
    var teste = new Date(arr[0], arr[1] - 1, arr[2]);
    var dia = teste.getDay();
    return semana[dia];
  }

  getEntradaGrafico() {
    axios
      .get(env.API + "cadastro-retrospect?show=" + this.props.show)
      .then(response => {
        // handle success
        this.setState({ restrospect: response.data });
        this.criaData();
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  async criaData() {
    var semana = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado"
    ];

    var dia = this.diaDaSemana(semana);

    console.log(this.state.restrospect);
    var data = [];
    for (let index = 0; index < semana.length; index++) {
      var obj = {};
      if (dia === semana[index]) {
        obj.name = "HOJE";
        obj.Entrada = this.props.qtdAtual;
      } else {
        obj.name = semana[index];
        obj.Entrada = this.state.restrospect[index];
      }
      data.push(obj);
    }
    this.setState({ data });
  }
  componentDidMount() {
    this.getEntradaGrafico();
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: 300,
          display: `${this.props.show === this.props.type ? "block" : "none"}`,
          border: "8px solid #3e3737"
        }}
      >
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={this.state.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid stroke="white" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="Entrada"
              fill="#black"
              stroke="white"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
