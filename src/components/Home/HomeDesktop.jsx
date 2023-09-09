import React from "react";
import classes from "../css/Home.module.css";
import { HomeMain, HomePagination } from "./";
import ArrowBackward from "@mui/icons-material/ChevronLeftRounded";
import ArrowForward from "@mui/icons-material/ChevronRightRounded";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter-slice";
const HomeDesktop = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <>
      <Button
        className={classes.btnContainer}
        onClick={decrementHandler}
        sx={{
          backgroundColor: "#F5F5F5",
          borderRadius: "15px",
          "&:hover": { backgroundColor: "#DCDCDC" },
        }}
      >
        <ArrowBackward
          sx={{ fontSize: 100, fontWeight: "bold", color: "#080808" }}
        />
      </Button>
      <div className={classes.mainContainer}>
        <HomeMain />
        <HomePagination />
      </div>
      <Button
        className={classes.btnContainer}
        onClick={incrementHandler}
        sx={{
          backgroundColor: "#F5F5F5",
          borderRadius: "15px",
          "&:hover": { backgroundColor: "#DCDCDC" },
        }}
      >
        <ArrowForward
          sx={{ fontSize: 100, fontWeight: "bold", color: "#080808" }}
        />
      </Button>
    </>
  );
};

export default HomeDesktop;
