import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import img from "../assets/images/about2.jpg";
import background from "../assets/images/waveBackground.png";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: theme.status.greyBlue,
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 80px",
    backgroundPosition: "bottom",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  textContainer: {
    flexBasis: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 15,
    paddingLeft: 15,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
      paddingRight: 60,
      paddingLeft: 60
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingRight: 60,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  imgContainer: {
    flexBasis: "50%"
  },
  sideText: {
    position: "relative",
    float: "right",
    marginTop: -100,
    marginRight: -20,
    transform: "rotate(-270deg)",
    WebkitTransform: "rotate(-270deg)",
    MozTransform: "rotate(-270deg)",
    MsTransform: "rotate(-270deg)",
    OTransform: "rotate(-270deg)",
    filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)",
    [theme.breakpoints.up("md")]: {
      marginTop: -150,
      marginRight: -40
    }
  },
  img: {
    width: 200,
    height: 150,
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.up("md")]: {
      width: 400,
      height: 300
    }
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 3,
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      fontSize: 42
    }
  },
  text: {
    paddingTop: 30,
    color: theme.palette.common.black,
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 14
    }
  }
}));

function About() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root} id={t("header.about")}>
      <div className={classes.textContainer}>
        <Typography className={classes.title} variant="h5">
          {t("about.sectionTitle1")}
        </Typography>
        <Typography className={classes.title} variant="h5">
          {t("about.sectionTitle2")}
        </Typography>
        <Typography className={classes.text} variant="body1">
          {t("about.message")}
        </Typography>
      </div>
      <Hidden xsDown>
        <div className={classes.imgContainer}>
          <div className={classes.img} />
          {/* <Typography className={classes.sideText}>
            Surf Accessories from Munich
          </Typography> */}
        </div>
      </Hidden>
    </div>
  );
}

export default About;
