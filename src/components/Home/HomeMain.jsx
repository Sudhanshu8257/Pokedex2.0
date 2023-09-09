import React, { useState } from "react";
import classes from "../css/Home.module.css";
import { PokeImage, PokeInfo } from "./";
import { useTheme, useMediaQuery, CircularProgress } from "@mui/material";
import {
  useGetPokemonsQuery,
  useGetPokemonsDescriptionQuery,
} from "../../store/useApi";
import { useSelector } from "react-redux";

const HomeMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [ShowStats, setShowStats] = useState(false);
  let counter = useSelector((state) => state.counter);
  const { data: data1, isFetching: isFetching1 } =
    useGetPokemonsDescriptionQuery(counter.counter);
  const { data, isFetching } = useGetPokemonsQuery(counter.counter);
  const handleStatsChange = () => {
    setShowStats((prev) => !prev);
  };

  return (
    <div
      className={classes.homeMainContainer}
      style={{
        flexDirection: isMobile && "column",
        minHeight: isMobile && "200px",
      }}
    >
      {isFetching || isFetching1 ? (
        <CircularProgress
          sx={{ color: "#080808", alignSelf: "center" }}
          size={50}
          thickness={5}
        />
      ) : (
        <>
          <PokeImage ShowStats={ShowStats} pokemon={data} />
          <PokeInfo
            ShowStats={ShowStats}
            StatsChange={() => handleStatsChange}
            pokemon={data}
            pokemon_description={data1}
          />
        </>
      )}
    </div>
  );
};

export default HomeMain;
