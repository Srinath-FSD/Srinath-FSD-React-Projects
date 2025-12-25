import { useState } from "react";

function GreetingSwitcher() {
  const [message, setMessage] = useState("Welcome");

  return (
    <div>
      <h3>{message}</h3>

      <button onClick={() => setMessage("Welcome")}>Welcome</button>
      <button onClick={() => setMessage("Good Morning")}>Good Morning</button>
      <button onClick={() => setMessage("Good Night")}>Good Night</button>
    </div>
  );
}

export default GreetingSwitcher;
