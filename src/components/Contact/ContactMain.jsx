import React from "react";
import classes from "../css/Contact.module.css";
import { ContactCard } from "./";
import { useTheme, useMediaQuery } from "@mui/material";

const ContactMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMailClick = () => {
    const email = "lohanasudhanshu@example.com";
    const subject = "Hello";
    const body = "I would like to get in touch with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  const handletwitterClick = () => {
    window.open(
      "https://twitter.com/Sudhans83606527?t=64ov1uBDjxoloKgIPM_GSg&s=09",
      "_blank"
    );
  };

  const handlelinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/sudhanshu-lohana-b7834821b",
      "_blank"
    );
  };
  return (
    <div
      className={classes.contactMain}
      style={{ fontSize: isMobile && "20px", marginTop: !isMobile && "-20px" }}
    >
      <span>
        Together We Can Do Great Things: Contact Us to Start Collaborating Today
      </span>
      <div
        className={classes.contactMainCardsContainer}
        style={{ flexDirection: isMobile && "column" }}
      >
        <ContactCard
          img="/images/gmail.png"
          text="Gmail"
          fnc={handleMailClick}
        />
        <ContactCard
          img="/images/twitter.png"
          text="Twitter"
          fnc={handletwitterClick}
        />
        <ContactCard
          img="/images/linkedin.png"
          text="LinkedIn"
          fnc={handlelinkedinClick}
        />
      </div>
    </div>
  );
};

export default ContactMain;
