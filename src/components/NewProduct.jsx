import React, { Component } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { withNamespaces } from "react-i18next";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import ProductDialog from "./ProductDialog";
import img_wax from "../assets/images/surfWax.jpg";
import img_hangers from "../assets/images/hangers.jpg";
import logo_wax from "../assets/images/waxLogo.jpg";
import logo_hangers from "../assets/images/hangerLogo.png";
// import { newProduct } from "../data/ProductData";

const styles = theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: `linear-gradient(to bottom, ${
      theme.status.greyBlue
    } 50%, #fff 50%)`,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  swipeable: {
    flexShrink: "none"
  },
  container: {
    display: "flex",
    alignItems: "center"
  },
  img: {
    height: "60%",
    width: "60%",
    [theme.breakpoints.up("md")]: {
      marginLeft: 50
    }
  },
  paper: {
    padding: 30,
    width: "90%",
    textAlign: "center",
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
      marginLeft: -100,
      marginRight: 10,
      marginBottom: 10,
      boxShadow:
        "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)"
    },
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: -100,
      marginBottom: 0
    }
  },
  logo: {
    width: 125
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 16
  },
  mobileStepper: {
    background: theme.status.white
  },
  button: {
    marginTop: 30
  },
  nextButton: {
    [theme.breakpoints.up("sm")]: {
      marginTop: -430,
      marginRight: -70,
      zIndex: 200
    }
  },
  backButton: {
    [theme.breakpoints.up("sm")]: {
      marginTop: -430,
      marginLeft: -40,
      zIndex: 200
    }
  }
});

class NewProduct extends Component {
  state = {
    activeStep: 0
    // isDialogOpen: false
  };

  // handleDialogOpen = () => {
  //   this.setState({
  //     isDialogOpen: true
  //   });
  // };

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false });
  };

  handleIndexChange = activeStep => {
    this.setState({
      activeStep
    });
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  render() {
    const { classes, t } = this.props;
    const { activeStep } = this.state;
    const products = [
      {
        product: "hangers",
        title: "Hidden Surfboard Wall Rack",
        amazon: "https://amzn.to/2BHjz9U",
        img: img_hangers,
        logo: logo_hangers
      },
      {
        product: "wax",
        title: "Bee Swell Surf Wax",
        amazon: "",
        img: img_wax,
        logo: logo_wax
      }
    ];
    return (
      <div className={classes.root} id="products">
        <SwipeableViews
          enableMouseEvents
          index={activeStep}
          onChangeIndex={this.handleIndexChange}
          className={classes.swipeable}
        >
          {products.map(elem => (
            <div
              key={`newproduct${elem.product}`}
              className={classes.container}
            >
              <Hidden xsDown>
                <img
                  src={elem.img}
                  alt={t("newProduct.imgAlt")}
                  className={classes.img}
                />
              </Hidden>
              <Paper className={classes.paper} elevation={10}>
                <img
                  src={elem.logo}
                  alt={t(elem.product)}
                  className={classes.logo}
                />
                <Typography className={classes.title}>{elem.title}</Typography>
                <Typography>{t(`newProduct.text_${elem.product}`)}</Typography>
                <Button
                  color="secondary"
                  variant="outlined"
                  className={classnames(classes.button)}
                  href={elem.amazon}
                  target="_blank"
                  rel="noopener"
                >
                  {t("newProduct.more")}
                </Button>
                {/* <ProductDialog
                  product={newProduct[0]}
                  buttonText={t("newProduct.more")}
                  handleDialogOpen={this.handleDialogOpen}
                  handleDialogClose={this.handleDialogClose}
                  isDialogOpen={isDialogOpen}
                /> */}
              </Paper>
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={2}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <IconButton
              size="small"
              className={classes.nextButton}
              aria-label={t("common.scrollLeft")}
              onClick={this.handleNext}
              disabled={activeStep === 1}
            >
              <KeyboardArrowRight />
            </IconButton>
          }
          backButton={
            <IconButton
              size="small"
              className={classes.backButton}
              aria-label={t("common.scrollRight")}
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </IconButton>
          }
        />
      </div>
    );
  }
}

NewProduct.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(NewProduct));
