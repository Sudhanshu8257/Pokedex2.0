import React from "react";
import classes from "../css/Search.module.css";
import { padInteger, capitalize } from "../../helpers/helperFunction";
import { counterActions } from "../../store/counter-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const SearchCardPrimary = (props) => {
  let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props?.data?.id}.png`;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(counterActions.setCounter(props?.data?.id));
  };
  return (
    <Link to={"/"} style={{ textDecoration: "none" }}>
      <div className={classes.SearchCardPrimary} onClick={handleClick}>
        <img alt="pokemon" src={source} className={classes.pokeImage}></img>
        <span>#{padInteger(props?.data?.id)}</span>
        <span>{capitalize(props?.data?.name)}</span>
      </div>
    </Link>
  );
};

export default SearchCardPrimary;
