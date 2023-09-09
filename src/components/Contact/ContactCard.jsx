import React from "react";
import classes from "../css/Contact.module.css";
const ContactCard = (props) => {
  return (
    <div className={classes.contactCardContainer} onClick={props?.fnc}>
      <img
        alt={props.text}
        src={props.img}
        className={classes.contactImage}
      ></img>
      <span className={classes.contactText}>{props.text}</span>
    </div>
  );
};

export default ContactCard;
