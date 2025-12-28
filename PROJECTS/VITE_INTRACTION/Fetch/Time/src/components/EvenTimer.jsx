import { useEffect, useState } from "react";

function EvenTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Even Timer</h2>
      <p>{count}</p>
      {count % 2 === 0 && <p>Its Even</p>}
    </div>
  );
}

export default EvenTimer;
