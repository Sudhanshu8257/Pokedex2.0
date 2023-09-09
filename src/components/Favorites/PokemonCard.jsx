import React from "react";
import classes from "../css/Favorites.module.css";
import { useDispatch } from "react-redux";
import { padInteger, capitalize } from "../../helpers/helperFunction";
import { counterActions } from "../../store/counter-slice";
import { Link } from "react-router-dom";
const PokemonCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(counterActions.setCounter(props.id));
  };
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className={classes.cardContainer} onClick={handleClick}>
        <img
          alt="pokemon"
          src={props?.imgsrc}
          className={classes.pokeImage}
        ></img>
        <span>#{padInteger(props?.id)}</span>
        <span>{capitalize(props?.title)}</span>
      </div>
    </Link>
  );
};

export default PokemonCard;
