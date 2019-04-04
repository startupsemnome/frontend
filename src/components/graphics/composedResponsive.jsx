import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class ComposedResponsive extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/9wnuL90w/';
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  diaDaSemana(semana) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    var data = today;
    var arr = data.split("/").reverse();
    var teste = new Date(arr[0], arr[1] - 1, arr[2]);
    var dia = teste.getDay();
    return semana[dia]
  }
  criaData() {

    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    var dia = this.diaDaSemana(semana);

    var data = [];
    for (let index = 0; index < semana.length; index++) {
      var obj = {};
      if (dia === semana[index]) {
        obj.name = "HOJE";
        obj.Entrada = this.props.qtdAtual;
      } else {
        obj.name = semana[index];
        obj.Entrada = index;
      }
      data.push(obj);
    }
    this.setState({ data });
  }
  componentDidMount() {
    this.criaData();
  }
  render() {

    return (
      <div style={{ width: '100%', height: 300, display: `${this.props.show === this.props.type ? 'block' : 'none'}` }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={this.state.data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Entrada" fill="#e9e5fd" stroke="#8884d8" />
            <Bar dataKey="Progresso" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="Análise" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
