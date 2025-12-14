const ReviewCard = ({ name, title, desc, rating }) => {
  return (
    <div className="review-card">
      <h4>{title}</h4>
      <p className="user">By {name}</p>
      <p>{desc}</p>
      <p className="rating">⭐ {rating}/5</p>
    </div>
  );
};

export default ReviewCard;
