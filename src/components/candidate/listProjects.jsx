import React from 'react';
import { Jumbotron, Alert } from 'reactstrap';
import TableProjects from "./tableProjects";
import ModalReturn from "./modalReturn";


const ListProjects = (props) => {
  return (
    <div>
      <Jumbotron>
        <h3 className="display-3">Olá, Candidato!</h3>
        <p className="lead">Se estiver lendo isso, significa que, você foi pré-escolhido para participar de alguns projetos.</p>
        <hr className="my-2" />
        <Alert color="success">
          A relação abaixo, contem alguns projetos que você foi <a className="alert-link">pré-escolhido para participar</a>.
      </Alert>
        <p className="lead">
          <TableProjects />
          <ModalReturn />
        </p>
      </Jumbotron>
    </div>
  );
};

export default ListProjects;