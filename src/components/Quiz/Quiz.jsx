import React, { useState } from "react";
import EndScreen from "./EndScreen";
import Main from "./Main";
import StartScreen from "./StartScreen";
const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [finalScores, setFinalScores] = useState();

  const toggle = () => {
    setGameOver(false);
    setStarted(true);
  };
  const toggleGameOver = (value) => {
    setFinalScores(value);
    setGameOver(true);
  };
  const onEnd = () => {
    setStarted(false);
    setGameOver(false);
    setFinalScores();
  };

  return !gameOver ? (
    started ? (
      <Main toggleGameOver={toggleGameOver} />
    ) : (
      <StartScreen onStart={toggle} />
    )
  ) : (
    <EndScreen onStart={toggle} finalScores={finalScores} onEnd={onEnd} />
  );
};

export default Quiz;
