import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import searchSlice from "./search-slice";
import { pokemonApi } from "./useApi";
const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterSlice.reducer,
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
  serializableCheck: false,
});

export default store;
