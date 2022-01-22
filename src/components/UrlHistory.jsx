import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 175,
    marginTop: 30,
    borderRadius: 7,
  },
  containerDesk: {
    backgroundColor: "#fff",
    width: "100%",
    height: 70,
    marginTop: 30,
    borderRadius: 7,
    display: "flex",
  },
  link: {
    fontFamily: "inherit",
    paddingTop: 15,
    paddingLeft: 15,
    color: "hsl(257, 27%, 26%)",
  },
  linkDesk: {
    fontFamily: "inherit",
    paddingTop: 22,
    paddingLeft: 15,
    color: "hsl(257, 27%, 26%)",
    fontSize: 18,
  },
  hr: {
    border: 0,
    height: 1,
  },
  shorterLink: {
    fontFamily: "inherit",
    paddingTop: 4,
    paddingLeft: 15,
    color: "hsl(180, 66%, 49%)",
  },
  shorterLinkDesk: {
    fontFamily: "inherit",
    paddingTop: 20,
    paddingLeft: 15,
    color: "hsl(180, 66%, 49%)",
    fontSize: 18,
  },
  btn: {
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "inherit",
    fontSize: 17,
    backgroundColor: "hsl(180, 66%, 49%)",
    width: "95%",
    marginTop: 17,
    height: 52,
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "hsl(180, 66%, 49%)",
    },
    marginLeft: 10,
  },
  btnCopy: {
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "inherit",
    fontSize: 17,
    backgroundColor: "hsl(257, 27%, 26%)",
    width: "95%",
    marginTop: 17,
    height: 52,
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "hsl(257, 27%, 26%)",
    },
    marginLeft: 10,
  },
  btnDesk: {
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "inherit",
    fontSize: 15,
    backgroundColor: "hsl(180, 66%, 49%)",
    width: "8%",
    marginTop: 17,
    height: 37,
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "hsl(180, 66%, 49%)",
    },
    marginLeft: 10,
    marginRight: 15,
  },
  btnDeskCopy: {
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "inherit",
    fontSize: 15,
    backgroundColor: "hsl(257, 27%, 26%)",
    width: "8%",
    marginTop: 17,
    height: 37,
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "hsl(257, 27%, 26%)",
    },
    marginLeft: 10,
    marginRight: 15,
  },
  linkWhole: {
    textDecoration: "none",
  },
});

const UrlHistory = ({ shortUrl, longUrl }) => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:375px)");
  const [copy, setCopy] = useState();

  const handleCopy = (shortUrl) => {
    setCopy(shortUrl);
    navigator.clipboard.writeText(shortUrl);
  };

  const handleSummary = (text) => {
    const max = 30;

    if (!text) return "";

    const letters = text.split("");

    if (letters.length > max) {
      return letters.slice(0, max).join("") + "...";
    } else {
      return letters.join("");
    }
  };

  return (
    <div className={mobile ? classes.container : classes.containerDesk}>
      <a href={shortUrl} className={classes.linkWhole} target="_blank">
        <Typography className={mobile ? classes.link : classes.linkDesk}>
          {handleSummary(longUrl)}
        </Typography>
      </a>
      <hr color="#e6e6e6" className={classes.hr} />
      <a href={shortUrl} className={classes.linkWhole} target="_blank">
        <Typography
          className={mobile ? classes.shorterLink : classes.shorterLinkDesk}
        >
          {shortUrl}
        </Typography>
      </a>
      <Button
        className={
          mobile
            ? copy === shortUrl
              ? classes.btnCopy
              : classes.btn
            : copy === shortUrl
            ? classes.btnDeskCopy
            : classes.btnDesk
        }
        onClick={() => handleCopy(shortUrl)}
      >
        {copy === shortUrl ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

export default UrlHistory;
