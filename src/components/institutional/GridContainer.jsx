import React from "./node_modules/react";
// nodejs library to set properties for components
import PropTypes from "./node_modules/prop-types";

// @material-ui/core components
import withStyles from "./node_modules/@material-ui/core/styles/withStyles";
import Grid from "./node_modules/@material-ui/core/Grid";

const style = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

function GridContainer({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(style)(GridContainer);
