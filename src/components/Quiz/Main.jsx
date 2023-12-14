import React, { useState } from "react";
import OptionCard from "./OptionCard";
import useQuizData from "../../helpers/useQuizData";
import Buttons from "./Buttons";
import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "./NavBar";
import { useTheme, useMediaQuery } from "@mui/material";
import classes from "../css/Trivia.module.css";
import { toast } from "react-toastify";

const Main = (props) => {
  const [questionNo, setQuestionNo] = useState(1);
  const [scores, setScores] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [error, setError] = useState(false);
  const {
    quizOptions,
    replacedFlavorText,
    name,
    correctIndex,
    isFetching,
    isFetching0,
  } = useQuizData(questionNo);
  const [ans, setAns] = useState("");
  const [selected, setSelected] = useState(-1);
  const handleAnswerClick = (id, value) => {
    setSelected(id);
    setAns(value);
  };
  const skip = () => {
    setSelected(-1);
    setAns("");
    setIsAnswered(true);
    setError(true);
    setScores((prev) => [...prev, false]);
  };
  const check = () => {
    if (ans.length === 0) {
      toast.error("Please Select An Option");
    } else {
      setIsAnswered(true);
      if (ans === name) {
        setScores((prev) => [...prev, true]);
      } else {
        setError(true);
        setScores((prev) => [...prev, false]);
      }
    }
  };
  const next = () => {
    setQuestionNo((prev) => prev + 1);
    setSelected(-1);
    setAns("");
    setError(false);
    setIsAnswered(false);
  };
  const reset = () => {
    setQuestionNo(1);
    setSelected(-1);
    setAns("");
    setError(false);
    setIsAnswered(false);

    props.toggleGameOver(scores);
    setScores([]);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const center = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  return (
    <div
      className={classes.mainContainer}
      style={{
        minHeight: isMobile && "100vh",
        height: isMobile && "fit-content",
        padding: isMobile && "10px 0px",
      }}
    >
      <NavBar questionNo={questionNo} score={scores} />
      <div
        className={classes.mainSubContainer}
        style={{ gap: isMobile && "30px", marginTop: isMobile && "10px" }}
      >
        {isFetching || isFetching0 ? (
          <div style={{ width: "100%", ...center, justifyContent: "center" }}>
            <CircularProgress
              sx={{ color: "black" }}
              size={80}
              thickness={isMobile ? 3 : 4}
            />
          </div>
        ) : (
          <>
            <span
              className={classes.mainText}
              style={{ fontSize: isMobile && "20px" }}
            >
              {replacedFlavorText}
            </span>
            <div
              style={{
                width: "100%",
                height: "fit-content",
                ...center,
                justifyContent: "space-between",
                flexDirection: isMobile && "column",
                gap: isMobile && "20px",
                padding: !isMobile && "0px 30px",
              }}
            >
              {quizOptions.map((ele, i) => {
                return (
                  <OptionCard
                    key={i}
                    source={ele?.image}
                    name={ele?.name}
                    updateQuestionNo={handleAnswerClick}
                    selected={selected}
                    mainId={ele?.id}
                    id={i}
                    isAnswered={isAnswered}
                    error={error}
                    correctIndex={correctIndex}
                    submitted={isAnswered}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
      <Buttons
        skip={skip}
        check={check}
        isAnswered={isAnswered}
        next={next}
        questionNo={questionNo}
        reset={reset}
      />
    </div>
  );
};

export default Main;
