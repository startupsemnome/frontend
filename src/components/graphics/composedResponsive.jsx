import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Empresas', Análise: 989, Progresso: 1200, Entrada: 1289,
  },
  {
    name: 'Recursos', Análise: 868, Progresso: 967, Entrada: 1090,
  },
  {
    name: 'Usuários', Análise: 677, Progresso: 789, Entrada: 989,
  },
  {
    name: 'Problemas', Análise: 1121, Progresso: 1221, Entrada: 1228,
  },
  {
    name: 'Diversos', Análise: 400, Progresso: 401, Entrada: 433,
  },
];


export default class ComposedResponsive extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/9wnuL90w/';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Entrada" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="Progresso" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="Análise" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
