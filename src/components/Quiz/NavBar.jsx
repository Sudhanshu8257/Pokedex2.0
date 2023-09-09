import React from "react";
import Logo from "../../UI/Logo";
import QuestCounter from "./QuestCounter";
import ScoreCounter from "./ScoreCounter";
import { useTheme, useMediaQuery } from "@mui/material";
import classes from "../css/Trivia.module.css";
const NavBar = ({ score, questionNo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return !isMobile ? (
    <div className={classes.navBar}>
      <QuestCounter questionNo={questionNo} score={score} />
      <Logo font={"38px"} mfont={"32px"} />
      <ScoreCounter score={score} />
    </div>
  ) : (
    <div className={classes.navbarMob} style={{ gap: isMobile && "10px" }}>
      <Logo font={isMobile && "28px"} mfont={isMobile && "28px"} />
      <div
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <QuestCounter questionNo={questionNo} score={score} />
        <ScoreCounter score={score} />
      </div>
    </div>
  );
};

export default NavBar;
