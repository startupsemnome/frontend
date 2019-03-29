import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InstitutionalForm from "../components/institutionalForm"
import Header from "../components/Header/Header.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";
import classes from "../components/components.jsx";
import LinearProgress from '@material-ui/core/LinearProgress';
import Slideshow from "react-slidez";

// imgs
import { imgSlider1 } from "../assets/img/bg.jpg";

export default class Institutional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gilad: true,
      jason: false,
      antoine: false,
    };

  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { gilad, jason, antoine } = this.state;
    const error = [gilad, jason, antoine].filter(v => v).length !== 2;

    const { ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Melhores Mentes"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("../assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Melhores Mentes.</h1>
                  <h3 className={classes.subtitle}>
                    O espaço perfeito para conectar as melhores mentes.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <Slideshow

          duration={5000}
          showIndex
          showArrows
          autoplay
          enableKeyboard
          useDotIndex
          slideInterval={0}
          defaultIndex={1}
          slides={['http://www.ufcg.edu.br/~biblioteca/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png']}
          effect={'fade'}
          height={'100%'}
          width={'100%'}
        />
        <LinearProgress />
      </div>
    );
  }
}
