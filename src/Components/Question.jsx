import { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";
export default function Question({ index, onSelectAnswers, onSkipAnswer }) {
  const [AnswerVal, setAnswerVal] = useState({
    userAnswer: "",
    isCorrect: null,
  });
  let timer = 15000;
  if (AnswerVal.userAnswer) {
    timer = 1000;
  } else if (AnswerVal.isCorrect !== null) {
    timer = 2000;
  }
  function HandleAnswerVal(answer) {
    setAnswerVal({
      userAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswerVal({
        userAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswers(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (AnswerVal.userAnswer && AnswerVal.isCorrect !== null) {
    answerState = AnswerVal.isCorrect ? "correct" : "wrong";
  } else if (AnswerVal.userAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={AnswerVal.userAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        AnswerState={answerState}
        userAnswer={AnswerVal.userAnswer}
        onSelect={HandleAnswerVal}
      />
    </div>
  );
}
