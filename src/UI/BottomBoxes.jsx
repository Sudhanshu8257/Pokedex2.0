import React from "react";
import classes from "../components/css/Box.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
const BottomBoxes = () => {
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
    <div className={classes.bottomContainer}>
      <div
        className={classes.outerBox3}
        style={{ ...outerBox, borderWidth: isMobile && "0px 0px 4px 4px" }}
      >
        <div
          className={classes.innerBox3}
          style={{ ...innerBox, borderWidth: isMobile && "0px 0px 4px 4px" }}
        ></div>
      </div>
      <div
        className={classes.outerBox4}
        style={{ ...outerBox, borderWidth: isMobile && "0px 4px 4px 0px" }}
      >
        <div
          className={classes.innerBox4}
          style={{ ...innerBox, borderWidth: isMobile && "0px 4px 4px 0px" }}
        ></div>
      </div>
    </div>
  );
};

export default BottomBoxes;
