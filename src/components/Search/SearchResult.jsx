import React from "react";
import classes from "../css/Search.module.css";
import { SearchCardPrimary, SearchCardSecondary } from "./";
import { useGetPokemonByNameSearchQuery } from "../../store/useApi";
import { useTheme, useMediaQuery, CircularProgress } from "@mui/material";
const SearchResult = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { data, isFetching } = useGetPokemonByNameSearchQuery(
    props?.data?.id - 1
  );
  const { data: data1, isFetching: isFetching1 } =
    useGetPokemonByNameSearchQuery(props?.data?.id + 1);
  return (
    <div className={classes.SearchResultContainer}>
      {props?.isFetching || isFetching || isFetching1 ? (
        <CircularProgress
          sx={{ color: "#080808", alignSelf: "center" }}
          size={50}
          thickness={5}
        />
      ) : props?.error ? (
        <h1>Invalid Input..</h1>
      ) : (
        <>
          {!isMobile && data && <SearchCardSecondary data={data} />}
          <SearchCardPrimary data={props?.data} />
          {!isMobile && data1 && <SearchCardSecondary data={data1} />}
        </>
      )}
    </div>
  );
};

export default SearchResult;
