import React from "react";
import classes from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { Button, Avatar } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthLinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user] = useAuthState(auth);

  return (
    <div className={classes.authLinks}>
      {user ? (
        <Link to={"/account"} style={{ textDecoration: "none" }}>
          <Avatar
            src={user?.photoURL ? user?.photoURL : "/images/A.png"}
            sx={{
              width: isMobile ? 34 : 40,
              height: isMobile ? 34 : 40,
              bgcolor: "#130F0A",
            }}
          />
        </Link>
      ) : (
        <>
          <Link to={"/auth/signin"} style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              sx={{
                color: "#EE4037",
                "&:hover": { color: "#B33118", backgroundColor: "transparent" },
                borderRadius: "15px",
                height: "40px",
                textTransform: "none",
                fontFamily: "poppins",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link to={"/auth/signup"} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EE4037",
                "&:hover": { backgroundColor: "#B33118" },
                borderRadius: "15px",
                width: "120px",
                height: "40px",
                textTransform: "none",
                fontFamily: "poppins",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
