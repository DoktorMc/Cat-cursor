import React, { Component } from "react";

import "./Stalker-cats-field.css";

export default class StalkerCatsField extends Component {

  renderCat = (cats = this.props.getData) => {
    return cats.map((item) => {
      const { id, x, y } = item;

      return (
        <div
          className="stalker-cat"
          style={{ left: x + "px", top: y + "px" }}
          key={id}
        ></div>
      );
    });
  };

  render() {
    const cats = this.renderCat();

    return <div className="stalker-cat-field">{cats}</div>;
  }
}
