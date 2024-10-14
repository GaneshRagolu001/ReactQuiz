import { useRef } from "react";
export default function Answers({ answers,AnswerState,userAnswer,onSelect}) {
  const shuffeledAnswers = useRef();
  if (!shuffeledAnswers.current) {
    shuffeledAnswers.current = [...answers];
    shuffeledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffeledAnswers.current.map((answer) => {
        const IsSelected = userAnswer === answer;
        let cssclass = "";
        if (AnswerState === "answered" && IsSelected) {
          cssclass = "selected";
        }
        if (
          AnswerState === "correct" ||
          (AnswerState === "wrong" && IsSelected)
        ) {
          cssclass = AnswerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={()=>onSelect(answer)}
              className={cssclass}
              disabled={AnswerState != ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
