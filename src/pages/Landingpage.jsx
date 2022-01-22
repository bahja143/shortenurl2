import React from "react";
import { makeStyles } from "@material-ui/core";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import LowerFooter from "../components/LowerFooter";

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "hsl(257, 7%, 63%)",
  },
});

const Landingpage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Body />
      <Footer />
      <LowerFooter />
    </div>
  );
};

export default Landingpage;
