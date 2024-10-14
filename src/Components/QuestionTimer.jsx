import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeout,mode }) {
  const [remainingTime, setremainingTime] = useState(timeout);
  useEffect(() => {
    const Timer = setTimeout(onTimeout, timeout);

    return () => {
      clearInterval(Timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setremainingTime((prevsTime) => prevsTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} className={mode}/>;
}
