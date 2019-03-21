import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
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
}));

function Stores() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h5">
        {t("stores.sectionTitle")}
      </Typography>
      <div className={classes.container}>
        <Button
          variant="contained"
          color="secondary"
          href={"https://amzn.to/2CfbQiW"}
          target="_blank"
          rel="noopener"
        >
          Amazon
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href={
            "https://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338456795&mpre=https%3A%2F%2Fwww.ebay.de%2Fsch%2Feisbach-riders%2Fm.html%3Fitem%3D183534256900%26rt%3Dnc%26_trksid%3Dp2047675.l2562"
          }
          target="_blank"
          rel="noopener"
        >
          ebay
        </Button>
      </div>
    </div>
  );
}

Stores.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Stores;
