import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import img from "../assets/images/homepage1.png";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    height: 500,
    background: theme.status.black
  },
  img: {
    height: 500
  },
  imgContainer1: {
    flexBasis: "50%"
  },
  textContainer: {
    flexBasis: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  title: {
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    letterSpacing: 3,
    paddingBottom: 30,
    color: theme.palette.primary.main
  },

  text: {
    color: theme.palette.common.white,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center"
  }
});

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.container} id="about">
      <div className={classes.imgContainer}>
        <img src={img} className={classes.img} alt="" />
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.title} variant="h5">
          who we are
        </Typography>
        <Typography className={classes.text} variant="subtitle1">
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
