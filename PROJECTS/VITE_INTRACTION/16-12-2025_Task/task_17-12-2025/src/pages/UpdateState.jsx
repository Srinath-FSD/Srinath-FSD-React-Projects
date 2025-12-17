import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateState = () => {
  const navigate = useNavigate();


  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Offline");


  const [user, setUser] = useState({
    name: "Srinath",
    city: "Chennai",
  });

  const [skills, setSkills] = useState(["HTML", "CSS"]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          Update Phase
        </h2>

        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="btn"
        >
          Increase Count
        </button>

        <p className="mt-2">Status: {status}</p>
        <button
          onClick={() => setStatus("Online")}
          className="btn"
        >
          Go Online
        </button>

        <p className="mt-3">City: {user.city}</p>
        <button
          onClick={() => setUser({ ...user, city: "Bangalore" })}
          className="btn"
        >
          Change City
        </button>

        <p className="mt-3 font-medium">Skills:</p>
        <ul className="list-disc ml-5">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <button
          onClick={() => setSkills([...skills, "React"])}
          className="btn"
        >
          Add Skill
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg"
        >
          Back to Creation Phase
        </button>
      </div>
    </div>
  );
};

export default UpdateState;
