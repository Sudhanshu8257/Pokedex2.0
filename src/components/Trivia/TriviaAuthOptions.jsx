import React from "react";
import { AuthLinks } from "../NavBar";
import classes from "../css/Trivia.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
const TriviaAuthOptions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.authOps} style={{ fontSize: isMobile && "20px" }}>
      <span>Ready to Play?</span>
      <span>Sign Up or Log In to Unlock Our Pokemon Trivia Quiz!</span>
      <AuthLinks />
    </div>
  );
};

export default TriviaAuthOptions;
