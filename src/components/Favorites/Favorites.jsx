import React, { useState, useEffect } from "react";
import classes from "../css/Favorites.module.css";
import { TopBoxes, BottomBoxes } from "../../UI";
import { FavoritesAuthOptions, NoFavoritesOptions, PokemonCard } from "./";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onSnapshot, doc } from "firebase/firestore";

const Favorites = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        const recived = doc.data()?.favs;
        setFavoriteList(recived);
      });
    }
  }, [user]);

  const list = favoriteList?.map((ele) => {
    return (
      <PokemonCard
        key={ele.id}
        id={ele.id}
        title={ele.title}
        imgsrc={ele.img}
      />
    );
  });

  return (
    <div className={classes.favoritesContainer}>
      {user ? (
        favoriteList.length > 0 ? (
          <div className={classes.favoritesCardContainer}>{list}</div>
        ) : (
          <>
            <TopBoxes />
            <NoFavoritesOptions />
            <BottomBoxes />
          </>
        )
      ) : (
        <>
          <TopBoxes />
          <FavoritesAuthOptions />
          <BottomBoxes />
        </>
      )}
    </div>
  );
};

export default Favorites;
