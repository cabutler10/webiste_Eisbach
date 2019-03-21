import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(theme => ({
  list: {
    width: 200
  },
  text: {
    textTransform: "uppercase",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    color: theme.status.greyDk
  },
  icon: {
    color: theme.status.grey
  }
}));

const MobileHeaderList = ({ links, linkLabels }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List component="nav">
        {links.map((link, idx) => (
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary={linkLabels[idx]}
            />
            <ArrowIcon className={classes.icon} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

MobileHeaderList.propTypes = {
  linkLabels: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired
};

export default MobileHeaderList;
