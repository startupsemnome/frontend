import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Row>
      <Col sm="3">
        <Card body>
          <CardTitle>Empresas</CardTitle>
          <CardText>Os numeros estão representando a quantidade de empresas que foram cadastradas.</CardText>
          <br></br>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Recursos</CardTitle>
          <CardText>Os numeros estão representando a quantidade de recursos que foram cadastrados.</CardText>
          <br></br>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Problema</CardTitle>
          <CardText>Os numeros estão representando a quantidade de problemas que foram cadastrados.</CardText>
          <br></br>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Usuário</CardTitle>
          <CardText>Os numeros estão representando a quantidade de usuários que foram cadastrados.</CardText>
          <br></br>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;