import { useEffect, useState } from "react";

function StopStartTimer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 50) return;

    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h2>Stop at 50, Start from 10</h2>
      <p>{count}</p>
    </div>
  );
}

export default StopStartTimer;
