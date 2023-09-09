import React from "react";
import classes from "../css/Trivia.module.css";
import { TopBoxes, BottomBoxes } from "../../UI";
import { TriviaAuthOptions, TriviaMain } from "./";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Trivia = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={classes.triviaContainer}>
      <TopBoxes />
      {user ? <TriviaMain /> : <TriviaAuthOptions />}
      <BottomBoxes />
    </div>
  );
};

export default Trivia;
