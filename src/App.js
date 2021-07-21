import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //ES7 without constructor
  state = {
    person: [{ name: "Bill", age: "29" }],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, my name is JYUN.llll</p>
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
}

export default App;
