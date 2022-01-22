import React, { useState } from "react";
import { makeStyles, Button, useMediaQuery } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import backgroundImage from "../images/bg-shorten-mobile.svg";
import backgroundImageDesk from "../images/bg-shorten-desktop.svg";
import cache from "../utility/cache";

const useStyles = makeStyles({
  inputContainer: {
    backgroundColor: "hsl(257, 27%, 26%)",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "top right",
    backgroundRepeat: "no-repeat",
    height: 175,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
  },
  inputContainerDesk: {
    backgroundColor: "hsl(257, 27%, 26%)",
    backgroundImage: `url(${backgroundImageDesk})`,
    backgroundPosition: "top right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 100,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 50,
  },
  input: {
    height: 47,
    width: "80%",
    borderRadius: 7,
    padding: "3px 15px",
    fontSize: 20,
    fontFamily: "inherit",
    color: "hsl(257, 7%, 63%)",
    "&:focus": {
      outline: 0,
    },
    "&::placeholder": {
      color: "hsl(257, 7%, 63%)",
    },
  },
  inputDesk: {
    height: 47,
    width: "60%",
    borderRadius: 7,
    padding: "3px 15px",
    fontSize: 20,
    fontFamily: "inherit",
    color: "hsl(257, 7%, 63%)",
    "&:focus": {
      outline: 0,
    },
    "&::placeholder": {
      color: "hsl(257, 7%, 63%)",
    },
  },
  inputError: {
    height: 47,
    width: "60%",
    borderRadius: 7,
    padding: "3px 15px",
    fontSize: 20,
    fontFamily: "inherit",
    color: "hsl(257, 7%, 63%)",
    borderColor: "hsl(0, 87%, 67%)",
    borderWidth: 3.5,
    "&:focus": {
      outline: 0,
    },
    "&::placeholder": {
      color: "hsl(257, 7%, 63%)",
    },
  },
  inputErrorMobile: {
    height: 47,
    width: "80%",
    borderRadius: 7,
    padding: "3px 15px",
    fontSize: 20,
    fontFamily: "inherit",
    color: "hsl(257, 7%, 63%)",
    borderColor: "hsl(0, 87%, 67%)",
    borderWidth: 3.5,
    "&:focus": {
      outline: 0,
    },
    "&::placeholder": {
      color: "hsl(257, 7%, 63%)",
    },
  },
  errorText: {
    position: "relative",
    left: -85,
    top: 5,
    color: "hsl(0, 87%, 67%)",
    fontFamily: "inherit",
    fontStyle: "italic",
  },
  errorTextDesk: {
    color: "hsl(0, 87%, 67%)",
    fontFamily: "inherit",
    fontStyle: "italic",
    position: "absolute",
    top: 115,
    left: 100,
  },
  btn: {
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "inherit",
    fontSize: 20,
    backgroundColor: "hsl(180, 66%, 49%)",
    width: "89%",
    marginTop: 17,
    height: 52,
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "hsl(180, 66%, 49%)",
    },
  },
  btnDesk: {
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "inherit",
    fontSize: 19,
    backgroundColor: "hsl(180, 66%, 49%)",
    width: "18.5%",
    marginTop: 3,
    height: 52,
    fontWeight: "600",
    marginLeft: 25,
    "&:hover": {
      backgroundColor: "hsl(180, 66%, 49%)",
    },
  },
});

const schema = Yup.object({ url: Yup.string().required() });

const InputField = ({ urls, setUrls, error, setError }) => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:375px)");
  const [url] = useState({ url: "" });

  const handleSubmit = async (values, { isSubmitting }) => {
    const currentUrl = `https://api.shrtco.de/v2/shorten?url=https://${values.url}`;

    await axios
      .get(currentUrl)
      .then((response) => {
        setError(false);
        cache.store({
          longUrl: values.url,
          shortUrl: response.data.result.full_short_link2,
        });

        setUrls([
          {
            longUrl: values.url,
            shortUrl: response.data.result.full_short_link2,
          },
          ...urls,
        ]);

        isSubmitting && isSubmitting(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div
      className={mobile ? classes.inputContainer : classes.inputContainerDesk}
    >
      <Formik
        initialValues={url}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, errors, isSubmitting }) => (
          <>
            <input
              type="text"
              className={
                mobile
                  ? errors["url"] || error
                    ? classes.inputErrorMobile
                    : classes.input
                  : errors["url"] || error
                  ? classes.inputError
                  : classes.inputDesk
              }
              placeholder="Shorten a link here..."
              onChange={handleChange("url")}
            />
            {errors["url"] || error ? (
              <span
                className={mobile ? classes.errorText : classes.errorTextDesk}
              >
                {error ? "This is not a valid URL" : "Please add a link"}
              </span>
            ) : null}
            <Button
              className={mobile ? classes.btn : classes.btnDesk}
              onClick={handleSubmit}
            >
              {isSubmitting ? "Loading..." : "Shorten it!"}
            </Button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default InputField;
