import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <h2>Add Review</h2>

        <input type="text" placeholder="Review Title" />
        <textarea placeholder="Review Description"></textarea>

        <select>
          <option>Rating</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <button onClick={() => navigate("/feed")}>Post Review</button>
      </div>
    </>
  );
};

export default AddReview;
