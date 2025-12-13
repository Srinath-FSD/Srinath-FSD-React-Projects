import Header from "./Header";
import Message from "./Message";

const App = () => {
  return (
    <div style={{
      padding: "30px",
      backgroundColor: "#f5f5f5",
      height: "100vh"
    }}>
      <Header />
      <Message />
    </div>
  );
};

export default App;
