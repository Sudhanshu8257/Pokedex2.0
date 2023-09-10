import { Box } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const StatsChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.value > 0) {
    barFillHeight = Math.round((props.value / 250) * 100) + "%";
  }
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        height: isMobile ? "80%" : "95%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: isMobile ? "35px" : "40px",
      }}
    >
      <Box
        sx={{
          fontWeight: "700",
          textAlign: "center",
          fontFamily: "inter",
          fontSize: isMobile ? "12px" : "16px",
          padding: "3px",
          color: "#080808",
        }}
      >
        {props.value}
      </Box>
      <Box
        sx={{
          height: isMobile ? "189px" : "369px",
          width: "100%",
          borderRadius: "15px",
          backgroundColor: "rgba(238, 64, 55, 0.20);",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            height: barFillHeight,
            backgroundColor: "#EE4037",
            width: "100%",
            transition: "all 0.5s ease-out",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          fontWeight: "700",
          textAlign: "center",
          fontFamily: "inter",
          fontSize: isMobile ? "12px" : "16px",
          color: "#080808",
        }}
      >
        {capitalize(props.label)}
      </Box>
    </Box>
  );
};

export default StatsChartBar;
