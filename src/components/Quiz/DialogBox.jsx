import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
const DialogBox = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Quiz Rules</DialogTitle>
      <DialogContent>
        <ol style={{ fontFamily: "poppins", fontWeight: "400" }}>
          <li>
            You will be presented with a total of 5 questions. Each question is
            worth 20 points.
          </li>
          <li>
            You must select an answer to each question before you can move on to
            the next question.
          </li>
          <li>
            After selecting an answer, you must click the "Check Answer" button
            to submit your answer.
          </li>
          <li>
            Once you have answered a question, you cannot go back and change
            your answer.
          </li>
          <li>
            For each correct answer, you will receive 20 points. There is no
            penalty for incorrect answers.
          </li>
          <li>
            At the end of the quiz, your total score will be added to your
            account profile.
          </li>
        </ol>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
