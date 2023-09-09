import React from "react";
import classes from "../css/Account.module.css";
import { TopBoxes, BottomBoxes } from "../../UI";
import { useTheme, useMediaQuery, Button } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
const TriviaOps = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.TriviaOpsContainer}>
      <TopBoxes />
      <div className={classes.TriviaOpsMain}>
        <span>
          Get Your Brain in the Game: Try Our Fun and Challenging Trivia Quiz!
        </span>
        <Link to={"/pokemonTrivia"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EE4037",
              "&:hover": { backgroundColor: "#B33118" },
              borderRadius: "15px",
              width: isMobile ? "180px" : "220px",
              height: isMobile ? "50px" : "60px",
              textTransform: "none",
              fontFamily: "poppins",
              fontWeight: "bold",
              fontSize: isMobile ? "18px" : "24px",
            }}
          >
            Play Now
            <ArrowForward
              sx={{ fontSize: isMobile ? "30px" : "34px", ml: "auto" }}
            />
          </Button>
        </Link>
      </div>
      <BottomBoxes />
    </div>
  );
};

export default TriviaOps;
