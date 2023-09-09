import React from "react";
import classes from "../components/css/Authentication.module.css";

import { useTheme, useMediaQuery } from "@mui/material";
import Verification from "../components/Authentication/Verification";
const VerificationPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={classes.VerificationContainer}
      style={{ padding: isMobile && "5px 15px", height: isMobile && "100%" }}
    >
      <span
        className={classes.SignUpHeading}
        style={{ fontSize: isMobile && "40px" }}
      >
        Almost There!
      </span>
      <span
        className={classes.SignUpHeading2}
        style={{ fontSize: isMobile && "20px" }}
      >
        Verify Your Email to Access Your Account
      </span>
      <Verification />
    </div>
  );
};

export default VerificationPage;
