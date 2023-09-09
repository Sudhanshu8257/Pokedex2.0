import React, { useEffect, useState } from "react";
import classes from "../css/Trivia.module.css";
import { Button, Avatar, IconButton } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Logo from "../../UI/Logo";
import { useNavigate } from "react-router-dom";
import DialogBox from "./DialogBox";
const StartScreen = ({ onStart }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user] = useAuthState(auth);
  const [isopen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleStart = () => {
    onStart();
  };

  useEffect(() => {
    if (!user) {
      navigate("/trivia");
    }
    if (user && !user.emailVerified) {
      navigate("/verification");
    }
  }, [user, navigate]);
  const name = "Poké Trivia Challenge";
  const description =
    "Test your knowledge of the world of Pokemon with this fun and interactive quiz!";
  return (
    <div
      className={classes.startScreen}
      style={{ padding: isMobile && "20px 10px" }}
    >
      <div className={classes.startBar}>
        <IconButton aria-label="back" onClick={() => navigate("/")}>
          <HomeRoundedIcon
            sx={{ color: "white", fontSize: isMobile ? "34px" : "44px" }}
          />
        </IconButton>
        <Logo font={"38px"} mfont={"28px"} />
        <Avatar
          src={user?.photoURL ? user?.photoURL : "/images/A.png"}
          sx={{
            width: isMobile ? 34 : 48,
            height: isMobile ? 34 : 48,
            bgcolor: "#F5F5F5",
          }}
        />
      </div>
      <div className={classes.startMain}>
        <span
          className={classes.startHeading}
          style={{ fontSize: isMobile && "38px" }}
        >
          {name}
        </span>
        <span
          className={classes.startSubHeading}
          style={{ fontSize: isMobile && "20px" }}
        >
          {description}
        </span>
        <div className={classes.startBtnContainer}>
          <Button
            variant="outlined"
            size={isMobile ? "medium" : "large"}
            onClick={handleOpen}
            sx={{
              fontFamily: "poppins",
              color: "white",
              borderRadius: "10px",
              border: "1px solid white",
              fontSize: "20px",
              textTransform: "none",
              "&:hover": { border: "1px solid white" },
            }}
          >
            Rules
          </Button>
          <Button
            variant="contained"
            size={isMobile ? "medium" : "large"}
            onClick={handleStart}
            sx={{
              fontFamily: "poppins",
              color: "white",
              backgroundColor: "#002F51",
              textTransform: "none",
              fontSize: "20px",
              borderRadius: "10px",
            }}
          >
            Let's Go
          </Button>
        </div>
        <DialogBox isOpen={isopen} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default StartScreen;
