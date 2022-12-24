import React, { Component } from "react";

import "./App.css";
import StalkerCatsField from "./components/stalker-cats-field";
import StalkerCatHaeder from "./components/stalker-cat-header";

export default class App extends Component {
  state = {
    cats: [],
  };

  onAddCat = (cats) => {
    this.setState({ cats: [...cats] });
  };

  pursueTheCursor = (e) => {
    this.setState(({ cats }) => {
      const newCats = cats.map((cat) => {
        for (let i = 1; i <= cats.length; i++) {
          cat.x = e.pageX + Math.floor(Math.random() * (100 - 1) );
          cat.y = e.pageY + Math.floor(Math.random() * (50 - 1 ));
        }
      });
      return newCats;
    });
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.pursueTheCursor);
  }

  componentWillUnmount() {
    document.addEventListener("mousemove", this.pursueTheCursor);
  }

  render() {
    return (
      <div className="App">
        <StalkerCatHaeder onAddCat={this.onAddCat} />
        <StalkerCatsField getData={this.state.cats} />
      </div>
    );
  }
}
