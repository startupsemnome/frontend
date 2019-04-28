/*eslint-disable*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

class HeaderLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="#header1"
            color="transparent"
            className={classes.navLink}
          >
            Sobre nós
          </Button>
          <Button
            href="#header2"
            color="transparent"
            className={classes.navLink}
          >
            Clientes
          </Button>
          <Button
            href="#header3"
            color="transparent"
            className={classes.navLink}
          >
            Cadastro
          </Button>
          <Link
            to="/lista-projetos"
            color="transparent"
            className={classes.navLink}
          >
            Projetos <br />
            <span class="badge badge-light" />
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="/login"
            to={this.props.auth.login ? "/dashboard" : "/login"}
            color="transparent"
            className={classes.navLink}
          >
            {this.props.auth.login ? "Dashboard" : "Login"}
          </Link>
        </ListItem>
      </List>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default withStyles(headerLinksStyle)(
  connect(
    mapStateToProps,
    null
  )(HeaderLinks)
);
