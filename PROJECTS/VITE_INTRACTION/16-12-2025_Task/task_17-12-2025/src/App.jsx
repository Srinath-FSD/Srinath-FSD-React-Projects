import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateState from "./pages/CreateState";
import UpdateState from "./pages/UpdateState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateState />} />
        <Route path="/update" element={<UpdateState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
