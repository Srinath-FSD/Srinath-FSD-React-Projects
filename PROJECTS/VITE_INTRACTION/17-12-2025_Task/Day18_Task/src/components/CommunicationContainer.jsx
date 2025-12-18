import { useState } from "react";
import CommunicationPresentation from "./CommunicationPresentation";

export default function CommunicationContainer() {
  const [score, setScore] = useState(1);
  const [topics] = useState(["Speaking", "Listening", "Body Language"]);

  const increaseScore = () => setScore(score + 1);

  return (
    <CommunicationPresentation
      title="Communication"
      score={score}
      topics={topics}
      onIncrease={increaseScore}
    />
  );
}
