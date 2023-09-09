import React from "react";
import classes from "../css/Trivia.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
const ScoreCounter = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const calculateScore = () => {
    let score = props.score;
    let count = 0;
    for (let i = 0; i < score.length; i++) {
      if (score[i]) {
        count += 20;
      }
    }
    return count;
  };
  return (
    <div>
      <div
        className={classes.scoreCounter}
        style={{
          width: isMobile ? "110px" : "250px",
          height: isMobile ? "40px" : "70px",
          fontSize: isMobile ? "14px" : "28px",
        }}
      >
        Score: {calculateScore()}pts
      </div>
    </div>
  );
};

export default ScoreCounter;
