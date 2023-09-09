import React, { useEffect } from "react";
import { AccountDetails, TriviaDetails } from "./";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user && !user.emailVerified) navigate("/auth/verification");
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <>
      <AccountDetails />
      <TriviaDetails />
    </>
  );
};

export default Account;
