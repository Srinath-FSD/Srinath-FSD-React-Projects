import { useState } from "react";

function NumberList() {
  const [numbers, setNumbers] = useState([]);

  const addRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, random]);
  };

  const reset = () => {
    setNumbers([]);
  };

  return (
    <div>
      <button onClick={addRandom}>Add Random</button>
      <button onClick={reset}>Reset</button>

      <p>{numbers.join(", ")}</p>
    </div>
  );
}

export default NumberList;
