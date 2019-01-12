import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    background: theme.status.white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    paddingTop: 30,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingBottom: 30,
      paddingTop: 30
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 90,
      paddingRight: 90,
      paddingBottom: 90,
      paddingTop: 90
    }
  },
  text: {
    textTransform: "uppercase",
    paddingBottom: 5,
    fontSize: 18,
    [theme.breakpoints.up("md")]: {
      fontSize: 24
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 30
  },
  img: {
    flexBasis: "15%",
    height: 200
  }
});

class Instagram extends Component {
  state = { photos: [] };

  componentWillMount() {
    fetch(
      "https://api.instagram.com/v1/users/self/media/recent/?access_token=8544844204.54c99e2.750584200cb14f0e8deea67e3848d97b"
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          photos: data.data.slice(0, 6)
        });
      });
  }

  render() {
    const { classes, t } = this.props;
    const { photos } = this.state;
    return (
      <div className={classes.root}>
        <Typography className={classes.text} variant="h5">
          {t("instagram.sectionTitle")}
        </Typography>
        <div className={classes.container}>
          {photos.map((elem, idx) => (
            <img
              key={`photo${idx}`}
              src={elem.images.standard_resolution.url}
              className={classes.img}
              alt={`instragram pic ${idx}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

Instagram.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(Instagram));
