import React, { Component, Fragment } from "react";
import i18n from "./i18n/i18n";
import { withNamespaces } from "react-i18next";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

class App extends Component {
  state = {
    activePage: "/",
    language: "en"
  };

  handlePageChange = activePage => {
    this.setState({
      activePage
    });
  };

  handleLanguageChange = () => {
    const lng = this.state.language === "en" ? "de" : "en";
    i18n.changeLanguage(lng);
    this.setState({
      language: lng
    });
  };

  render() {
    const { activePage, language } = this.state;
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
      </Fragment>
    );
  }
}

export default withNamespaces()(App);
