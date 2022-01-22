import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#fff",
    height: 300,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontFamily: "inherit",
    textAlign: "center",
    paddingBottom: 18,
    fontWeight: "600",
    color: "hsl(257, 27%, 26%)",
    fontSize: 24,
  },
  text: {
    color: " hsl(257, 7%, 63%)",
    textAlign: "center",
    fontSize: 19,
    marginBottom: 25,
  },
  textDesk: {
    color: " hsl(257, 7%, 63%)",
    textAlign: "left",
    fontSize: 19,
    marginBottom: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  imageDesk: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    backgroundColor: "hsl(257, 27%, 26%)",
    width: 80,
    height: 80,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -50,
  },
  imageContainerDesk: {
    backgroundColor: "hsl(257, 27%, 26%)",
    width: 50,
    height: 50,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -35,
    left: -75,
  },
});

const Card = ({ icon, header, text }) => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:1024px)");

  return (
    <Container className={classes.container}>
      <div
        className={mobile ? classes.imageContainer : classes.imageContainerDesk}
      >
        <img
          src={icon}
          alt="alt"
          className={mobile ? classes.image : classes.imageDesk}
        />
      </div>
      <Typography variant="h6" className={classes.headerText}>
        {header}
      </Typography>
      <Typography className={mobile ? classes.text : classes.textDesk}>
        {text}
      </Typography>
    </Container>
  );
};

export default Card;
