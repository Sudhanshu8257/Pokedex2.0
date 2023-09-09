import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Logo = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  let fs = "24px";
  let mfs = "24px";
  if (props?.font) {
    fs = props?.font;
    mfs = props?.mfont;
  }
  const size = isMobile ? mfs : fs;
  const font = {
    fontFamily: "Oswald",
    fontWeight: "bold",
    color: "black",
    letterSpacing: "0.1em",
    fontSize: size,
  };

  return (
    <Box
      component={Link}
      to="/"
      sx={{ textDecoration: "none", ...center, cursor: "pointer" }}
    >
      <Typography sx={{ ...font }}>P</Typography>
      <img
        src="/images/logo.png"
        alt="logo"
        width={fs ? size : "22px"}
        height={fs ? size : "22px"}
      ></img>
      <Typography sx={{ ...font, ml: "1.5px", mr: "-2.5px" }}>KÉDEX</Typography>
    </Box>
  );
};

export default Logo;
