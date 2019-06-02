import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";
import InstitutionalForm from "../components/institutional/institutionalForm";
import Header from "../components/institutional/Header.jsx";
import HeaderLinks from "../components/institutional/HeaderLinks.jsx";
import GridContainer from "../components/institutional/GridContainer.jsx";
import GridItem from "../components/institutional/GridItem.jsx";
import Parallax from "../components/institutional/Parallax.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "./../assets/jss/material-kit-react/views/components.jsx";

import CadastroUsuarioCompleto from "./../components/cadastroUsuarioCompleto.jsx";
import SectionBasics from "../components/institutional/SectionBasics.jsx";
import SectionCarousel from "../components/institutional/SectionCarousel.jsx";
import WhoWeAre from "../components/institutional/whoWeAre.jsx";
import HowWorking from "../components/institutional/HowWorking.jsx";
import Notificacao from "../components/institutional/notificacao.jsx";
import Footer from "../components/institutional/Footer.jsx";
import Disponibilidade from "../components/disponibilidade";
import { setNavbarOpen } from "./../redux/actions/navbarAction";

import "./../assets/scss/material-kit-react.scss";
import { Helmet } from "react-helmet";

class Institutional extends Component {
  componentDidMount() {
    this.props.setNavbarOpen(false);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="página institucional responsável por apresentar nosso produto/negócio e possibilitará o acesso do usuário."
          />
          <meta
            name="keywords"
            content="site, tela inicial, resource manager, institucional"
          />
          <meta name="author" content="Equipe Resource Manager" />
          <title>Resource Manager</title>
        </Helmet>
        <Header
          brand="Resource Manager"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400
          }}
          {...rest}
        />
        <Parallax image={require("../images/home.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Conectando Talentos</h1>
                  <h3 className={classes.subtitle}>
                    A perfeita solução para juntar problemas e recursos
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <HowWorking />
          {!this.props.login || localStorage.getItem("type") === "ADMIN" ? (
            <SectionCarousel />
          ) : null}
           
          <WhoWeAre />
          
          {!this.props.login ? (
            <SectionBasics history={this.props.history} />
          ) : localStorage.getItem("type") !== "ADMIN" ? (
            <CadastroUsuarioCompleto />
          ) : null}
          {/* <Notificacao /> */}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({ login: state.auth.login });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);

export default withStyles(componentsStyle)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Institutional)
);
