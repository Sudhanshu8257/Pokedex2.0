import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useTheme, useMediaQuery, Paper } from "@mui/material";
import { SelectOps } from "./";
import { useDispatch } from "react-redux";
import { searchSliceActions } from "../../store/search-slice";
const SearchBar = () => {
  const nameInputRef = useRef();
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const pokemonName = nameInputRef?.current.value.toLowerCase();
    dispatch(searchSliceActions.setSearch(pokemonName));
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const font = {
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "bold",
    fontFamily: "inter",
    color: "#F5F5F5",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: !isMobile && "20px",
        flexDirection: isMobile && "column",
        justifyContent: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          display: "flex",
          mb: isMobile && "7px",
          height: "60px",
          alignItems: "center",
          width: isMobile ? "100%" : "80%",
          borderRadius: "15px",
          backgroundColor: "#130F0A",
        }}
        onSubmit={submitHandler}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, ...font, pl: 1, pr: 1 }}
          placeholder="Search Pokemon By Name Or Id"
          inputProps={{ "aria-label": "search pokemon by name or id" }}
          inputRef={nameInputRef}
          type="search"
        />
        <IconButton
          sx={{ pr: "12px", ...font }}
          aria-label="search"
          onClick={submitHandler}
        >
          <SearchIcon
            sx={{ fontSize: isMobile ? "24px" : "40px", color: "#F5F5F5" }}
          />
        </IconButton>
      </Paper>
      <SelectOps />
    </div>
  );
};

export default SearchBar;
