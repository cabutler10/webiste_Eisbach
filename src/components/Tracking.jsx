import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  snackbar: {
    left: 0,
    right: 0,
    transform: "none"
  },
  snackbarContent: {
    borderRadius: 0,
    width: "100%",
    minWidth: "0",
    maxWidth: "none",
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: theme.palette.common.black
  },
  message: {
    flexBasis: "60%",
    [theme.breakpoints.up("lg")]: {
      flexBasis: "80%"
    }
  },
  action: {
    marginLeft: "none",
    marginRight: "none",
    paddingLeft: 0
  },
  button: {
    marginLeft: 35,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonDecline: {
    color: theme.palette.common.white
  },
  link: {
    color: theme.palette.common.white,
    textTransform: "capitalize",
    textDecoration: "underline"
  }
});

function Tracking(props) {
  const {
    handleClose,
    handleAccept,
    handleDecline,
    handlePageChange,
    isSnackbarOpen,
    classes,
    t
  } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      open={isSnackbarOpen}
      onClose={handleClose}
      className={classes.snackbar}
    >
      <SnackbarContent
        className={classes.snackbarContent}
        classes={{ message: classes.message, action: classes.action }}
        aria-describedby="client-snackbar"
        onClose={handleClose}
        message={
          <span id="client-snackbar">
            {t("tracking.message")}
            <Button
              className={classes.link}
              onClick={() => handlePageChange("/privacy")}
            >
              {t("tracking.privacyLink")}
            </Button>
          </span>
        }
        action={[
          <div key="button">
            <Button
              className={classes.buttonDecline} //eslint-disable-next-line
              href="javascript:gaOptout();"
              onClick={handleDecline}
            >
              {t("tracking.decline")}
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={handleAccept}
            >
              {t("tracking.accept")}
            </Button>
          </div>
        ]}
      />
    </Snackbar>
  );
}

Tracking.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAccept: PropTypes.func,
  handleDecline: PropTypes.func,
  handlePageChange: PropTypes.func,
  isSnackbarOpen: PropTypes.bool
};

export default withNamespaces()(withStyles(styles)(Tracking));
