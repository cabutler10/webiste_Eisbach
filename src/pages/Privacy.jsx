import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  container: {
    paddingBottom: 100,
    paddingLeft: "15%",
    paddingRight: "15%"
  },
  title: {
    paddingTop: 45,
    paddingBottom: 30,
    textAlign: "center"
  },
  text: {
    fontSize: 12,
    paddingLeft: 30
  },
  listItem: {
    padding: 0
  }
};

const Privacy = props => {
  const { classes, t } = props;
  return (
    <div className={classes.container} id="privacy">
      <Typography variant="h6" className={classes.title}>
        {t("privacy.privacy")}
      </Typography>

      <Typography variant="subtitle1">{t("privacy.title1")}</Typography>

      <Typography className={classes.text}>{t("privacy.terms1_1")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms1_2")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms1_3")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title2")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms2_1")}</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms2_list1")}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms2_list2")}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms2_list3")}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms2_list4")}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms2_list5")}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms2_list6")}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms2_list7")}
          />
        </ListItem>
      </List>
      <Typography className={classes.text}>{t("privacy.terms2_2")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title3")}</Typography>

      <Typography className={classes.text}>{t("privacy.terms3_1")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms3_2")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms3_3")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms3_4")}</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Internet Explorer: https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Firefox: https://www.mozilla.org/en-US/privacy/websites/#cookies
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Chrome: https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Safari: https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Opera: https://help.opera.com/en/latest/web-preferences/#cookies
            "
          />
        </ListItem>
      </List>
      <Typography className={classes.text}>{t("privacy.terms3_5")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title4")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms4_1")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title5")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms5_1")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title6")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms6_1")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms6_2")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title7")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms7_1")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms7_2")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms7_3")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title8")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms8_1")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title9")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms9_1")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title10")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms10_1")}</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list1")}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list2")}
          />{" "}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list3")}
          />{" "}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list4")}
          />{" "}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list5")}
          />{" "}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list6")}
          />{" "}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list7")}
          />{" "}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t("privacy.terms10_list8")}
          />{" "}
        </ListItem>
      </List>
      <Typography variant="subtitle1">{t("privacy.title10_2")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms10_2")}</Typography>

      <Typography variant="subtitle1">{t("privacy.title11")}</Typography>
      <Typography className={classes.text}>{t("privacy.terms11_1")}</Typography>
    </div>
  );
};

Privacy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(Privacy));
