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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Institutional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalBoas: false
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.setNavbarOpen(false);
    if (localStorage.getItem("bemVindo") === "SIM") {
      localStorage.setItem("bemVindo", "NAO");
      this.setState({ modalBoas: true });
    }
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
        <Modal
          style={{ marginTop: "240px" }}
          isOpen={this.state.modalBoas}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Seja Bem Vindo!</ModalHeader>
          <ModalBody>
            Obrigado pelo cadastro!
            <br />
            <br />
            Para aumentar suas chances de ser chamado, complete seu cadastro!
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  toggle() {
    this.setState({ modalBoas: !this.state.modalBoas });
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
