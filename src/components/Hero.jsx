import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import HeroMobile from "./HeroMobile";
import img from "../assets/images/backsplash.jpg";

const styles = theme => ({
  root: {
    height: 300,
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
    height: 200,
    [theme.breakpoints.up("sm")]: {
      height: 300
    },
    [theme.breakpoints.up("md")]: {
      height: 700,
      width: "100%"
    }
  },
  container: {
    position: "absolute",
    zIndex: 2,
    background: "none",
    padding: 0,
    left: 15,
    bottom: 15,
    [theme.breakpoints.up("md")]: {
      background: "none",
      width: "100%",
      bottom: 150
    }
  },
  text: {
    textTransform: "capitalize",
    letterSpacing: 3,
    fontWeight: 600,
    textAlign: "center",
    color: theme.status.white
  }
});

const Hero = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <img src={img} className={classes.img} alt="" />
      <Hidden smUp>
        <HeroMobile />
      </Hidden>
      <Hidden xsDown>
        <div className={classes.container}>
          <Typography variant="h1" gutterBottom className={classes.text}>
            Eisbach Riders
          </Typography>
          <Typography variant="h5" className={classes.text}>
            Surf equipment accessories from Munich
          </Typography>
        </div>
      </Hidden>
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
