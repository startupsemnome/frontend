/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";

class SectionDownload extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Want more?</h2>
              <h4>
                We've launched{" "}
                <a
                  href="https://www.creative-tim.com/product/material-kit-pro-react"
                  target="_blank"
                >
                  Material Kit PRO React{" "}
                </a>
                .It has a huge number of components, sections and example pages.
                Start Your Development With A Badass Material-UI nspired by
                Material Design.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="rose"
                size="lg"
                href="https://www.creative-tim.com/product/material-kit-pro-react"
                target="_blank"
              >
                Material Kit PRO
              </Button>
              <Button
                color="rose"
                size="lg"
                href="https://www.creative-tim.com/product/material-dashboard-pro-react"
                target="_blank"
              >
                Material Dashboard PRO
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionDownload);
