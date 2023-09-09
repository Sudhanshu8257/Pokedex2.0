import React, { useState, useEffect } from "react";
import classes from "../css/Home.module.css";
import { useTheme, useMediaQuery, IconButton } from "@mui/material";
import {
  getDescription,
  padInteger,
  capitalize,
  types,
} from "../../helpers/helperFunction";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { onSnapshot, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { searchSliceActions } from "../../store/search-slice";
import { useNavigate } from "react-router-dom";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import FavoriteBorder from "@mui/icons-material/FavoriteBorderRounded";
import Favorite from "@mui/icons-material/FavoriteRounded";

const PokeInfo = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const text = getDescription(props?.pokemon_description);
  const id = padInteger(props?.pokemon?.id);
  const [user] = useAuthState(auth);
  const counter = useSelector((state) => state.counter);
  const [InFavorites, setInFavorites] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favID = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      const recived = doc.data()?.favs;
      setFavoriteList(recived);
      setInFavorites(!!recived?.find((ele) => ele.id === counter.counter));
    });
  }, [counter, user]);

  const removeFromFav = async () => {
    try {
      const result = favoriteList.filter(
        (item) => item.id !== props?.pokemon?.id
      );
      await updateDoc(favID, {
        favs: result,
      });
    } catch (error) {
      toast.error(error);
    }
  };

  const addToFav = async () => {
    if (user) {
      await updateDoc(favID, {
        favs: arrayUnion({
          id: props?.pokemon?.id,
          title: props?.pokemon?.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props?.pokemon?.id}.png`,
        }),
      });
    } else {
      toast.info("Please Login To Add Favorites");
    }
  };

  const setTypes = (val) => {
    dispatch(searchSliceActions.setType(val));
    navigate("/search");
  };

  return (
    <div
      className={classes.PokeInfoContainer}
      style={{
        width: isMobile ? "100%" : "50%",
        padding: isMobile && "10px 20px",
        gap: isMobile && "10px",
        height: isMobile && "400px",
      }}
    >
      <div className={classes.PokeInfoFavs}>
        <div
          className={classes.PokeInfoId}
          style={{ fontSize: isMobile && "32px" }}
        >
          #{id}
        </div>
        <IconButton
          className={classes.FavoriteIconContainer}
          onClick={InFavorites ? removeFromFav : addToFav}
        >
          {InFavorites ? (
            <Favorite
              sx={{
                fontSize: isMobile ? "40px" : "48px",
                marginLeft: "auto",
                color: "#EE4037",
              }}
            />
          ) : (
            <FavoriteBorder
              sx={{
                fontSize: isMobile ? "40px" : "48px",
                marginLeft: "auto",
                color: "black",
              }}
            />
          )}
        </IconButton>
      </div>
      <div
        className={classes.PokeInfoName}
        style={{ fontSize: isMobile && "32px" }}
      >
        {capitalize(props?.pokemon?.name)}
      </div>
      <div
        className={classes.PokeInfoFlavour}
        style={{
          fontSize:
            text?.length > 150
              ? isMobile
                ? "14px"
                : "22px"
              : isMobile
              ? "20px"
              : "28px",
        }}
      >
        {capitalize(text)}
      </div>
      <div
        className={classes.PokeTypesContainer}
        style={{
          justifyContent: props?.pokemon?.types[1] ? "space-between" : "center",
        }}
      >
        <div
          className={classes.PokeType}
          onClick={() => setTypes(props.pokemon?.types[0]?.type?.name)}
          style={{
            fontSize: isMobile && "18px",
            backgroundColor: types(props.pokemon?.types[0]?.type?.name),
          }}
        >
          {capitalize(props.pokemon?.types[0]?.type?.name)}
        </div>
        {props?.pokemon?.types[1] && (
          <div
            className={classes.PokeType}
            onClick={() => setTypes(props.pokemon?.types[1]?.type?.name)}
            style={{
              fontSize: isMobile && "18px",
              backgroundColor: types(props.pokemon?.types[1]?.type?.name),
            }}
          >
            {capitalize(props.pokemon?.types[1]?.type?.name)}
          </div>
        )}
      </div>
      <div
        className={classes.PokeStats}
        style={{ fontSize: isMobile && "18px" }}
        onClick={props.StatsChange()}
      >
        {!props?.ShowStats ? (
          <>
            Show Stats
            <VisibilityRoundedIcon
              sx={{ color: "#F5F5F5", fontSize: "28px" }}
            />
          </>
        ) : (
          <>
            Hide Stats{" "}
            <VisibilityOffRoundedIcon
              sx={{ color: "#F5F5F5", fontSize: "28px" }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PokeInfo;
