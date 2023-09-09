export const textFieldStyles = {
  "& .MuiInputLabel-root": {
    fontSize: "18px",
    marginLeft: "10px",
    fontWeight: "500",
    color: "rgba(8, 8, 8, 0.7)",
  },
  "& label.Mui-focused": {
    marginLeft: "5px",
    color: "rgba(8, 8, 8, 0.7)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid black",
    },
    "&:hover fieldset": {
      border: "3px solid black",
    },
    "&.Mui-focused fieldset": {
      border: "3px solid black",
    },
  },
};

export const dividerStyles = {
  borderBottomWidth: 6,
  fontFamily: "inter",
  textTransform: "none",
  fontWeight: "bold",
  "&.MuiDivider-root": {
    "&::after": {
      borderTop: "2px solid black",
    },
    "&::before": {
      borderTop: "2px solid black",
    },
  },
};

export const buttonStyles = {
  borderRadius: "25px",
  height: "60px",
  border: "3px solid black",
  fontFamily: "inter",
  textTransform: "none",
  color: "black",
  fontWeight: 600,
  "&:hover": {
    border: "3px solid black",
  },
};
export const buttonStyles1 = {
  backgroundColor: "#EE4037",
  "&:hover": { backgroundColor: "#B33118" },
  borderRadius: "25px",
  height: "60px",
  textTransform: "none",
  fontFamily: "inter",
  fontWeight: "900",
};
export const inputProps = {
  borderRadius: "25px",
  height: "60px",
  padding: "10px",
  fontFamily: "inter",
  fontWeight: 700,
  fontSize: "18px",
};
