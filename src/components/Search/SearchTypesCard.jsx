import React, { useState } from "react";
import classes from "../css/Search.module.css";
import { padInteger, capitalize, types } from "../../helpers/helperFunction";
import { useSelector, useDispatch } from "react-redux";
import { searchSliceActions } from "../../store/search-slice";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SearchTypesCard = (props) => {
  const type = useSelector((state) => state.search.type);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(searchSliceActions.setSearch(props?.id));
  };
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  function padString(str) {
    const paddedString = str.padStart(3, "0");
    return paddedString;
  }
  let newId = padString(props?.id);
  let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newId}.png`;
  return (
    <div
      className={classes.SearchTypesCardContainer}
      style={{ backgroundColor: types(type) }}
      onClick={handleClick}
    >
      {imageError ? (
        <LazyLoadImage
          effect="blur"
          src="/images/giphy.gif"
          alt="Error: Image Not Available"
          className={classes.pokeeeImage}
          style={{ borderRadius: "10px" }}
        />
      ) : (
        <LazyLoadImage
          effect="blur"
          alt="pokemon"
          src={source}
          className={classes.pokeeeImage}
          onError={handleImageError}
        />
      )}

      <span>#{padInteger(props?.id)}</span>
      <span>{capitalize(props?.title)}</span>
    </div>
  );
};

export default SearchTypesCard;
