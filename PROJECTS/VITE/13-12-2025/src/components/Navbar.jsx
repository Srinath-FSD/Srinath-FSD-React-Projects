import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h3>ReviewSocial</h3>

      <div>
        <button onClick={() => navigate("/add-review")}>Add Review</button>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
