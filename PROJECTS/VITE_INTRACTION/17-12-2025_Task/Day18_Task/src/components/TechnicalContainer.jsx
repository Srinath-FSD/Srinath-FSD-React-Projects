import { useState } from "react";
import TechnicalPresentation from "./TechnicalPresentation";

export default function TechnicalContainer() {
  const [score, setScore] = useState(1); // primitive
  const [topics] = useState(["HTML", "CSS", "JavaScript", "React"]); // non-primitive

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <TechnicalPresentation
      title="Technical"
      score={score}
      topics={topics}
      onIncrease={increaseScore}
    />
  );
}
