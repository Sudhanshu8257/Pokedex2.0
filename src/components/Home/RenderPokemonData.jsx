import React from "react";

import { Link } from "react-router-dom";

import {
  extractIdFromUrl,
  padInteger,
  capitalize,
} from "../../helpers/helperFunction";
import { LazyLoadImage } from "react-lazy-load-image-component";
const RenderPokemonData = ({ pokemonData, handleClick }) => {
  let id = extractIdFromUrl(pokemonData?.species?.url);
  function padString(str) {
    const paddedString = str.padStart(3, "0");
    return paddedString;
  }
  let newId = padString(id);
  let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newId}.png`;
  return (
    <Link to={"/search"} style={{ textDecoration: "none" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "poppins",
          backgroundColor: "#CCCCCC",
          borderRadius: "10px",
          fontWeight: "bold",
          color: "black",
        }}
        key={id}
        onClick={() => handleClick(pokemonData?.species?.name)}
      >
        <LazyLoadImage
          effect="blur"
          src={source}
          width={"150px"}
          alt="pokemon"
          height={"150px"}
        />
        <h4>#{padInteger(id)}</h4>
        <h3>{capitalize(pokemonData?.species?.name)}</h3>
      </div>
    </Link>
  );
};

export default RenderPokemonData;
