import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";

import completedStyle from "./completedStyle.jsx";

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
            Como funciona nossa plataforma?
          </h1>
        </div>
        <div className="col-md-12">
          <div class="page-about divAbout">
            <div className="left-side divAbout">
              <h1 style={{ color: "black" }}>
                Você cadastra seu perfil, e o resto é com a gente!
              </h1>
              <br />
              <h1 style={{ color: "black" }}>Julio Henrique dos Santos</h1>
              <h3 style={{ color: "gray" }}>
                Consultor AWS e Desenvolvedor FullStack Sr.
              </h3>
              <br />
              <br />
              <p>
                Expêriencia a mais de 15 anos no mercado, <b>formado</b> na
                faculdade São Judas e <b>Mestrando</b> na <b>USP</b>, julio
                possui conhecimentos para ser considerado um <b>arquiteto</b>{" "}
                <b>AWS</b> e serviços relacionados a Cloud, porem Julio quer
                casar e por isso esta aceitando um serviço para atuar nas horas
                vagas ele tem das <b>19h</b> ás <b>22h</b> disponivel.
              </p>
              <br />
              <button
                className="trigger btnAbout"
                onClick={() => this.trigger()}
              >
                Quero Resolver Um problema
              </button>
            </div>
            <div className="profile-photo divAbout" />
            <div className="right-side-info divAbout">
              <h3>
                Julio, Como vai? <br /> Tem empresas com problemas que você pode
                resolver!
              </h3>
              <br />
              <br />
              <h5 style={{ color: "black" }}>
                Empresa X precisa de um consultor AWS
              </h5>
              <br />
              <h3>
                A empresa X está com um problemão e precisa de um profissional
                como você para resolver isso, vc será remunerado por isso e os
                horarios para você atuar batem com o que você tem de disponivel.
                eae topa o desafio?.{" "}
              </h3>
              <br />
              <h3>
                Pode deixar que a gente ja cuidou de tudo pra você, após você
                realizar seu cadastro nós batemos as informações e encontramos o
                problema perfeito de uma empresa, para você resolver. é só
                aceitar! que entraremos em contato com você.{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(HowWorking);
