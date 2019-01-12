import React, { Component, Fragment } from "react";
import i18n from "./i18n/i18n";
import { withNamespaces } from "react-i18next";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
//import Tracking from "./components/Tracking";

class App extends Component {
  state = {
    activePage: "/",
    language: "en",
    isSnackbarOpen: true
  };

  handlePageChange = activePage => {
    this.setState({
      activePage
    });
    window.scrollTo(0, 0);
  };

  handleLanguageChange = () => {
    const lng = this.state.language === "en" ? "de" : "en";
    i18n.changeLanguage(lng);
    this.setState({
      language: lng
    });
  };

  handleSnackbarClose = () => {
    this.setState({ isSnackbarOpen: false });
  };

  render() {
    const { activePage, language, isSnackbarOpen } = this.state;
    return (
      <Fragment>
        <Header
          handlePageChange={this.handlePageChange}
          handleLanguageChange={this.handleLanguageChange}
          language={language}
          activePage={activePage}
        />
        {activePage === "/" && <Homepage />}
        {activePage === "/legal" && <Legal />}
        {activePage === "/privacy" && <Privacy />}
        <Footer handlePageChange={this.handlePageChange} />
        <Tracking
          isSnackbarOpen={isSnackbarOpen}
          handleClose={this.handleSnackbarClose}
        />
      </Fragment>
    );
  }
}

export default withNamespaces()(App);
