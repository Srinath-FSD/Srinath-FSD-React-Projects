import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  return (
    <div>
      <h1>Form with Alert</h1>
      <Form form={form} setForm={setForm} />
    </div>
  );
};

export default App;
