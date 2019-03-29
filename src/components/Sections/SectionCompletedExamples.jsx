import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
