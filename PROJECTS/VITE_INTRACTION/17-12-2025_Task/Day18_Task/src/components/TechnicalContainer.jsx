import { useState } from "react";
import TechnicalPresentation from "./TechnicalPresentation";

export default function TechnicalContainer() {
  const [score, setScore] = useState(1); 
  const [topics] = useState(["HTML", "CSS", "JavaScript", "React"]); 

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
