import React, { Component, Fragment } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Tracking from "./Tracking";
import i18n from "../i18n/i18n";
import { withNamespaces } from "react-i18next";
class Layout extends Component {
  state = {
    language: "en",
    isSnackbarOpen: true
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }

  handleLanguageChange = () => {
    const lng = this.state.language === "en" ? "de" : "en";
    i18n.changeLanguage(lng);
    this.setState({
      language: lng
    });
  };

  handleSnackbarClose = () => {
    this.setState({ isSnackbarOpen: true });
  };

  handleSnackbarAccept = () => {
    this.setState({ isSnackbarOpen: false });
  };

  handleSnackbarDecline = () => {
    window["ga-disable-UA-130658859-1"] = true;
    this.setState({ isSnackbarOpen: false });
  };

  render() {
    const { loc, children } = this.props;
    const { language, isSnackbarOpen } = this.state;
    return (
      <Fragment>
        <Header
          handleLanguageChange={this.handleLanguageChange}
          language={language}
          loc={loc}
        />
        {children}
        <Footer />
        <Tracking
          isSnackbarOpen={isSnackbarOpen}
          handleClose={this.handleClose}
          handleAccept={this.handleAccept}
          handleDecline={this.handleDecline}
        />
      </Fragment>
    );
  }
}

export default withNamespaces()(Layout);
