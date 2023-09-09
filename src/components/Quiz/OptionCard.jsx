import {
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { capitalize } from "../../helpers/helperFunction";

const OptionCard = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const font = {
    fontFamily: "poppins",
    fontSize: isMobile ? "20px" : "26px",
    fontWeight: "700",
  };
  const index = props.id;
  let color = "#6D6D6D";
  if (props.submitted) {
    color = props.error === false ? "#94D7A2" : "#FF5C5C";
  }
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card
      sx={{
        width: isMobile ? "100%" : "230px",
        height: isMobile ? "90px" : "280px",
        border: "none",
        backgroundColor:
          props.selected === index
            ? color
            : props.submitted && props.correctIndex === index
            ? "#94D7A2"
            : "black",
        borderRadius: "25px",
        color: "white",
        ...center,
        flexDirection: !isMobile && "column",
        "&:hover": {
          backgroundColor: "#6D6D6D",
          transform: !isMobile && "translate(0px, -5px)",
        },
        cursor: "pointer",
        justifyContent: isMobile && "space-between",
      }}
      raised
      aria-disabled={props.submitted}
      onClick={() =>
        !props.submitted && props.updateQuestionNo(index, props.name)
      }
    >
      <CardContent
        sx={{
          ...center,
          flexDirection: !isMobile && "column",
          justifyContent: isMobile ? "space-evenly" : "center",
          gap: isMobile ? "0px" : "10px",
          width: "100%",
          height: "100%",
        }}
      >
        {imageError ? (
          <img
            src="/images/giphy.gif"
            alt="err"
            width={isMobile ? "85px" : "180px"}
            height={isMobile ? "85px" : "180px"}
            style={{ borderRadius: "15px" }}
          />
        ) : (
          <img
            alt="pokemon"
            src={props.source}
            width={isMobile ? "85px" : "100%"}
            height={isMobile ? "85px" : ""}
            onError={handleImageError}
          />
        )}
        <Typography sx={{ ...font }}>{capitalize(props.name)}</Typography>
      </CardContent>
    </Card>
  );
};

export default OptionCard;
