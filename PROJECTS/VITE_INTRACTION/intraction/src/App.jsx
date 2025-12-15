import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Intraction from "./components/Intraction"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intract" element={<Intraction />} />
      </Routes>
    </>
  )
}

export default App
