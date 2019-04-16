import React from 'react';
import { Table } from 'reactstrap';
import ModalLearnMore from "./modalLearnMore";

class TableProjects extends React.Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Empresa</th>
            <th>Descrição</th>
            <th>Opção</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">1</th>
            <td>Honda</td>
            <td>Configuração de cambio</td>
            <ModalLearnMore />
          </tr>
          <tr>
            <th scope="col">2</th>
            <td>Kia</td>
            <td>Erro na leitura de etiquetas</td>
            <ModalLearnMore />
          </tr>
          <tr>
            <th scope="col">3</th>
            <td>General Motors</td>
            <td>Fabricação com defeitos</td>
            <ModalLearnMore />
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TableProjects;