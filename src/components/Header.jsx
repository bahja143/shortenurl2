import React, { useState } from "react";
import { Menu } from "@material-ui/icons";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Button,
  useMediaQuery,
} from "@material-ui/core";

import Logo from "../images/illustration-working.svg";

const useStyles = makeStyles({
  container: {
    padding: "30px 20px",
    backgroundColor: "#fff",
    height: 1000,
  },
  containerMobileOpenNav: {
    padding: "30px 20px",
    backgroundColor: "#fff",
    height: 1300,
  },
  containerIpad: {
    padding: "30px 20px",
    backgroundColor: "#fff",
    height: 700,
  },
  containerDesk: {
    padding: "30px 80px",
    backgroundColor: "#fff",
    height: 750,
  },
  logo: {
    color: "hsl(257, 27%, 26%)",
    fontSize: 35,
    fontWeight: "bolder",
    fontFamily: "inherit",
  },
  icon: {
    color: "hsl(257, 7%, 63%)",
    fontSize: 38,
    position: "relative",
    top: 4,
  },
  image: {
    width: 500,
    height: 400,
  },
  imageDesk: {
    width: 600,
    height: 400,
  },
  headerContainer: {
    marginBottom: 25,
  },
  headerBody: {
    overflow: "hidden",
  },
  headerDeskBody: {
    overflow: "hidden",
    marginTop: 100,
  },
  headerText: {
    fontWeight: "bolder",
    fontFamily: "inherit",
    textAlign: "center",
    fontSize: 40,
    marginTop: 30,
  },
  headerTextDesk: {
    fontWeight: "bolder",
    fontFamily: "inherit",
    textAlign: "left",
    fontSize: 40,
    marginTop: 30,
    width: 350,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    color: "hsl(257, 7%, 63%)",
  },
  textDesk: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 20,
    color: "hsl(257, 7%, 63%)",
    width: 450,
  },
  btn: {
    backgroundColor: "hsl(180, 66%, 49%)",
    color: "#fff",
    marginTop: 28,
    width: 170,
    height: 52,
    borderRadius: 50,
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "capitalize",
    "&:hover": {
      color: "#fff",
      backgroundColor: "hsl(180, 66%, 49%)",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textContainerDesk: {
    display: "flex",
    flexDirection: "column",
  },
  mobileNav: {
    backgroundColor: "hsl(257, 27%, 26%)",
    width: "90%",
    height: 325,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    position: "relative",
    left: 16.5,
    paddingTop: 25,
  },
  mobileNavItem: {
    color: "#fff",
    fontSize: 18.5,
    margin: "10px 0",
    fontWeight: "600",
    fontFamily: "inherit",
  },
  hr: {
    width: 250,
    borderWidth: 0,
    height: 0.5,
    margin: "15px 0",
  },
  loginbtn: {
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 18.5,
    fontWeight: "600",
    fontFamily: "inherit",
    width: 250,
  },
  signUpBtn: {
    color: "#fff",
    backgroundColor: "hsl(180, 66%, 49%)",
    textTransform: "capitalize",
    fontSize: 18.5,
    fontWeight: "600",
    fontFamily: "inherit",
    width: 250,
    borderRadius: 25,
    marginTop: 10,
    "&:hover": {
      color: "#fff",
      backgroundColor: "hsl(180, 66%, 49%)",
    },
  },
  loginbtnDesk: {
    color: "hsl(257, 7%, 63%)",
    textTransform: "capitalize",
    fontSize: 17,
    fontFamily: "inherit",
    position: "relative",
    top: 10,
    "&:hover": {
      color: "hsl(257, 27%, 26%)",
      cursor: "pointer",
    },
  },
  sugnUpDesk: {
    color: "#fff",
    backgroundColor: "hsl(180, 66%, 49%)",
    textTransform: "capitalize",
    fontSize: 17,
    fontFamily: "inherit",
    width: 120,
    height: 40,
    marginLeft: 30,
    borderRadius: 25,
    position: "relative",
    top: 5,
    "&:hover": {
      color: "#fff",
      backgroundColor: "hsl(180, 66%, 49%)",
    },
  },
  deskNavItem: {
    color: "hsl(257, 7%, 63%)",
    position: "relative",
    top: 18,
    margin: "0 20px",
    fontFamily: "inherit",
    "&:hover": {
      color: "hsl(257, 27%, 26%)",
      cursor: "pointer",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const [showNav, setShowNav] = useState(false);
  const mobileOrIpa = useMediaQuery("(max-width:768px)");
  const mobile = useMediaQuery("(max-width:375px)");

  const handleNavOpen = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  return (
    <Container
      className={
        mobileOrIpa
          ? mobile
            ? showNav
              ? classes.containerMobileOpenNav
              : classes.container
            : classes.containerIpad
          : classes.containerDesk
      }
    >
      <Grid
        container
        justifyContent="space-between"
        className={classes.headerContainer}
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography className={classes.logo}>Shorty</Typography>
            </Grid>
            {!mobileOrIpa && (
              <>
                <Grid item>
                  <Typography className={classes.deskNavItem}>
                    Features
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.deskNavItem}>
                    Pricing
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.deskNavItem}>
                    Resources
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item>
          {mobileOrIpa ? (
            <Button onClick={handleNavOpen}>
              <Menu className={classes.icon} />
            </Button>
          ) : (
            <Grid container>
              <Grid item>
                <Typography className={classes.loginbtnDesk}>Login</Typography>
              </Grid>
              <Grid item>
                <Button className={classes.sugnUpDesk}>Sign up</Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      {showNav && (
        <Grid container className={classes.mobileNav}>
          <Grid item>
            <Typography className={classes.mobileNavItem}>Features</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.mobileNavItem}>Pricing</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.mobileNavItem}>Resources</Typography>
          </Grid>
          <Grid item>
            <hr className={classes.hr} color="#57535f" />
          </Grid>
          <Grid item>
            <Button className={classes.loginbtn}>Login</Button>
          </Grid>
          <Grid item>
            <Button className={classes.signUpBtn}>Sign Up</Button>
          </Grid>
        </Grid>
      )}

      <Grid
        container
        className={mobileOrIpa ? classes.headerBody : classes.headerDeskBody}
        justifyContent="space-between"
      >
        <Grid
          item
          className={
            mobileOrIpa ? classes.textContainer : classes.textContainerDesk
          }
          xl={6}
          lg={6}
          sm={6}
          xs={12}
        >
          <Typography
            variant="h3"
            className={mobile ? classes.headerText : classes.headerTextDesk}
          >
            More than just shorter links
          </Typography>
          <Typography className={mobile ? classes.text : classes.textDesk}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </Typography>
          <Button className={classes.btn}>Get Started</Button>
        </Grid>

        <Grid item xl={6} lg={6} sm={6} xs={12}>
          <img
            src={Logo}
            alt="illustration"
            className={mobile ? classes.image : classes.imageDesk}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
