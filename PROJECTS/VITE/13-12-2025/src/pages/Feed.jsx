import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";

const Feed = () => {
  const reviews = [
    {
      id: 1,
      name: "Arun",
      title: "Great Product",
      desc: "Very useful and easy to use.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya",
      title: "Good Experience",
      desc: "Nice UI and smooth flow.",
      rating: 4,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="feed">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </>
  );
};

export default Feed;
