import React from "react";
import classes from "../components/css/Authentication.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
import SignInForm from "../components/Authentication/SignInForm";
const SignInPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={classes.SignUpContainer}
      style={{ padding: isMobile && "5px 15px", height: isMobile && "100%" }}
    >
      <span
        className={classes.SignUpHeading}
        style={{ fontSize: isMobile && "40px" }}
      >
        Welcome Back
      </span>
      <span
        className={classes.SignUpHeading2}
        style={{ fontSize: isMobile && "20px" }}
      >
        Login to your account
      </span>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
