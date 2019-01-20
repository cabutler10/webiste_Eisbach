import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import featuredProduct from "../assets/images/featuredProduct.png";
import { SurfIcon } from "../assets/icons/icons";

const styles = theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: theme.status.greyBlue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  containerDetails: {
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    marginRight: 30,
    flexBasis: "30%"
  },
  containerInfo: {
    marginLeft: 30,
    flexBasis: "30%"
  },
  containerImg: {
    flexBasis: "35%"
  },
  detailTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 16
  },
  detailTitle2: {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    paddingTop: 35,
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  detailText: {
    textTransform: "capitalize",
    color: theme.status.grey,
    letterSpacing: 3,
    fontSize: 12,
    paddingBottom: 5
  },
  containerIcon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 25
  },
  containerIcon2: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 5
  },
  icon: {
    paddingLeft: 25
  },
  off: {
    color: theme.status.grey
  },
  img: {
    width: "100%"
  },
  barOn: {
    width: 25,
    height: 5,
    background: theme.status.black,
    marginLeft: 5
  },
  barOff: {
    width: 25,
    height: 5,
    background: theme.status.grey,
    marginLeft: 5
  },
  button: {
    marginTop: 10,
    color: theme.palette.common.black
  }
});

class Feature extends Component {
  render() {
    const { classes, t } = this.props;

    return (
      <div className={classes.root} id="products">
        <div className={classes.containerDetails}>
          <Typography className={classes.detailTitle}>
            {t("feature.surfConditions")}
          </Typography>
          <Typography className={classes.detailText}>
            {t("feature.surfDetail1")}
          </Typography>
          <Typography className={classes.detailText}>
            {t("feature.surfDetail2")}
          </Typography>
          <div className={classes.containerIcon}>
            <SurfIcon className={classes.icon} fontSize="small" />
            <SurfIcon className={classes.icon} />
            <SurfIcon
              className={classnames(classes.off, classes.icon)}
              fontSize="large"
            />
          </div>
          <Typography className={classes.detailTitle}>
            {t("feature.experience")}
          </Typography>
          <div className={classes.containerIcon2}>
            <Typography className={classes.detailText}>
              {t("feature.beginner")}
            </Typography>
            <div className={classes.barOff} />
            <div className={classes.barOff} />
            <div className={classes.barOff} />
            <div className={classes.barOff} />
          </div>
          <div className={classes.containerIcon2}>
            <Typography className={classes.detailText}>
              {t("feature.intermediate")}
            </Typography>
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOff} />
          </div>
          <div className={classes.containerIcon2}>
            <Typography className={classes.detailText}>
              {t("feature.pro")}
            </Typography>
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOn} />
          </div>
        </div>
        <div className={classes.containerImg}>
          <img
            src={featuredProduct}
            alt={t("feature.featureProduct")}
            className={classes.img}
          />
        </div>
        <div className={classes.containerInfo}>
          <Typography className={classes.detailTitle}>Honeycomb Fin</Typography>
          <Typography className={classes.detailTitle2}>
            {t("feature.highlight")}
          </Typography>
          <Typography className={classes.detailText}>
            {t("feature.text")}
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            {t("feature.more")}
          </Button>
        </div>
      </div>
    );
  }
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(Feature));