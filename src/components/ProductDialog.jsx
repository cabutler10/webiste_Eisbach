import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MobileStepper from "@material-ui/core/MobileStepper";
import StopIcon from "@material-ui/icons/Stop";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { AmazonIcon, EbayIcon } from "../assets/icons/icons";

const styles = theme => ({
  more: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%"
    }
  },
  paper: {
    margin: 15,
    [theme.breakpoints.up("sm")]: {
      margin: 48
    }
  },
  dialogContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
      flexDirection: "row"
    }
  },
  dialogImg: {
    paddingRight: 0,
    paddingLeft: 0,
    flexBasis: "40%",
    [theme.breakpoints.up("md")]: {
      paddingRight: 60,
      paddingLeft: 60
    }
  },
  dialogContent: {
    flexBasis: "50%"
  },
  dialogTitle: {
    textAlign: "center"
  },
  closeButton: {
    float: "right"
  },
  name: {
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: 600,
    textAlign: "left"
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  img: {
    width: "100%"
  },
  listItem: {
    alignItems: "flex-start",
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0
  },
  listItemTextRoot: {
    paddingLeft: 0,
    paddingRight: 0
  },
  listItemText: {
    fontSize: 14
  },
  icon: {
    fontSize: 18
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mobileStepper: {
    background: theme.status.white
  },
  scroll: {
    paddingBottom: 30,
    overflowY: "hidden",
    [theme.breakpoints.up("sm")]: {
      height: "55vh",
      overflowY: "auto"
    },
    "&::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      backgroundColor: theme.status.grey.greyBG
    },
    "&::-webkit-scrollbar": {
      width: 4,
      backgroundColor: theme.status.grey.greyBG
    },
    "&::-webkit-scrollbar-thumb": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      backgroundColor: theme.status.grey.greyDivs
    }
  },
  dialogRoot: {
    overflowY: "auto",
    [theme.breakpoints.up("md")]: {
      overflowY: "hidden"
    }
  }
});

class ProductDialog extends Component {
  state = {
    isDialogOpen: false,
    activeStep: 0
  };

  handleDialogOpen = idx => {
    this.setState({
      isDialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false });
  };

  handleIndexChange = activeStep => {
    this.setState({
      activeStep
    });
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  render() {
    const { product, classes } = this.props;
    const { isDialogOpen, activeStep } = this.state;

    return (
      <Fragment>
        <Button
          variant="outlined"
          className={classes.more}
          onClick={this.handleDialogOpen}
        >
          More
        </Button>
        <Dialog
          open={isDialogOpen}
          onClose={this.handleDialogClose}
          maxWidth="md"
          classes={{ paper: classes.paper }}
        >
          <DialogTitle id="dialog-title" className={classes.dialogTitle}>
            {product.name}
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleDialogClose}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent classes={{ root: classes.dialogRoot }}>
            <div className={classes.dialogContainer}>
              <div className={classes.dialogImg}>
                <SwipeableViews
                  enableMouseEvents
                  index={activeStep}
                  onChangeIndex={this.handleChangeIndex}
                >
                  {product.images.map((img, idx) => (
                    <img
                      src={img}
                      key={`img${idx}`}
                      className={classes.img}
                      alt={`product${idx}`}
                    />
                  ))}
                </SwipeableViews>
                <MobileStepper
                  steps={product.images.length}
                  position="static"
                  activeStep={activeStep}
                  className={classes.mobileStepper}
                  nextButton={
                    <IconButton
                      size="small"
                      onClick={this.handleNext}
                      disabled={activeStep === product.images.length - 1}
                    >
                      <KeyboardArrowRight />
                    </IconButton>
                  }
                  backButton={
                    <IconButton
                      size="small"
                      onClick={this.handleBack}
                      disabled={activeStep === 0}
                    >
                      <KeyboardArrowLeft />
                    </IconButton>
                  }
                />
              </div>
              <div className={classes.dialogContent}>
                <div className={classes.priceContainer}>
                  <Typography variant="h6" className={classes.price}>
                    {`€${product.price}`}
                  </Typography>
                  <div className={classes.iconContainer}>
                    {product.amazon && (
                      <IconButton
                        className={classes.button}
                        aria-label="Amazon"
                        href={product.amazon}
                        target="_blank"
                        rel="noopener"
                      >
                        <AmazonIcon className={classes.icon} />
                      </IconButton>
                    )}
                    {product.ebay && (
                      <IconButton
                        className={classes.button}
                        aria-label="Ebay"
                        href={product.ebay}
                        target="_blank"
                        rel="noopener"
                      >
                        <EbayIcon className={classes.icon} />
                      </IconButton>
                    )}
                  </div>
                </div>
                <List disablePadding className={classes.scroll}>
                  {product.more.map((item, idx) => (
                    <ListItem
                      key={`listItem${idx}`}
                      className={classes.listItem}
                    >
                      <ListItemIcon>
                        <StopIcon className={classes.icon} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        classes={{
                          root: classes.listItemTextRoot,
                          primary: classes.listItemText
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

ProductDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductDialog);
