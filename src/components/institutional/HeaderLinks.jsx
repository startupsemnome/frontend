/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

import headerLinksStyle from "./../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";


function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Sobre Nós
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Entre em Contato
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/login"
          color="transparent"
          className={classes.navLink}
        >
          Login
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
