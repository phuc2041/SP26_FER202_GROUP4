import "./App.css";
import logo from "./logo.svg";

function App() {
  function checkPositiveNumber(num) {
    let sum = 0;
    let check = num > 0 && num % 0 == 1;
    return check;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
