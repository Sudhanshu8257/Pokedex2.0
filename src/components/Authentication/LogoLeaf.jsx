import React from "react";
import classes from "../css/Authentication.module.css";
import Logo from "../../UI/Logo";
import { useTheme, useMediaQuery } from "@mui/material";
const LogoLeaf = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={classes.logoLeafContainer}
      style={{
        height: isMobile && "60px",
        borderRadius: isMobile && "15px",
        width: isMobile && "100%",
      }}
    >
      <Logo font={"48px"} mfont={"28px"} />
    </div>
  );
};

export default LogoLeaf;
