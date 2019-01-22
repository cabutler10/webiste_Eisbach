import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ProductDialog from "./ProductDialog";
import img from "../assets/images/surfWax.jpg";
import logo from "../assets/images/waxLogo.jpg";
import { newProduct } from "../data/ProductData";

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
    alignItems: "center",
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
  img: {
    height: "auto",
    width: "60%",
    marginLeft: 50
  },
  paper: {
    padding: 30,
    width: 400,
    margin: -100,
    textAlign: "center"
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
  button: {
    marginTop: 30,
    color: theme.palette.common.black
  }
});

class NewProduct extends Component {
  state = {
    isDialogOpen: false
  };

  handleDialogOpen = () => {
    this.setState({
      isDialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    const { classes, t } = this.props;
    const { isDialogOpen } = this.state;

    return (
      <div className={classes.root} id="products">
        <img src={img} alt={t("newProduct.imgAlt")} className={classes.img} />
        <Paper className={classes.paper} elevation={10}>
          <img src={logo} alt={t("newProduct.logo")} className={classes.logo} />
          <Typography className={classes.title}>Bee Swell Surf Wax</Typography>
          <Typography>{t("newProduct.text")}</Typography>
          <Button
            color="secondary"
            variant="outlined"
            className={classes.button}
          >
            {t("newProduct.more")}
          </Button>
        </Paper>
        <ProductDialog
          product={newProduct}
          handleDialogOpen={this.handleDialogOpen}
          handleDialogClose={this.handleDialogClose}
          isDialogOpen={isDialogOpen}
        />
      </div>
    );
  }
}

NewProduct.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(NewProduct));
