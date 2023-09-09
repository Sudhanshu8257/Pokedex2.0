import React from "react";
import SearchTypesCard from "./SearchTypesCard";
import {
  useTheme,
  useMediaQuery,
  CircularProgress,
  Box,
  Grid,
} from "@mui/material";
const TypesResult = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const pokemonList = props?.data?.filter((pokemon) => pokemon?.id <= 1010);

  return (
    <Box
      sx={{
        ...center,
        mt: "60px",
        maxHeight: "85%",
        height: "85%",
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        overflowY: "scroll",
        borderRadius: "15px",
        fontFamily: "inter",
        color: "red",
      }}
    >
      {props?.isFetching ? (
        <CircularProgress
          sx={{ color: "#080808", alignSelf: "center" }}
          size={50}
          thickness={5}
        />
      ) : props?.error ? (
        <h1>Invalid Input..</h1>
      ) : (
        <Grid
          container
          justifyContent="center"
          m={!isMobile ? 3 : 0}
          spacing={!isMobile ? 3 : 0}
          alignItems="center"
          sx={{
            width: "100%",
            gap: isMobile && "20px",
            border: "1 solid none",
            height: "100%",
          }}
        >
          {pokemonList?.map((pokemon) => (
            <Grid item align="center" xs={12} sm={8} md={4} key={pokemon.id}>
              <SearchTypesCard
                id={pokemon.id}
                title={pokemon.name}
                imgsrc={pokemon.image}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TypesResult;
