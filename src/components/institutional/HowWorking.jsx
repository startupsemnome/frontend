import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";

import completedStyle from "./completedStyle.jsx";

import { Button } from 'reactstrap';

class HowWorking extends React.Component {
  constructor(props) {
    super(props);
    this.trigger = this.trigger.bind(this);
  }
  trigger() {
    const pag = document.getElementsByClassName("page-about");
    pag[0].classList.toggle("show-info");
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="row" id="header1">
        <div>
          <h1 className="footer-H1-Question">
            Como funciona a plataforma?
          </h1>
        </div>
        <div className="col-md-12">
          <div className="page-about divAbout">
            <div className="left-side divAbout">
              <h1 style={{ color: "black" }}>
                Você cadastra seu perfil e o resto é com a gente! Vejam o exemplo:
              </h1><br></br>
              <br />
              <p style={{ color: "gray" }}>Julio Henrique dos Santos</p>
              <p style={{ color: "gray" }}>
                Consultor AWS e Desenvolvedor FullStack Sr.
              </p>
              <br />
              <p>
                Formado em Sistemas de Informação na Universidade São Judas Tadeu,
                pós graduado em Arquitetura de Software na FIAP e mestrando em Análise de Algorítmo na USP.
                Experiência de 15 anos no mercado de desenvolvimento e atua como especialista de AWS.
                Júlio procura oportunidades na área de Gestão de Negócios e possui disponibilidade de atuação
                das 19h ás 22h.
              </p>
              <br />
              <Button
                className="trigger btnAbout"
                onClick={() => this.trigger()}
              >
              </Button>
            </div>
            <div className="profile-photo divAbout" />
            <div className="right-side-info divAbout">
              <h3>
                Júlio, como vai?<br /> <br /> Temos um projeto de seu interesse!
             </h3>
              <br />
              <br />
              <h5 style={{ color: "white" }}>
                Empresa SOL - Levantamento de Requisitos
              </h5>
              <br />
              <p style={{ color: "white" }}>
                A empresa SOL está com dificuldades em levar os requistos
                para uma nova oportunidade de crescimento.
                Analisamos o seu perfil e vereficamos que você possui as habilidades
                compativeis para resolver este problema.
                Mas, como irá funcionar?
                Você será notificado através da plataforma, terá a oportunidade de saber mais
                sobre o projeto e pronto, basta escolher se aceita ou recusa a oportunidade.
                Eae, topa o desafio?
                {" "}<br /><br /><br />
              </p>
              <br />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default withStyles(completedStyle)(HowWorking);
