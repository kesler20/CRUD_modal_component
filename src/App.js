import logo from "./logo.svg";
import "./App.css";
import Links from "./components/links";

function App() {
  return (
      <div className="container">
        <div>
          <h2 className="title">These are the links that you may want to use</h2>
          <Links />
        </div>
      </div>
  );
}

export default App;
