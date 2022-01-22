import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";

import { Facebook, Twitter, Pinterest, Instagram } from "@material-ui/icons";

const useStyles = makeStyles({
  container: {
    backgroundColor: "hsl(260, 8%, 14%)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerDesk: {
    backgroundColor: "hsl(260, 8%, 14%)",
    backgroundSize: "cover",
    width: "100%",
    height: 250,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingTop: 30,
  },
  logo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "inherit",
    margin: "26px 0",
  },
  logoDesk: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "inherit",
    margin: "14px 0",
  },
  headerText: {
    color: "#fff",
    fontFamily: "inherit",
    textAlign: "center",
    fontSize: 16.5,
    fontWeight: "500",
    marginTop: 22,
    marginBottom: 12,
  },
  text: {
    color: "hsl(0, 0%, 75%)",
    fontFamily: "inherit",
    textAlign: "center",
    fontSize: 14,
    margin: "8px 0",
    "&:hover": {
      color: "hsl(180, 66%, 49%)",
      cursor: "pointer",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  iconContainer: {
    marginTop: 50,
  },
  iconContainerDesk: {
    marginTop: 30,
  },
  icon: {
    margin: "0 10px",
    color: "#fff",
    fontSize: 35,
    "&:hover": {
      color: "hsl(180, 66%, 49%)",
      cursor: "pointer",
    },
  },
});

const LowerFooter = () => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width: 375px)");

  return (
    <Container disableGutters>
      <Grid
        container
        className={mobile ? classes.container : classes.containerDesk}
      >
        <Grid item>
          <Typography className={mobile ? classes.logo : classes.logoDesk}>
            Shorty
          </Typography>
        </Grid>

        <Grid item>
          <Grid container className={classes.textContainer}>
            <Grid item>
              <Typography className={classes.headerText}>Features</Typography>
              <Typography className={classes.text}>Link Shortening</Typography>
              <Typography className={classes.text}> Branded Links</Typography>
              <Typography className={classes.text}>Analytics</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item>
              <Typography className={classes.headerText}>Resources</Typography>
              <Typography className={classes.text}>Blog</Typography>
              <Typography className={classes.text}>Developers</Typography>
              <Typography className={classes.text}>Support</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item>
              <Typography className={classes.headerText}>Company</Typography>
              <Typography className={classes.text}>About</Typography>
              <Typography className={classes.text}>Our Team</Typography>
              <Typography className={classes.text}>Careers</Typography>
              <Typography className={classes.text}>Contact</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            className={
              mobile ? classes.iconContainer : classes.iconContainerDesk
            }
          >
            <Grid item>
              <Facebook className={classes.icon} />
            </Grid>
            <Grid item>
              <Twitter className={classes.icon} />
            </Grid>
            <Grid item>
              <Pinterest className={classes.icon} />
            </Grid>
            <Grid item>
              <Instagram className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LowerFooter;
