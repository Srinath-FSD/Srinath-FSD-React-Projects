import ClassText from "./components/ClassText";
import Shape from "./components/Shape";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-8 p-8 bg-gray-100">
      <h1 className="text-2xl font-bold">Class Practice</h1>

      <ClassText />
      <Shape />
    </div>
  );
}

export default App;
