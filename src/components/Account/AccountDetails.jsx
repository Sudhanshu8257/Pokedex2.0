import React from "react";
import classes from "../css/Account.module.css";
import LogoutIcon from "@mui/icons-material/LogoutRounded";
import { useTheme, useMediaQuery, Button, Avatar } from "@mui/material";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
const AccountDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <div
      className={classes.AccountDetailsContainer}
      style={{
        flexDirection: isMobile && "column",
        gap: isMobile && "30px",
        justifyContent: isMobile && "center",
      }}
    >
      <div
        className={classes.AccountDetailsSubContainer}
        style={{ marginLeft: isMobile && "-5px" }}
      >
        <Avatar
          src={user?.photoURL ? user?.photoURL : "/images/A.png"}
          sx={{
            width: isMobile ? 42 : 82,
            height: isMobile ? 42 : 82,
            bgcolor: "#130F0A",
          }}
        />
        <div
          className={classes.AccountDetails}
          style={{
            fontSize: isMobile && "18px",
            marginLeft: isMobile && "10px",
          }}
        >
          <span>{user?.displayName} </span>
          <span>{user?.email}</span>
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#EE4037",
          "&:hover": { backgroundColor: "#B33118" },
          borderRadius: "15px",
          width: isMobile ? "200px" : "240px",
          height: isMobile ? "50px" : "70px",
          textTransform: "none",
          fontFamily: "poppins",
          fontWeight: "bold",
          fontSize: isMobile ? "20px" : "24px",
          ml: !isMobile && "auto",
        }}
        onClick={async () => {
          const success = await signOut();
          if (success) toast.success("You have been signed out successfully!");
        }}
      >
        Sign Out{" "}
        <LogoutIcon sx={{ fontSize: isMobile ? "30px" : "34px", ml: "auto" }} />
      </Button>
    </div>
  );
};

export default AccountDetails;
