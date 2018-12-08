import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import logoWhite from "../assets/logos/logoWhite_small.png";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: "transparent"
  },
  appbarDarkTheme: {
    boxShadow: "none",
    backgroundColor: theme.palette.primary.main
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60,
      justifyContent: "space-between"
    }
  },
  containerXS: {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "100%"
  },
  logo: {
    marginTop: 5,
    width: 40
  },
  button: {
    color: theme.palette.common.white,
    fontSize: 18,
    textShadow: "1px 1px 1px black",
    letterSpacing: 1.5,
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  logoButton: {
    marginRight: 15
  },
  menuIcon: {
    color: theme.palette.common.black
  },
  mobileButton: {
    flexBasis: "50%",
    background: theme.palette.common.black,
    borderRadius: 0,
    height: 57,
    boxShadow: "none"
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  }
});
class Template extends Component {
  render() {
    const { handlePageChange, activePage, classes } = this.props;
    const links = ["/About/", "/Products/", "contact"];
    const linkLabels = ["about", "products", "contact"];

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className={
            activePage === "/legal" || activePage === "/privacy"
              ? classes.appbarDarkTheme
              : classes.appbar
          }
        >
          <Toolbar className={classes.toolbar}>
            <Hidden xsDown>
              <IconButton
                className={classes.logoButton}
                aria-label="home"
                onClick={() => handlePageChange("/")}
              >
                <img alt="" src={logoWhite} className={classes.logo} />
              </IconButton>
              {activePage !== "/legal" &&
                (activePage !== "/privacy" && (
                  <div>
                    {links.map((link, idx) => (
                      <Button
                        className={classes.button}
                        key={`link_${link}`}
                        href={`#${linkLabels[idx]}`}
                      >
                        {linkLabels[idx]}
                      </Button>
                    ))}
                  </div>
                ))}
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Template);
