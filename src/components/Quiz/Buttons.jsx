import { Button, Box } from "@mui/material";
import React from "react";
import NavigateIcon from "@mui/icons-material/NavigateNextRounded";
import { useTheme, useMediaQuery } from "@mui/material";

const Buttons = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const center = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  };
  const font = {
    fontFamily: "poppins",
    fontSize: isMobile ? "18px" : "22px",
    fontWeight: "700",
  };

  return (
    <>
      {props.isAnswered ? (
        <Box
          sx={{
            width: "100%",
            height: "80px",
            ...center,
            mt: isMobile ? "10px" : "10px",
            p: "0px 30px",
            ...center,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              props.questionNo === 5 ? props.reset() : props.next()
            }
            sx={{
              backgroundColor: "#002F51",
              color: "white",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "#002F51",
                boxShadow: "none",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "#002F51",
              },
              height: "50px",
              width: isMobile ? "100px" : "220px",
              textTransform: "none",
              ...font,
              ml: "auto",
            }}
          >
            Next{" "}
            <NavigateIcon
              sx={{
                fontSize: isMobile ? "24px" : "34px",
                fontWeight: "700",
                ml: "10px",
              }}
            />
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "80px",
            backgroundColor: "transparent",
            ...center,
            mt: isMobile ? "10px" : "10px",
            p: "0px 30px",
            ...center,
          }}
        >
          <Button
            onClick={() => props.skip()}
            sx={{
              color: "black",
              borderRadius: "15px",
              height: "50px",
              textTransform: "none",
              ...font,
              fontSize: isMobile ? "20px" : "24px",
            }}
          >
            Skip
            <NavigateIcon
              sx={{ fontSize: isMobile ? "24px" : "34px", fontWeight: "700" }}
            />
          </Button>
          <Button
            variant="outlined"
            onClick={() => props.check()}
            sx={{
              backgroundColor: "#002F51",
              color: "white",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "#002F51",
                boxShadow: "none",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "#002F51",
              },
              height: "50px",
              width: isMobile ? "180px" : "220px",
              textTransform: "none",
              ...font,
              ml: "auto",
            }}
          >
            Check Answer
          </Button>
        </Box>
      )}
    </>
  );
};
export default Buttons;
