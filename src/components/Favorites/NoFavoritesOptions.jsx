import React from "react";
import classes from "../css/Favorites.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const NoFavoritesOptions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.noFavsContainer}>
      <span>Start Adding Favorites to See Them Here</span>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          type="Link"
          to="/"
          variant="contained"
          sx={{
            backgroundColor: "#EE4037",
            "&:hover": { backgroundColor: "#B33118" },
            borderRadius: "15px",
            width: isMobile ? "auto" : "350px",
            height: "50px",
            textTransform: "none",
            fontFamily: "poppins",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "20px",
          }}
        >
          Explore the Pokedex
        </Button>
      </Link>
    </div>
  );
};

export default NoFavoritesOptions;
