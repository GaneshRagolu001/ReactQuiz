import { useCallback, useState, useRef } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQueIndex = userAnswer.length;
  const IsQuizCompleted = activeQueIndex === QUESTIONS.length;
  const HandleUserAnswer = useCallback(function HandleUserAnswer(
    selectedAnswer
  ) {
    setUserAnswer((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  },
  []);

  const HandleSkipAnswer = useCallback(() => {
    HandleUserAnswer(null);
  }, [HandleUserAnswer]);
  if (IsQuizCompleted) {
    return <Summary userAnswer={userAnswer} />
  }

  return (
    <div id="quiz">
      <Question
        key={activeQueIndex}
        index={activeQueIndex}
        onSelectAnswers={HandleUserAnswer}
        onSkipAnswer={HandleSkipAnswer}
      />
    </div>
  );
}
