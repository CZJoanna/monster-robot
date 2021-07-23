import { Component } from "react";
//CSS
import "./App.css";
//component
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";

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
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase().trim())
    );

    return (
      <div className="App">
        <div className="search">
          <SearchBox
            placeholder="search monsters"
            handleChange={(e) => {
              this.setState({ searchField: e.target.value });
            }}
          ></SearchBox>
        </div>

        <CardList monsters={filterMonsters}></CardList>
      </div>
    );
  }
}

export default App;
