import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Products from "../components/Products";
import Newletter from "../components/Newletter";
import About from "../components/About";
import Hero from "../components/Hero";

const styles = theme => ({
  container1: {
    display: "flex",
    flexWrap: "wrap",
    height: 500,
    background: theme.status.black
  },
  container2: {
    textAlign: "center",
    padding: 90,
    background: theme.status.white
  },
  img: {
    width: "100%",
    height: 500
  },
  imgContainer1: {
    flexBasis: "50%"
  },
  textContainer1: {
    flexBasis: "50%",
    padding: 90
  },
  title: {
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    letterSpacing: 3,
    paddingBottom: 30
  },
  titleAbout: {
    color: theme.palette.primary.main
  },
  titleProducts: {
    color: theme.palette.black
  },
  text: {
    color: theme.palette.common.white
  }
});

const Homepage = props => {
  const { classes } = props;
  return (
    <div id="body">
      <Hero />
      <Newletter />
      <About />
      <div className={classes.container2} id="products">
        <Typography
          className={classnames(classes.title, classes.titleProducts)}
          variant="h5"
        >
          products
        </Typography>
        <Products />
      </div>
    </div>
  );
};

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Homepage);
