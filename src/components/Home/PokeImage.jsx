import React, { useState } from "react";
import classes from "../css/Home.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
import StatsChartBar from "../../UI/StatsChartBar";
import ReactCardFlip from "react-card-flip";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";

const PokeImage = (props) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    toast.info("Image lost in the tall grass! Activate VPN for a quicker catch!");
    setImageError(true);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props?.pokemon?.id}.png`;

  return (
    <div
      className={classes.pokeImageContainer}
      style={{ width: isMobile ? "100%" : "50%", height: isMobile && "320px" }}
    >
      <ReactCardFlip isFlipped={props.ShowStats} flipDirection="vertical">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {imageError ? (
            <>
              <LazyLoadImage
                effect="blur"
                src="/images/giphy.gif"
                alt="Error: Image Not Available"
                width={isMobile ? "85px" : "80%"}
                height={isMobile ? "85px" : "80%"}
                style={{ borderRadius: "30px" }}
              />
            </>
          ) : (
            <LazyLoadImage
              effect="blur"
              alt="pokemon"
              src={source}
              className={classes.image}
              style={{ height: isMobile && "300px", width: isMobile && "auto" }}
              onError={handleImageError}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            gap: isMobile ? "30px" : "50px",
          }}
        >
          <StatsChartBar
            value={props?.pokemon?.stats[1]?.base_stat}
            label={"attack"}
          />
          <StatsChartBar
            value={props?.pokemon?.stats[0]?.base_stat}
            label={"hp"}
          />
          <StatsChartBar
            value={props?.pokemon?.stats[2]?.base_stat}
            label={"Defence"}
          />
          <StatsChartBar
            value={props?.pokemon?.stats[3]?.base_stat}
            label={"Special Attack"}
          />
          <StatsChartBar
            value={props?.pokemon?.stats[4]?.base_stat}
            label={"Special Defence"}
          />
          <StatsChartBar
            value={props?.pokemon?.stats[5]?.base_stat}
            label={"Speed"}
          />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default PokeImage;
