import React from "react";
import SignUpForm from "../components/Authentication/SignUpForm";
import classes from "../components/css/Authentication.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
const SignUpPage = () => {
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
        Register
      </span>
      <span
        className={classes.SignUpHeading2}
        style={{ fontSize: isMobile && "20px" }}
      >
        Create Your Account
      </span>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
