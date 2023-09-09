import React, { useState, useEffect } from "react";
import classes from "../css/Account.module.css";
import { TriviaScores, TriviaOps } from "./";
import { auth, db } from "../../firebase";
import { onSnapshot, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
const TriviaDetails = () => {
  const [user] = useAuthState(auth);
  const [scoreTable, setScoreTable] = useState([]);
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        const recived = doc.data()?.scores;
        setScoreTable(recived);
      });
    }
  }, [user]);
  return (
    <div className={classes.TriviaDetailsContainer}>
      {!scoreTable ? <TriviaOps /> : <TriviaScores scoreTable={scoreTable} />}
    </div>
  );
};

export default TriviaDetails;
