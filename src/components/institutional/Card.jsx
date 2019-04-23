import React from "./node_modules/react";
// nodejs library that concatenates classes
import classNames from "./node_modules/classnames";
// nodejs library to set properties for components
import PropTypes from "./node_modules/prop-types";
// @material-ui/core components
import withStyles from "./node_modules/@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardStyle from "../../assets/jss/material-kit-react/components/cardStyle.jsx";

function Card({ ...props }) {
  const { classes, className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool
};

export default withStyles(cardStyle)(Card);
