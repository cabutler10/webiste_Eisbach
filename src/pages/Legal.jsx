import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    background: theme.status.white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingBottom: 30
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 90,
      paddingRight: 90,
      paddingBottom: 90,
      paddingTop: 30
    }
  },
  title: {
    paddingBottom: 15,
    textTransform: "capitalize",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 30,
      paddingTop: 30
    }
  },
  text: {
    fontSize: 12,
    wordBreak: "break-word",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 30
    }
  }
});

const Legal = props => {
  const { classes, t } = props;
  return (
    <div className={classes.container} id="legal">
      <Typography variant="h5" className={classes.title}>
        {t("imprint.imprint")}
      </Typography>
      <Typography className={classes.text}>
        Eisbach Riders <br />
        Robin Eisenhardt & Michael Schmidt GbR <br />
        Lothstr. 72 <br />
        80797 München <br />
        Deutschland <br />
      </Typography>

      <Typography className={classes.text}>
        Tel.: 0176/69019542 <br />
        E-Mail: business@eisbach-riders.com
      </Typography>

      <Typography className={classes.text}>
        Vertretungsberechtigte Gesellschafter: Robin Eisenhardt, Michael Schmidt
      </Typography>

      <Typography className={classes.text}>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE
        320071401 Plattform der EU-Kommission zur <br />
        Online-Streitbeilegung:{" "}
        <a href="https://ec.europa.eu/consumers/odr">
          https://ec.europa.eu/consumers/odr
        </a>
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      </Typography>

      <Typography className={classes.text}>
        Verantwortliche/r i.S.d. § 55 Abs. 2 RStV: Robin Eisenhardt, Michael
        Schmidt, Lothstr. 72, 80797, München
      </Typography>

      <Typography variant="h6" className={classes.title}>
        {t("imprint.terms")}
      </Typography>

      <Typography variant="subtitle1">{t("imprint.title1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms1_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms1_2")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms1_3")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title2")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms2_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms2_2")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms2_3")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms2_4")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms2_5")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms2_6")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms2_7")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title3")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms3_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms3_2")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title4")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms4_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms4_2")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms4_3")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms4_4")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title5")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms5_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms5_2")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms5_3")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title6")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms6_1")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title7")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms7_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms7_2")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms7_3")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title8")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms8_1")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title9")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms9_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms9_2")}</Typography>

      <Typography variant="h6" className={classes.title}>
        {t("imprint.title10")}
      </Typography>
      <Typography className={classes.text}>{t("imprint.terms10_1")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title11")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms11_1")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms11_2")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms11_3")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms11_4")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms11_5")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms11_6")}</Typography>

      <Typography variant="subtitle1">{t("imprint.title12")}</Typography>
      <Typography className={classes.text}>{t("imprint.terms12_1")}</Typography>

      <Typography className={classes.text}>
        Eisbach Riders <br />
        Robin Eisenhardt & Michael Schmidt GbR <br />
        Lothstr. 72 <br />
        80797 München <br />
        Deutschland <br />
        E-Mail: business@eisbach-riders.com
      </Typography>

      <Typography className={classes.text}>{t("imprint.terms12_2")}</Typography>
    </div>
  );
};

Legal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(Legal));
