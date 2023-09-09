import React from "react";
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

  return (
    <div
      className={classes.SearchTypesCardContainer}
      style={{ backgroundColor: types(type) }}
      onClick={handleClick}
    >
      <img
        alt="pokemon"
        src={props?.imgsrc}
        className={classes.pokeeeImage}
      ></img>
      <span>#{padInteger(props?.id)}</span>
      <span>{capitalize(props?.title)}</span>
    </div>
  );
};

export default SearchTypesCard;
