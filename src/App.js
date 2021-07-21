import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // with constructor
  // constructor () {
  //   super();
  //   this.state = {
  //     person: [{ name: "Bill", age: "29" }],
  //   };
  // };

  // without constructor
  state = {
    monsters: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //response 回傳為 ReadableStream 物件 -> 使用json方法來取得資料
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((mon) => (
          <h1 key={mon.id}> {mon.name} </h1>
        ))}
      </div>
    );
  }
  com;
}

export default App;
