export default function AptitudePresentation({ title, score, topics, onIncrease }) {
  return (
    <div style={cardStyle}>
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

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "8px",
  maxWidth: "300px",
};
