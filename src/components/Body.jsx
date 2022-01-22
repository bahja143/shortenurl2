import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";

import TextField from "./TextField";
import Card from "./Card";
import LineThrought from "./LineThrought";
import UrlHistory from "./UrlHistory";
import cache from "../utility/cache";

import icon1 from "../images/icon-brand-recognition.svg";
import icon2 from "../images/icon-detailed-records.svg";
import icon3 from "../images/icon-fully-customizable.svg";

const useStyles = makeStyles({
  container: {
    backgroundColor: "hsl(257, 7%, 95%)",
    paddingTop: 25,
    paddingBottom: 25,
    height: "2200px",
  },
  containerDesk: {
    backgroundColor: "hsl(257, 7%, 95%)",
    paddingTop: 25,
    paddingBottom: 25,
    height: "1100px",
    padding: "0 50px",
  },
  containerIpad: {
    backgroundColor: "hsl(257, 7%, 95%)",
    height: "1800px",
  },
  headerText: {
    color: "hsl(257, 27%, 26%)",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "inherit",
    textAlign: "center",
    marginBottom: 23,
  },
  text: {
    color: "hsl(257, 7%, 63%)",
    fontFamily: "inherit",
    textAlign: "center",
    fontSize: 17,
    lineHeight: 1.6,
  },
  textDesk: {
    color: "hsl(257, 7%, 63%)",
    fontFamily: "inherit",
    fontSize: 17,
    lineHeight: 1.6,
    textAlign: "center",
  },
  cardContainer: {
    paddingTop: 75,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContainerIpad: {
    paddingTop: 75,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContainerDesk: {
    paddingTop: 75,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  card2: {
    position: "relative",
    top: 40,
  },
  card3: {
    position: "relative",
    top: 80,
  },
  lineTh: {
    position: "relative",
    top: -2,
    height: 65,
  },
  lineTh2: {
    position: "relative",
    top: 40,
    height: 65,
  },
  urlFiledDesk: {
    position: "relative",
    top: -100,
  },
  urlFiled: {
    position: "relative",
    top: -125,
  },
  urlFiledIpad: {
    position: "relative",
    top: -85,
  },
});

const Body = () => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:375px)");
  const mobileAndIpad = useMediaQuery("(max-width:1024px)");
  const Ipad = !mobile && mobileAndIpad;
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setUrls(cache.get() ? cache.get() : []);
  }, []);

  return (
    <Container
      className={
        mobileAndIpad
          ? mobile
            ? classes.container
            : classes.containerIpad
          : classes.containerDesk
      }
    >
      <div
        className={
          mobileAndIpad
            ? mobile
              ? classes.urlFiled
              : classes.urlFiledIpad
            : classes.urlFiledDesk
        }
      >
        <TextField
          urls={urls}
          setUrls={setUrls}
          error={error}
          setError={setError}
        />

        <Grid container>
          {urls.slice(0, 3).map((url) => (
            <Grid item xs={12}>
              <UrlHistory
                key={url.shortUrl}
                longUrl={url.longUrl}
                shortUrl={url.shortUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <Typography variant="h4" className={classes.headerText}>
        Advanced Statistics
      </Typography>
      <Typography className={mobileAndIpad ? classes.text : classes.textDesk}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Typography>

      <Grid
        container
        className={
          mobileAndIpad
            ? mobile
              ? classes.cardContainer
              : classes.cardContainerIpad
            : classes.cardContainerDesk
        }
      >
        <Grid item xs={12} xl={3} lg={3}>
          <Card
            icon={icon1}
            header="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
        </Grid>

        <Grid item className={Ipad && classes.lineTh}>
          <LineThrought xl={2} />
        </Grid>

        <Grid item xs={12} xl={3} lg={3} className={!mobile && classes.card2}>
          <Card
            icon={icon2}
            header="Detailed Records"
            text=" Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </Grid>

        <Grid item className={Ipad && classes.lineTh2}>
          <LineThrought xl={2} />
        </Grid>

        <Grid item xs={12} xl={3} lg={3} className={!mobile && classes.card3}>
          <Card
            icon={icon3}
            header="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Body;
