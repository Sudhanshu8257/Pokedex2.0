import React from "react";
import classes from "../components/css/ErrorPage.module.css";
import { Link } from "react-router-dom";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBackRounded";

const PageNotFound = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.PageNotFoundContainer}
        style={{
          fontSize: isMobile && "34px",
          borderRadius: isMobile && "25px",
        }}
      >
        <span>404</span>
        <span>Page not found</span>
        <span
          className={classes.subHeading}
          style={{ fontSize: isMobile && "24px" }}
        >
          Sorry, we couldn't find the page you're looking for.
        </span>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#EE4037",
              "&:hover": { backgroundColor: "#B33118" },
              borderRadius: "25px",
              height: "60px",
              textTransform: "none",
              fontFamily: "inter",
              fontWeight: "900",
              fontSize: isMobile ? "24px" : "26px",
            }}
          >
            <ArrowBack sx={{ fontSize: "34px", mr: "10px" }} />
            Go back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
