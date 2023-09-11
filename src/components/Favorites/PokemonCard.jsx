import React, { useState } from "react";
import classes from "../css/Favorites.module.css";
import { useDispatch } from "react-redux";
import { padInteger, capitalize } from "../../helpers/helperFunction";
import { counterActions } from "../../store/counter-slice";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PokemonCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(counterActions.setCounter(props.id));
  };
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className={classes.cardContainer} onClick={handleClick}>
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
            src={props?.imgsrc}
            className={classes.pokeImage}
            onError={handleImageError}
          />
        )}

        <span>#{padInteger(props?.id)}</span>
        <span>{capitalize(props?.title)}</span>
      </div>
    </Link>
  );
};

export default PokemonCard;
