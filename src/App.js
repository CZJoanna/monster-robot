import { Component } from "react";
//CSS
import "./App.css";
//component
import { CardList } from "./components/card-list";

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
    searchField: "",
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
        <input
          className="search"
          type="text"
          placeholder="search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        ></input>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
