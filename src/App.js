import React, { Component, Fragment } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import Legal from "./pages/Legal";

class App extends Component {
  state = {
    activePage: "/"
  };
  handlePageChange = activePage => {
    console.log(activePage);
    this.setState({
      activePage
    });
  };
  render() {
    const { activePage } = this.state;

    return (
      <Fragment>
        <Header
          handlePageChange={this.handlePageChange}
          activePage={activePage}
        />
        {activePage === "/" && <Homepage />}
        {activePage === "/legal" && <Legal />}
        <Footer handlePageChange={this.handlePageChange} />
      </Fragment>
    );
  }
}

export default App;
