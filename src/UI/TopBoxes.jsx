import React from "react";
import classes from "../components/css/Box.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
const TopBoxes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const outerBox = {
    width: isMobile && "50px",
    height: isMobile && "50px",
  };
  const innerBox = {
    width: isMobile && "30px",
    height: isMobile && "30px",
  };
  return (
    <div className={classes.topContainer}>
      <div
        className={classes.outerBox1}
        style={{ ...outerBox, borderWidth: isMobile && "4px 0px 0px 4px" }}
      >
        <div
          className={classes.innerBox1}
          style={{ ...innerBox, borderWidth: isMobile && "4px 0px 0px 4px" }}
        ></div>
      </div>
      <div
        className={classes.outerBox2}
        style={{ ...outerBox, borderWidth: isMobile && "4px 4px 0px 0px" }}
      >
        <div
          className={classes.innerBox2}
          style={{ ...innerBox, borderWidth: isMobile && "4px 4px 0px 0px" }}
        ></div>
      </div>
    </div>
  );
};

export default TopBoxes;
