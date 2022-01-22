import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "hsl(180, 66%, 49%)",
    width: 10,
    height: 100,
  },
  containerDesk: {
    backgroundColor: "hsl(180, 66%, 49%)",
    width: 100,
    height: 10,
  },
});

const LineThrought = () => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:1024px)");

  return <div className={mobile ? classes.container : classes.containerDesk} />;
};

export default LineThrought;
