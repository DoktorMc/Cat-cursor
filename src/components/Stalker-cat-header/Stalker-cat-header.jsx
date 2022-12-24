import React, { Component } from "react";

import "./stalker-cat-header.css";

export default class StalkerCatHaeder extends Component {
  state = {
    cats:[]
  };

  onInputChange = (e) => {
    const { value } = e.target;
    const newCats = [];
    for (let i = 1; i <= value; i++) {
      newCats.splice(i, 0, {
        id: Math.random() * 100,
        x: Math.random() * 1000,
        y: Math.random() * 1000,
      });
    }
    this.setState({ cats: [...newCats] });
  };

  onChangeCount = (e) => {
    e.preventDefault();
    this.props.onAddCat(this.state.cats);
  };

  render() {
    return (
      <div className="stalker-cat_header">
        <div className="stalker-cat_header-icon"></div>
        <form className="stalker-cat_header_form">
          <input type="text" name="cat-counter" onChange={this.onInputChange} />
          <button type="submit" onClick={this.onChangeCount}>
            ADD CAT
          </button>
        </form>
      </div>
    );
  }
}
