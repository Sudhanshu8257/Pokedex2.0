import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
    getPokemonsDescription: builder.query({
      query: (id) => `pokemon-species/${id}`,
    }),
    getPokemonByNameSearch: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonsByType: builder.query({
      query: (type) => `type/${type}`,
      transformResponse: (response) => {
        const data = response.pokemon.map((p) => {
          const id = p.pokemon.url.split("/")[6];
          const name = p.pokemon.name;
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          const url = p.pokemon.url;

          return {
            id,
            name,
            image,
            url,
          };
        });
        return data;
      },
    }),
  }),
});

export const {
  useGetPokemonsDescriptionQuery,
  useGetPokemonsQuery,
  useGetPokemonByNameSearchQuery,
  useGetPokemonsByTypeQuery,
} = pokemonApi;
