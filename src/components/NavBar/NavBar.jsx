import React from "react";
import Logo from "../../UI/Logo";
import classes from "../css/Navbar.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
import { AuthLinks, NavLinks, SwipeableDrawer } from "./";
const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.navContainer}>
      <Logo />
      {isMobile ? (
        <SwipeableDrawer />
      ) : (
        <>
          <NavLinks />
          <AuthLinks />
        </>
      )}
    </div>
  );
};

export default NavBar;
