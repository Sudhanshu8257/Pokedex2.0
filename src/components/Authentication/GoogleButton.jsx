import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
import { Button } from "@mui/material";

const GoogleButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signInWithRedirect(auth,new GoogleAuthProvider());
    } catch (error) {
      // Handle any errors here
      console.error('Error signing in with Google:', error);
    }

    setIsLoading(false);
  };

  return (
    <Button
      variant="outlined"
      fullWidth
      type="button"
      startIcon={
        <img
          alt="google"
          src="/images/gicon.png"
          width={30}
          height={30}
          style={{ marginRight: "8px" }}
        />
      }
      disabled={isLoading}
      sx={{ fontSize: "20px" }}
      onClick={signInWithGoogle}
    >
      Continue With Google
    </Button>
  );
};

export default GoogleButton;



/* ------ working version 
import React from "react";
import { buttonStyles } from "../css/Styles";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { Loader } from "../../UI";
const GoogleButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      // Handle any errors here
      console.error("Error signing in with Google:", error);
    }
  };
  //const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  return (
    <Button
      variant="outlined"
      fullWidth
      type="button"
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
      onClick={() => signInWithGoogle()}
    >
      Continue With Google
    </Button>
  );
};

export default GoogleButton;
/*
{loading ? (
  <Loader color={"#080808"} size={20} thickness={5} />
) : (
  "Continue With Google"
)}
*/
