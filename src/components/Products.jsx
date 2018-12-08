import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { AmazonIcon, EbayIcon } from "../assets/icons/icons";
import ProductDialog from "./ProductDialog";
import { products } from "../data/ProductData";

const styles = theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: theme.palette.common.white,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: 15
  },
  itemContainer: {
    flexBasis: "30%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  img: {
    width: "100%"
  },
  name: {
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: 600,
    textAlign: "center"
  },
  priceContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginRight: 15
  },
  iconContainer: {
    marginLeft: 15
  },
  icon: {
    fill: theme.status.black
  },
  ebay: {
    fontSize: 36
  }
});

class Products extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="products">
        <Typography className={classes.title} variant="h5">
          essential surf equipment
        </Typography>
        <div className={classes.container}>
          {products.map((elem, idx) => (
            <div className={classes.itemContainer} key={`product${idx}`}>
              <img
                src={elem.images[0]}
                className={classes.img}
                alt={`product ${idx}`}
              />
              <div>
                <Typography className={classes.name}>{elem.name}</Typography>
                <div className={classes.priceContainer}>
                  <Typography variant="h6" className={classes.price}>
                    {`€${elem.price}`}
                  </Typography>
                  <div className={classes.iconContainer}>
                    {elem.amazon && (
                      <IconButton
                        className={classes.button}
                        aria-label="Amazon"
                        href={elem.amazon}
                        target="_blank"
                        rel="noopener"
                      >
                        <AmazonIcon className={classes.icon} />
                      </IconButton>
                    )}
                    {elem.ebay && (
                      <IconButton
                        className={classes.button}
                        aria-label="Ebay"
                        href={elem.ebay}
                        target="_blank"
                        rel="noopener"
                      >
                        <EbayIcon
                          className={classnames(classes.icon, classes.ebay)}
                        />
                      </IconButton>
                    )}
                  </div>
                </div>
                <ProductDialog product={elem} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Products);
