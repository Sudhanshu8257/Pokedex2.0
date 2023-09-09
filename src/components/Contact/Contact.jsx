import React from "react";
import classes from "../css/Contact.module.css";
import { TopBoxes, BottomBoxes } from "../../UI";
import { ContactMain } from "./";
import { useTheme, useMediaQuery } from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      className={classes.contactContainer}
      style={{ height: isMobile && "100%", maxHeight: !isMobile && "80vh" }}
    >
      <TopBoxes />
      <ContactMain />
      <BottomBoxes />
    </div>
  );
};

export default Contact;
