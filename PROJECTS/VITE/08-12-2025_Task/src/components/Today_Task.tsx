import React from "react";

const Today_Task = () => {
  const box = true;
  const number =35;
  const value = true;

 
  let signalColor = "red";

  const heroName = "Seenu";
  const companyName = "Infosys";
  const getProject = false;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* 1. Hide and Show Box */}
      {box && (
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "15px",
            width: "120px",
            height: "120px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <p>Hidden Box</p>
        </div>
      )}

      {/* 2. Hide and show text */}
      <h3>{box ? "Visible" : "Not Visible"}</h3>

      {/* 3. Odd or Even */}
      <p>
        {number % 2 === 0
          ? `${number} is an Even Number ✅`
          : `${number} is an Odd Number ❌`}
      </p>

      {/* 4. Truthy and Falsy Button */}
      {value ? (
        <button
          style={{
            padding: "12px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            marginBottom: "20px",
          }}
        >
          Active State
        </button>
      ) : (
        <button
          style={{
            padding: "12px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            marginBottom: "20px",
          }}
        >
          Inactive State
        </button>
      )}

      <br />

      {/* ✅ 5. Traffic Light Logic (ERROR FREE) */}
      {signalColor === "red" ? (
        <button
          style={{
            backgroundColor: "red",
            padding: "20px",
            border: "none",
            color: "white",
          }}
        >
          STOP 🔴
        </button>
      ) : signalColor === "yellow" ? (
        <button
          style={{
            backgroundColor: "yellow",
            padding: "20px",
            border: "none",
          }}
        >
          READY 🟡
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "green",
            padding: "20px",
            border: "none",
            color: "white",
          }}
        >
          GO 🟢
        </button>
      )}

      {/* 6. Nullish Coalescing */}
      <p style={{ marginTop: "20px" }}>
        {value ?? "No value available"}
      </p>

      {/* 7. Story Section */}
      {getProject ? (
        <p>
          <strong style={{ color: "blue" }}>{heroName}</strong> joined{" "}
          <strong style={{ color: "orange" }}>{companyName}</strong> and became a team leader.
        </p>
      ) : (
        <p>
          <strong style={{ color: "blue" }}>{heroName}</strong> started his journey in{" "}
          <strong style={{ color: "orange" }}>{companyName}</strong> and worked hard to grow.
        </p>
      )}
    </div>
  );
};

export default Today_Task;
