import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";

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
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  overlay: {
    marginTop: 30,
    position: "relative"
  },
  img: {
    display: "block",
    height: 100,
    [theme.breakpoints.up("md")]: {
      height: 200
    }
  },
  link: {
    textDecoration: "none",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: ".3s ease",
    background: "rgba(0,0,0,.5)",
    "&:hover": {
      opacity: 1
    }
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "25%",
    position: "absolute"
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
    color: theme.palette.common.white
  },
  count: {
    color: theme.palette.common.white
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
    console.log(photos[0]);
    return (
      <div className={classes.root}>
        <Typography className={classes.text} variant="h5">
          {t("instagram.sectionTitle")}
        </Typography>
        <div className={classes.container}>
          {photos.map((tile, idx) => (
            <div className={classes.overlay}>
              <img
                className={classes.img}
                src={tile.images.standard_resolution.url}
                alt={`instagram ${idx}`}
              />
              <a
                href={tile.link}
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
              >
                <div className={classes.iconContainer}>
                  <LikeIcon className={classes.icon} />
                  <Typography className={classes.count}>
                    {tile.likes.count}
                  </Typography>
                  <CommentIcon className={classes.icon} />
                  <Typography className={classes.count}>
                    {tile.comments.count}
                  </Typography>
                </div>
              </a>
            </div>
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
