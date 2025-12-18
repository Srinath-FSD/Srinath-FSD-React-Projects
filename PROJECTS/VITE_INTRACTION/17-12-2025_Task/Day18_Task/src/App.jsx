import TechnicalContainer from "./components/TechnicalContainer";
import CommunicationContainer from "./components/CommunicationContainer";
import AptitudeContainer from "./components/AptitudeContainer";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>SLA Assessment</h1>

      <TechnicalContainer />
      <CommunicationContainer />
      <AptitudeContainer />
    </div>
  );
}
