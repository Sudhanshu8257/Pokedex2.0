import React from "react";
import { textFieldStyles, inputProps } from "../css/Styles";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { TextField, IconButton } from "@mui/material";
const EmailInput = ({ email, handleEmailChange, errors }) => {
  return (
    <TextField
      label="Email"
      type="email"
      value={email}
      onChange={handleEmailChange}
      fullWidth
      margin="normal"
      required
      error={!!errors.email}
      helperText={errors.email}
      InputProps={{
        endAdornment: (
          <IconButton edge="end" size="large" sx={{ color: "black" }}>
            <EmailRoundedIcon fontSize="24px" />
          </IconButton>
        ),
        sx: inputProps,
      }}
      sx={textFieldStyles}
    />
  );
};

export default EmailInput;
