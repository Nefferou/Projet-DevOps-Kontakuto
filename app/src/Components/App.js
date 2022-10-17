import logo from "../logo.svg";
import "../Scss/App.scss";
import { Chip } from "@mui/material";

function App() {
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

        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </header>
    </div>
  );
}

export default App;
