import React, { useState } from "react";

const FormHandling = () => {
  const [user, setUser] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const number = Number(user);

    if (number % 2 === 0) {
      setResult(`Even Number : ${number}`);
    } else {
      setResult(`Odd Number : ${number}`);
    }
  };

  return (
    <>
      <form>
        <input
          type="number"
          placeholder="Enter the Number"
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            width: "600px",
          }}
        />

        <button onClick={handleSubmit}>On Click</button>

        <h1>{result}</h1>
      </form>
    </>
  );
};

export default FormHandling;
