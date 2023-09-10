import React from "react";

import { Link } from "react-router-dom";

import {
  extractIdFromUrl,
  padInteger,
  capitalize,
} from "../../helpers/helperFunction";
const RenderPokemonData = ({ pokemonData, handleClick }) => {
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
        key={extractIdFromUrl(pokemonData?.species?.url)}
        onClick={() => handleClick(pokemonData?.species?.name)}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractIdFromUrl(
            pokemonData?.species?.url
          )}.png`}
          width={"150px"}
          alt="pokemon"
          height={"150px"}
        />
        <h4>#{padInteger(extractIdFromUrl(pokemonData?.species?.url))}</h4>
        <h3>{capitalize(pokemonData?.species?.name)}</h3>
      </div>
    </Link>
  );
};

export default RenderPokemonData;
