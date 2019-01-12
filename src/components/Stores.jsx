import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    backgroundColor: theme.status.grey,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    paddingTop: 30,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingBottom: 30,
      paddingTop: 30
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 90,
      paddingRight: 90,
      paddingBottom: 90,
      paddingTop: 90
    }
  },
  text: {
    textTransform: "uppercase",
    paddingBottom: 5,
    fontSize: 18,
    [theme.breakpoints.up("md")]: {
      fontSize: 24
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-around"
  }
});

class Stores extends Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.text} variant="h5">
          {t("stores.sectionTitle")}
        </Typography>
        <div className={classes.container}>
          <Button variant="contained" color="secondary">
            Amazon
          </Button>
          <Button variant="contained" color="secondary">
            ebay
          </Button>
        </div>
      </div>
    );
  }
}

Stores.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(Stores));
