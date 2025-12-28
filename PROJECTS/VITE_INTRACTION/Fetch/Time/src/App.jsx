import FetchData from "./components/FetchData";
import Timer from "./components/Timer";
import StopStartTimer from "./components/StopStartTimer";
import OddTimer from "./components/OddTimer";
import EvenTimer from "./components/EvenTimer";

function App() {
  return (
    <div>
      <FetchData />
      <Timer />
      <StopStartTimer />
      <OddTimer />
      <EvenTimer />
    </div>
  );
}

export default App;
