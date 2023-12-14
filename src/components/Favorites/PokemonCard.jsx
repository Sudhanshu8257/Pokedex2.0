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
  function padNumber(number) {
    const paddedNumber = String(number).padStart(3, "0");
    return paddedNumber;
  }
  let newId = padNumber(props?.id);
  let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newId}.png`;
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
            src={source}
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
