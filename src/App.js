import { Component } from "react";

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

  //自定義方法_使用箭頭函式綁定this到元件內
  handleChange=(e)=> {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase().trim())
    );

    return (
      <div className="App">
        <div className="title">
          <h1 className="heading-1">MONSTER ROLODEX</h1>
        </div>
        <div className="search">
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          ></SearchBox>
        </div>

        <CardList monsters={filterMonsters}></CardList>
      </div>
    );
  }
}

export default App;
