export default function TechnicalPresentation({ title, score, topics, onIncrease }) {
  return (
    <div >
      <h2>{title}</h2>
      <p>Score: {score}</p>

      <ul>
        {topics.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

