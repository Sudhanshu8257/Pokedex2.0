import React from "react";
import classes from "../css/Trivia.module.css";
import { useTheme, useMediaQuery, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const TriviaMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <div
      className={classes.triviaMain}
      style={{ fontSize: isMobile && "20px" }}
    >
      <span>
        Unlock Your Inner Trivia Champion: Take Our Pokemon Quiz and Score Big!
      </span>
      <Button
        variant="contained"
        onClick={() => navigate("/pokemonTrivia")}
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
        Take Our Trivia Quiz Now
      </Button>
    </div>
  );
};

export default TriviaMain;
