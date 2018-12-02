import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import img from "../assets/images/homepage1.png";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    height: 400,
    background: theme.status.black
  },
  img: {
    width: "45%",
    height: 400
  },
  textContainer: {
    flexBasis: "45%",
    paddingTop: 45,
    paddingRight: 60,
    textAlign: "center"
  },
  title: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingBottom: 30,
    color: theme.palette.primary.main
  },
  text: {
    color: theme.palette.common.white
  }
});

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.container} id="about">
      <img src={img} className={classes.img} alt="" />
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
