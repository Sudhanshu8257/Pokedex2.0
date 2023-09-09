import React, { useState } from "react";
import classes from "../css/Search.module.css";
import { padInteger, capitalize, types } from "../../helpers/helperFunction";
import { useSelector, useDispatch } from "react-redux";
import { searchSliceActions } from "../../store/search-slice";

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
  return (
    <div
      className={classes.SearchTypesCardContainer}
      style={{ backgroundColor: types(type) }}
      onClick={handleClick}
    >
      {imageError ? (
        <img
          src="/images/giphy.gif"
          alt="Error: Image Not Available"
          className={classes.pokeeeImage}
          style={{ borderRadius: "10px" }}
        />
      ) : (
        <img
          alt="pokemon"
          src={props?.imgsrc}
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
