import React, { useState } from "react";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import { buttonStyles } from "../css/Styles";
import { toast } from "react-toastify";
import { Loader } from "../../UI";

const GoogleButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signInWithRedirect(auth, new GoogleAuthProvider());
    } catch (error) {
      toast.error("Error signing in with Google:", error);
    }

    setIsLoading(false);
  };

  return (
    <Button
      variant="outlined"
      fullWidth
      type="button"
      disabled={isLoading}
      startIcon={
        <img
          alt="google"
          src="/images/gicon.png"
          width={30}
          height={30}
          style={{ marginRight: "8px" }}
        />
      }
      sx={{ fontSize: isMobile ? "20px" : "22px", ...buttonStyles }}
      onClick={signInWithGoogle}
    >
      {isLoading ? (
        <Loader color={"#080808"} size={20} thickness={5} />
      ) : (
        "Continue With Google"
      )}
    </Button>
  );
};

export default GoogleButton;
