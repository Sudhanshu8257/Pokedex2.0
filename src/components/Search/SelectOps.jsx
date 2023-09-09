import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { searchSliceActions } from "../../store/search-slice";
const MySelectComponent = () => {
  const dispatch = useDispatch();
  let type = useSelector((state) => state.search.type);
  const handleChange = (event) => {
    dispatch(searchSliceActions.setType(event.target.value));
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
    <FormControl
      sx={{
        width: isMobile ? "100%" : "20%",
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
      }}
    >
      <InputLabel sx={{ ...font }} shrink={type !== ""}>
        {type !== "" ? "" : "Types"}
      </InputLabel>
      <Select
        value={type}
        onChange={handleChange}
        sx={{
          backgroundColor: "#130F0A",
          borderRadius: "15px",
          minWidth: "1",
          height: "60px",
          ...font,
          "& .MuiSelect-icon": { color: "#F5F5F5" },
          "& .MuiSelect-filled": { border: "1px solid green" },
        }}
      >
        <MenuItem value="" disabled>
          <em>Types</em>
        </MenuItem>
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="fighting">Fighting</MenuItem>
        <MenuItem value="flying">Flying</MenuItem>
        <MenuItem value="poison">Poison</MenuItem>
        <MenuItem value="ground">Ground</MenuItem>
        <MenuItem value="rock">Rock</MenuItem>
        <MenuItem value="bug">Bug</MenuItem>
        <MenuItem value="ghost">Ghost</MenuItem>
        <MenuItem value="steel">Steel</MenuItem>
        <MenuItem value="fire">Fire</MenuItem>
        <MenuItem value="water">Water</MenuItem>
        <MenuItem value="grass">Grass</MenuItem>
        <MenuItem value="electric">Electric</MenuItem>
        <MenuItem value="psychic">Psychic</MenuItem>
        <MenuItem value="ice">Ice</MenuItem>
        <MenuItem value="dragon">Dragon</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="fairy">Fairy</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MySelectComponent;
