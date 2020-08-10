import React, { Component } from "react";
import { CardList } from "./Components/Card-list/Card-list.Component";
import "./App.css";
import { SearchBox } from "./Components/Search-Box/Search-Box.Component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Moster's Rolodex</h1>
        <SearchBox
          placeholder="Search Monster..."
          handleChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
