import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import img from "../assets/images/backsplash.webp";
import logo from "../assets/logos/logoWhite_small.png";
const styles = theme => ({
  root: {
    height: 250,
    position: "relative",
    marginTop: -65,
    zIndex: -1,
    [theme.breakpoints.up("sm")]: {
      height: 300
    },
    [theme.breakpoints.up("md")]: {
      height: 700
    }
  },
  img: {
    height: 350,
    overflowY: "hidden",
    [theme.breakpoints.up("sm")]: {
      height: 300,
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      height: 700
    }
  },
  container: {
    position: "absolute",
    textAlign: "center",
    background: "none",
    width: "100%",
    padding: 0,
    zIndex: 2,
    left: 0,
    bottom: 40,
    [theme.breakpoints.up("sm")]: {
      background: "none",
      width: "95%",
      bottom: 70,
      left: 15
    },
    [theme.breakpoints.up("md")]: {
      background: "none",
      bottom: 150
    }
  },
  text: {
    textTransform: "capitalize",
    letterSpacing: 3,
    fontWeight: 600,
    color: theme.status.white,
    textShadow: "2px 2px 4px #404040"
  },
  title: {
    fontSize: 36,
    [theme.breakpoints.up("sm")]: {
      fontSize: 48
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 96
    }
  },
  subtitle: {
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24
    }
  },
  logo: {
    width: 90,
    paddingBottom: 30,
    textAlign: "center"
  }
});

const Hero = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <img src={img} className={classes.img} alt="" />
      <div className={classes.container}>
        <Hidden smUp>
          <img src={logo} className={classes.logo} alt="" />
        </Hidden>
        <Typography
          variant="h2"
          gutterBottom
          className={classnames(classes.text, classes.title)}
        >
          Eisbach Riders
        </Typography>
        <Typography className={classnames(classes.text, classes.subtitle)}>
          Surf equipment accessories from Munich
        </Typography>
      </div>
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
