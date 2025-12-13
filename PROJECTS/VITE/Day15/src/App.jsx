import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#f1f5f9");

  return (
    <div>
 
      <header className="header">
        <button onClick={() => setBgColor("blue")}>Home</button>
        <button onClick={() => setBgColor("red")}>Contact</button>
        <button onClick={() => setBgColor("orange")}>More</button>
      </header>

  
      <main className="main" style={{ backgroundColor: bgColor }}>
        <h1>Welcome Dude</h1>
        <p>Click the buttons above to change background</p>
      </main>
    </div>
  );
}

export default App;
