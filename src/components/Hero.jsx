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
    width: "100%",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: -65,
    [theme.breakpoints.up("sm")]: {
      height: 300
    },
    [theme.breakpoints.up("md")]: {
      height: 700
    }
  },
  container: {
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 130
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 250
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
    fontSize: 35,
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
    paddingBottom: 20,
    textAlign: "center"
  }
});

const Hero = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
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
