import React, { useState } from "react";
import classes from "../css/Search.module.css";
import { padInteger, capitalize } from "../../helpers/helperFunction";
import { counterActions } from "../../store/counter-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SearchCardSecondary = (props) => {
  let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props?.data?.id}.png`;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(counterActions.setCounter(props?.data?.id));
  };
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Link to={"/"} style={{ textDecoration: "none" }}>
      <div className={classes.SearchCardSecondary} onClick={handleClick}>
        {imageError ? (
          <LazyLoadImage
            effect="blur"
            src="/images/giphy.gif"
            alt="Error: Image Not Available"
            className={classes.pokeImage}
            style={{ borderRadius: "15px" }}
          />
        ) : (
          <LazyLoadImage
            effect="blur"
            alt="pokemon"
            src={source}
            className={classes.pokeImage}
            onError={handleImageError}
          />
        )}

        <span>#{padInteger(props?.data?.id)}</span>
        <span>{capitalize(props?.data?.name)}</span>
      </div>
    </Link>
  );
};

export default SearchCardSecondary;
