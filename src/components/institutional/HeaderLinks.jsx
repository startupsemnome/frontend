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
         Entre em Contato
        </Button>
          <Button
            href="/lista-projetos"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Notificações <br></br><span class="badge badge-light"></span>
          </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="/login"
            to={this.props.auth.login ? '/dashboard' : '/login'}
            color="transparent"
            className={classes.navLink}
          >
            {this.props.auth.login ? 'Dashboard' : 'Login'}
          </Link>

        </ListItem>

        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default withStyles(headerLinksStyle)(connect(mapStateToProps, null)(HeaderLinks));
