import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateState = () => {
  const navigate = useNavigate();

  const [name] = useState("Srinath");
  const [age] = useState(22);
  const [isStudent] = useState(true);

  const [user] = useState({
    city: "Chennai",
    role: "Frontend Developer",
  });

  const [skills] = useState(["HTML", "CSS", "React"]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          Creation Phase
        </h2>

        <h3 className="font-semibold">Primitive State</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>

        <h3 className="font-semibold mt-3">Non-Primitive State</h3>
        <p>City: {user.city}</p>
        <p>Role: {user.role}</p>

        <p className="mt-2 font-medium">Skills:</p>
        <ul className="list-disc ml-5">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/update")}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Go to Update Phase
        </button>
      </div>
    </div>
  );
};

export default CreateState;
