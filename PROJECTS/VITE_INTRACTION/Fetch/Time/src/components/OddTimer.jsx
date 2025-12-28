import { useEffect, useState } from "react";

function OddTimer() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Odd Timer</h2>
      <p>{count}</p>
      {count % 2 !== 0 && <p>Its Odd</p>}
    </div>
  );
}

export default OddTimer;
