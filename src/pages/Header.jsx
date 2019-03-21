import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import MobileHeaderList from "../components/MobileHeaderList";
import logoWhite from "../assets/logos/ER_minimal_black.svg";
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
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
    paddingLeft: 15,
    paddingRight: 15,
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
    width: 60
  },
  button: {
    color: theme.palette.common.black,
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 1.5,
    "&:hover": {
      color: theme.palette.secondary.main
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
}));

function Template({ loc, handleLanguageChange, language }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const links = ["/About/", "/Products/", "contact"];
  const linkLabels = [
    t("header.about"),
    t("header.products"),
    t("header.contact")
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={
          loc === "/legal" || loc === "/privacy"
            ? classes.appbarDarkTheme
            : classes.appbar
        }
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoButton}>
            <img alt="" src={logoWhite} className={classes.logo} />
          </Link>
          <Hidden xsDown>
            <div>
              {loc !== "/legal" &&
                (loc !== "/privacy" && (
                  <>
                    {links.map((link, idx) => (
                      <Button
                        className={classes.button}
                        key={`link_${link}`}
                        href={`#${linkLabels[idx]}`}
                      >
                        {linkLabels[idx]}
                      </Button>
                    ))}
                  </>
                ))}
              <Button className={classes.button} onClick={handleLanguageChange}>
                {language === "en" ? "de" : "en"}
              </Button>
            </div>
          </Hidden>
          <Hidden xsUp>
            <MobileHeaderList />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Template.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Template;
