import React from "react";
import classes from "../css/Home.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
import UsePagination from "./UsePagination";
import { useSelector } from "react-redux";

const HomePagination = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let counter = useSelector((state) => state.counter);

  return (
    <div
      className={classes.paginationContainer}
      style={{
        height: isMobile && "60px",
        minHeight: isMobile && "60px",
        padding: "0px 0px",
      }}
    >
      <UsePagination counter={counter.counter} />
    </div>
  );
};

export default HomePagination;
