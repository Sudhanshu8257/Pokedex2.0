import React from "react";
import classes from "../css/Home.module.css";
import { HomeMobile, HomeDesktop } from "./";
import { useTheme, useMediaQuery } from "@mui/material";
const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={classes.homeContainer}
      style={{
        flexDirection: isMobile && "column",
        gap: isMobile && "20px",
        mt: isMobile && "25px",
        height: isMobile && "100%",
      }}
    >
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </div>
  );
};

export default Home;
