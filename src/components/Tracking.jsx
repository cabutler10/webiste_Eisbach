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
    flexBasis: "85%"
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
  }
});

function Tracking(props) {
  const { handleAccept, handleDecline, isSnackbarOpen, classes, t } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      open={isSnackbarOpen}
      onClose={handleAccept}
      className={classes.snackbar}
    >
      <SnackbarContent
        className={classes.snackbarContent}
        classes={{ message: classes.message, action: classes.action }}
        aria-describedby="client-snackbar"
        message={<span id="client-snackbar">{t("tracking.message")}</span>}
        action={[
          <Button
            key="button"
            color="secondary"
            variant="contained"
            className={classes.button}
            onClick={handleDecline}
          >
            {t("tracking.accept")}
          </Button>
        ]}
      />
    </Snackbar>
  );
}

Tracking.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAccept: PropTypes.func,
  handleDecline: PropTypes.func,
  isSnackbarOpen: PropTypes.bool
};

export default withNamespaces()(withStyles(styles)(Tracking));
