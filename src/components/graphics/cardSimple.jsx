import React from 'react';
import { Card, CardTitle, CardText, Slider } from 'react-md';

const style = { maxWidth: 200 };

const CardSimple = () => (
  <Card style={style} className="md-block-centered">
    <CardTitle title="Using CardTitle" subtitle="Empresas" />
    <br></br>
    <CardText>
      <p>
        As informações foram <code>atualizadas</code> conforme a quantidade
        de entrada das empresas.
      </p>
    </CardText>
  </Card>
);

export default CardSimple;