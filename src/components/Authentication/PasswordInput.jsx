import React from "react";
import { textFieldStyles, inputProps } from "../css/Styles";
import LockIcon from "@mui/icons-material/Lock";
import {
    TextField,
    IconButton
  } from "@mui/material";
const PasswordInput = ({ password, handlePasswordChange, errors }) => {
  return (
    <TextField
      label="Password"
      type="password"
      value={password}
      onChange={handlePasswordChange}
      fullWidth
      margin="normal"
      required
      error={!!errors.password}
      helperText={errors.password}
      InputProps={{
        endAdornment: (
          <IconButton edge="end" size="large" sx={{ color: "black" }}>
            <LockIcon fontSize="24px" />
          </IconButton>
        ),
        sx: inputProps,
      }}
      sx={textFieldStyles}
    />
  );
};

export default PasswordInput;
