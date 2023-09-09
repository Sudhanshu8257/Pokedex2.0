import React from "react";
import classes from "../css/Home.module.css";
import { HomeMain, HomePagination } from "./";
import ArrowBackward from "@mui/icons-material/ChevronLeftRounded";
import ArrowForward from "@mui/icons-material/ChevronRightRounded";
import { useTheme, useMediaQuery, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter-slice";
const HomeMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <Button
          className={classes.btnContainer}
          style={{ width: "50%", height: "60px" }}
          onClick={decrementHandler}
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "15px",
            "&:hover": { backgroundColor: "#DCDCDC" },
          }}
        >
          <ArrowBackward
            sx={{
              fontSize: isMobile ? 48 : 100,
              fontWeight: "bold",
              color: "#080808",
            }}
          />
        </Button>
        <Button
          className={classes.btnContainer}
          style={{ width: "50%", height: "60px" }}
          onClick={incrementHandler}
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "15px",
            "&:hover": { backgroundColor: "#DCDCDC" },
          }}
        >
          <ArrowForward
            sx={{
              fontSize: isMobile ? 48 : 100,
              fontWeight: "bold",
              color: "#080808",
            }}
          />
        </Button>
      </div>
      <div
        className={classes.mainContainer}
        style={{
          flexDirection: "column",
          gap: isMobile && "20px",
          marginBottom: isMobile && "10px",
        }}
      >
        <HomeMain />
        <HomePagination />
      </div>
    </>
  );
};

export default HomeMobile;
