import React from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";

const QuestCounter = ({ score, questionNo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const font = {
    fontFamily: "poppins",
    fontSize: isMobile ? "14px" : "28px",
    fontWeight: "700",
    color: "black",
  };
  return (
    <Box
      sx={{
        width: isMobile ? "110px" : "250px",
        height: isMobile ? "40px" : "70px",
        backgroundColor: "white",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          zIndex: "17",
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
          mr: !isMobile ? "-250px" : "-110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...font,
        }}
      >
        {questionNo} of 5
      </Box>
      <Box sx={{ zIndex: "1", display: "flex", height: "100%", width: "100%" }}>
        <Box
          sx={{
            zIndex: "1",
            width: isMobile ? "22px" : "50px",
            height: "100%",
            backgroundColor:
              questionNo > 1
                ? score[0]
                  ? "#94D7A2"
                  : "#FF5C5C"
                : "transparent",
            borderRadius: "20px 0px 0px 20px",
          }}
        ></Box>
        <Box
          sx={{
            zIndex: "1",
            width: isMobile ? "22px" : "50px",
            height: "100%",
            backgroundColor:
              questionNo > 2
                ? score[1]
                  ? "#94D7A2"
                  : "#FF5C5C"
                : "transparent",
          }}
        ></Box>
        <Box
          sx={{
            zIndex: "1",
            width: isMobile ? "22px" : "50px",
            height: "100%",
            backgroundColor:
              questionNo > 3
                ? score[2]
                  ? "#94D7A2"
                  : "#FF5C5C"
                : "transparent",
          }}
        ></Box>
        <Box
          sx={{
            zIndex: "1",
            width: isMobile ? "22px" : "50px",
            height: "100%",
            backgroundColor:
              questionNo > 4
                ? score[3]
                  ? "#94D7A2"
                  : "#FF5C5C"
                : "transparent",
          }}
        ></Box>
        <Box
          sx={{
            zIndex: "1",
            width: isMobile ? "22px" : "50px",
            height: "100%",
            backgroundColor:
              score[4] === undefined
                ? "transparent"
                : score[4]
                ? "#94D7A2"
                : "#FF5C5C",
            borderRadius: "0px 20px 20px 0px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default QuestCounter;
