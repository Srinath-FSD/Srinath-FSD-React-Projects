import { useState } from "react";
import AptitudePresentation from "./AptitudePresentation";

export default function AptitudeContainer() {
  const [score, setScore] = useState(1);
  const [topics] = useState(["Logical", "Quantitative", "Reasoning"]);

  const increaseScore = () => setScore(score + 1);

  return (
    <AptitudePresentation
      title="Aptitude"
      score={score}
      topics={topics}
      onIncrease={increaseScore}
    />
  );
}
