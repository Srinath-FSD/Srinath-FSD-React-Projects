import React from "react";
import Today_Task from "./components/Today_Task";

function App() {
  return (
    <div style={{ minwidth: "100vh", backgroundColor: "black",alignContent:"center" }}>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        Day 11 – Conditional Rendering Task
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Today_Task />
      </div>
    </div>
  );
}

export default App;
