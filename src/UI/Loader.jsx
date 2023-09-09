import React from "react";
import { CircularProgress } from "@mui/material";
const Loader = ({ color, size, thickness }) => {
  return (
    <CircularProgress sx={{ color: color }} size={size} thickness={thickness} />
  );
};

export default Loader;
