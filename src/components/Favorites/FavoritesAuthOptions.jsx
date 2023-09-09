import React from "react";
import classes from "../css/Favorites.module.css";
import { AuthLinks } from "../NavBar";
import { useTheme, useMediaQuery } from "@mui/material";
const FavoritesAuthOptions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={classes.opsContaier}
      style={{ fontSize: isMobile && "20px" }}
    >
      <span>Never Miss a Pokemon Again</span>
      <span>Sign Up or Sign In to Save and Track Your Favorite Pokemon!</span>
      <AuthLinks />
    </div>
  );
};

export default FavoritesAuthOptions;
