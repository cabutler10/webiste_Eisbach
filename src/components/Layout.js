import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Tracking from "./Tracking";
import i18n from "../i18n/i18n";

function Layout({ loc, children }) {
  const [language, setLanguage] = useState("en");
  const [isSnackbarOpen, setSnackbar] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  const handleLanguageChange = () => {
    i18n.changeLanguage(language === "en" ? "de" : "en");
    setLanguage(language === "en" ? "de" : "en");
  };

  const handleSnackbarDecline = () => {
    window["ga-disable-UA-130658859-1"] = true;
    setSnackbar(false);
  };

  return (
    <>
      <Header
        handleLanguageChange={handleLanguageChange}
        language={language}
        loc={loc}
      />
      {children}
      <Footer />
      <Tracking
        isSnackbarOpen={isSnackbarOpen}
        handleClose={() => setSnackbar(false)}
        handleAccept={() => setSnackbar(false)}
        handleDecline={handleSnackbarDecline}
      />
    </>
  );
}

export default Layout;
