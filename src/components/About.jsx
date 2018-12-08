import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import img from "../assets/images/homepage1.png";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    height: 200,
    background: theme.status.black,
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      height: 400
    }
  },
  img: {
    width: "45%",
    height: 400,
    background: theme.status.black
  },
  textContainer: {
    flexBasis: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 15,
    paddingLeft: 15,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingRight: 60,
      paddingLeft: 60
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
      paddingTop: 45,
      paddingRight: 60
    }
  },
  title: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 14,
    color: theme.palette.secondary.main,
    [theme.breakpoints.up("md")]: {
      paddingBottom: 30,
      fontSize: 24
    }
  },
  text: {
    color: theme.palette.common.white,
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 16
    }
  }
});

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.container} id="about">
      <Hidden smDown>
        <img src={img} className={classes.img} alt="" />
      </Hidden>
      <div className={classes.textContainer}>
        <Typography className={classes.title} variant="h5">
          who we are
        </Typography>
        <Typography className={classes.text} variant="body1">
          Eisbach Riders is a young local surf brand from Munich and offers
          equipment for surfing. Whether you are in the sea, in the river or on
          the city wave. We, Michael and Robin, are passionate surfers ourselves
          and value quality products at comparable prices. Packed in sustainable
          and environmentally friendly packaging, we will ship as fast as
          possible so that you can jump right back into the water with a smile
          on your face.
        </Typography>
      </div>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
