import React from "react";
import { Outlet } from "react-router-dom";
import classes from "../components/css/Authentication.module.css";
import LogoLeaf from "../components/Authentication/LogoLeaf";
import { useTheme, useMediaQuery } from "@mui/material";
const AuthLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={classes.AuthLayoutContainer}
      style={{
        flexDirection: isMobile && "column",
        gap: isMobile && "20px",
        marginTop: isMobile && "-20px",
      }}
    >
      <LogoLeaf />
      <main
        className={classes.FormContainer}
        style={{
          width: isMobile && "100%",
          borderRadius: isMobile && "15px",
          height: isMobile && "75vh",
          padding: isMobile && "15px 15px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
