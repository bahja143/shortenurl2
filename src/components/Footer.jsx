import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";

import BgImage from "../images/bg-boost-mobile.svg";
import BgImageDesk from "../images/bg-boost-desktop.svg";

const useStyles = makeStyles({
  container: {
    backgroundColor: "hsl(257, 27%, 26%)",
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerDesk: {
    backgroundColor: "hsl(257, 27%, 26%)",
    backgroundImage: `url(${BgImageDesk})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    fontFamily: "inherit",
    fontSize: 27,
    fontWeight: "700",
  },
  btn: {
    backgroundColor: "hsl(180, 66%, 49%)",
    color: "#fff",
    marginTop: 28,
    width: 175,
    height: 52,
    borderRadius: 50,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    "&:hover": {
      color: "#fff",
      backgroundColor: "hsl(180, 66%, 49%)",
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:375px)");

  return (
    <Container className={mobile ? classes.container : classes.containerDesk}>
      <Typography className={classes.text}>Boost your links today</Typography>
      <Button className={classes.btn}>Get Started</Button>
    </Container>
  );
};

export default Footer;
