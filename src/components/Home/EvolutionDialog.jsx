import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useGetEvolutionChainByUrlQuery } from "../../store/useApi";
import ArrowForward from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import Loader from "../../UI/Loader";
import { toast } from "react-toastify";
import { searchSliceActions } from "../../store/search-slice";
import RenderPokemonData from "./RenderPokemonData";

const EvolutionDialog = ({ isOpen, handleClose, link }) => {
  const { data, isFetching, error } = useGetEvolutionChainByUrlQuery(link);
  if (error) {
    toast.error(error?.message);
  }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(searchSliceActions.setSearch(id));
  };
  const icons = !isMobile ? (
    <ArrowForward
      sx={{
        fontSize: 24,
        fontWeight: "bold",
        color: "#080808",
        backgroundColor: "#CCCCCC",
        borderRadius: "5px",
      }}
    />
  ) : (
    <ExpandMoreIcon
      sx={{
        fontSize: 24,
        fontWeight: "bold",
        color: "#080808",
        backgroundColor: "#CCCCCC",
        borderRadius: "5px",
      }}
    />
  );
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={"lg"}>
      <DialogTitle
        sx={{ fontWeight: "bold", fontFamily: "poppins", textAlign: "center" }}
      >
        Evolution Chart
      </DialogTitle>
      <DialogContent sx={{ overflowY: "scroll" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            flexDirection: isMobile && "column",
            gap: "10px",
          }}
        >
          {!isFetching ? (
            <>
              {
                <RenderPokemonData
                  handleClick={handleClick}
                  pokemonData={data}
                />
              }

              {data?.evolves_to.map((pokemonData) => (
                <>
                  {icons}
                  {
                    <RenderPokemonData
                      handleClick={handleClick}
                      pokemonData={pokemonData}
                    />
                  }
                </>
              ))}
              {data?.evolves_to[0]?.evolves_to.map((pokemonData) => (
                <>
                  {icons}
                  {
                    <RenderPokemonData
                      handleClick={handleClick}
                      pokemonData={pokemonData}
                    />
                  }
                </>
              ))}
            </>
          ) : (
            <Loader color={"black"} size={10} thickness={5} />
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EvolutionDialog;
