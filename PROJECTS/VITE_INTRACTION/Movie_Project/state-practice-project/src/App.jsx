import ToggleMessage from "./components/ToggleMessage";
import LimitedCounter from "./components/LimitedCounter";
import GreetingSwitcher from "./components/GreetingSwitcher";
import NumberList from "./components/NumberList";
import UserProfile from "./components/UserProfile";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>React State Practice</h2>

      <ToggleMessage />
      <hr />

      <LimitedCounter />
      <hr />

      <GreetingSwitcher />
      <hr />

      <NumberList />
      <hr />

      <UserProfile />
      <hr />

      <MovieList />
    </div>
  );
}

export default App;
