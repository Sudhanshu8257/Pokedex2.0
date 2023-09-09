import React from "react";
import classes from "../css/Search.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { TypesResult } from ".";
import { useSelector } from "react-redux";
import {
  useGetPokemonByNameSearchQuery,
  useGetPokemonsByTypeQuery,
} from "../../store/useApi";
const SearchMain = () => {
  let search = useSelector((state) => state.search.search);
  let type = useSelector((state) => state.search.type);
  const { data, isFetching, error } = useGetPokemonByNameSearchQuery(search);
  const {
    data: data1,
    isFetching: isFetching1,
    error: error1,
  } = useGetPokemonsByTypeQuery(type);
  return (
    <div className={classes.searchContainer}>
      <SearchBar />
      {type !== "" && (
        <TypesResult data={data1} isFetching={isFetching1} error={error1} />
      )}
      {search !== "" && (
        <SearchResult data={data} isFetching={isFetching} error={error} />
      )}
    </div>
  );
};

export default SearchMain;
