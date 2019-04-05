import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import PropTypes from 'prop-types';
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

import SectionBasics from "../components/institutional/SectionBasics.jsx";
import SectionCarousel from "../components/institutional/SectionCarousel.jsx";
import SectionCompletedExamples from "../components/institutional/SectionCompletedExamples.jsx";
import Footer from "../components/institutional/Footer.jsx";
import { setNavbarOpen } from "./../redux/actions/navbarAction";

import "./../assets/scss/material-kit-react.scss";

class Institutional extends Component {

  componentDidMount() {
    this.props.setNavbarOpen(false);
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          brand="Resource Manager"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />

        <Parallax image={require("./../assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Conectando Mentes</h1>
                  <h3 className={classes.subtitle}>
                    A melhor solução para o seu negócio.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionCompletedExamples />
          <SectionCarousel />
          <SectionBasics />
        </div>
        <Footer />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);

export default withStyles(componentsStyle)(connect(null, mapDispatchToProps)(Institutional));

