import React, { Component } from "react";
import PropTypes from "prop-types";
import jsonp from "jsonp";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import mailchimpLegal from "../assets/images/mailchimpLegal.png";

const styles = theme => ({
  containerNewsletter: {
    background: theme.status.white,
    padding: 90,
    textAlign: "center"
  },
  textNewsletter: {
    textTransform: "uppercase",
    paddingBottom: 5
  },
  subtitleNewsletter: {
    paddingBottom: 30
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginBottom: 15
  },
  button: {
    padding: "16px 48px",
    fontSize: "18px"
  },
  snackbarError: {
    background: theme.status.red
  },
  snackbarSuccess: {
    background: theme.status.green
  },
  dialogContent: {
    paddingBottom: 0
  },
  legal: {
    fontSize: 11,
    flexGrow: 1
  },
  legalContainer: {
    display: "flex",
    marginTop: 15
  },
  img: {
    marginRight: 15,
    marginLeft: 15,
    height: 60
  },
  dialogActions: {
    marginLeft: 30,
    marginRight: 30
  }
});

const subscribeEmailToMailchimp = url =>
  new Promise((resolve, reject) => {
    // `param` object avoids CORS issues
    // timeout to 3.5s so user isn't waiting forever
    // usually occurs w/ privacy plugins enabled
    // 3.5s is a bit longer than the time it would take on a Slow 3G connection
    return jsonp(url, { param: "c", timeout: 3500 }, (err, data) => {
      console.log(err, data);
      if (err) reject(err);
      if (data) resolve(data);
    });
  });

const convertListFields = fields => {
  let queryParams = "";
  for (const field in fields) {
    queryParams = queryParams.concat(
      `&${field.toUpperCase()}=${fields[field]}`
    );
  }
  return queryParams;
};

const addToMailchimp = (email, fields) => {
  // const isEmailValid = validate(email)
  const emailEncoded = encodeURIComponent(email);
  // if (!isEmailValid) {
  //   return Promise.resolve({
  //     result: "error",
  //     msg: "The email you entered is not valid."
  //   });
  // }

  // generate Mailchimp endpoint for jsonp request
  // note, we change `/post` to `/post-json`
  // otherwise, Mailchimp returns an error
  const endpoint =
    "https://eisbach-riders.us19.list-manage.com/subscribe/post-json?u=37a2f35f3b8bc53ace7af50eb&amp;id=7bdc6b47ed";
  const queryParams = `&EMAIL=${emailEncoded}${convertListFields(fields)}`;
  const url = `${endpoint}${queryParams}`;
  return subscribeEmailToMailchimp(url);
};
class Newsletter extends Component {
  state = {
    email: "Email Address",
    name: "Name",
    isDialogOpen: false,
    isSnackbarOpen: false,
    snackbarMessage: null
  };

  handleSubmit = () => {
    const result = addToMailchimp(this.state.email, {
      FNAME: this.state.name
    });
    if (result.result === "error") {
      this.setState({
        isSnackbarOpen: true,
        snackbarMessage: result.msg.includes("<a")
          ? result.msg.split("<a")[0]
          : result.msg
      });
    } else {
      this.setState({
        isSnackbarOpen: true,
        snackbarMessage: "success"
      });
    }
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ isSnackbarOpen: false });
  };

  handleDialogOpen = () => {
    this.setState({
      isDialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const {
      email,
      name,
      isDialogOpen,
      isSnackbarOpen,
      snackbarMessage
    } = this.state;

    return (
      <div className={classes.containerNewsletter}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={isSnackbarOpen}
          autoHideDuration={1600}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            "aria-describedby": "message-id",
            className:
              snackbarMessage === "success"
                ? classes.snackbarSuccess
                : classes.snackbarError
          }}
          message={
            snackbarMessage === "success" ? (
              <span id="message-id">Success! Thanks for joining.</span>
            ) : (
              <span id="message-id">{snackbarMessage}</span>
            )
          }
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
        <Typography className={classes.textNewsletter} variant="h5">
          Let's stay in touch!
        </Typography>
        <Typography className={classes.subtitleNewsletter}>
          Sign up for our monthly newsletter to be the first to hear about the
          latest products and ongoings at Eisbach Riders.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleDialogOpen}
        >
          Sign Up
        </Button>
        <Dialog open={isDialogOpen} onClose={this.handleDialogClose}>
          <DialogTitle id="dialog-title">{"Newsletter"}</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <form className={classes.form}>
              <TextField
                required
                id="email"
                label="Email"
                value={email}
                onChange={this.handleChange("email")}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="name"
                label="Name"
                value={name}
                onChange={this.handleChange("name")}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </form>
            <div className={classes.legalContainer}>
              <img src={mailchimpLegal} className={classes.img} alt="legal" />
              <Typography className={classes.legal}>
                You can unsubscribe at any time by clicking the link in the
                footer of our emails. We use Mailchimp as our marketing
                platform. By clicking below to subscribe, you acknowledge that
                your information will be transferred to Mailchimp for
                processing.{" "}
                <a href="https://mailchimp.com/legal/">
                  Learn more about Mailchimp's privacy practives here.
                </a>
              </Typography>
            </div>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button onClick={this.handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.handleSubmit();
                this.handleDialogClose();
              }}
              color="primary"
              autoFocus
              type="submit"
            >
              Subscribe to List
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Newsletter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Newsletter);
