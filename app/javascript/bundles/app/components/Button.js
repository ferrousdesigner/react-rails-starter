import React, { Component } from "react";
import '../styles/button.css'
export default class Button extends Component {
  render() {
    const { onClick, children } = this.props;
    return (
      <button className="btn-default" onClick={onClick}>
        {children}
      </button>
    );
  }
}
