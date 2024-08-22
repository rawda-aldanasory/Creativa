import React, { Component } from 'react';
import "./style.css"

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };

    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  Increment() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  Decrement() {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.Decrement}>-</button>
        <span className="quantity">{this.state.quantity}</span>
        <button className="button" onClick={this.Increment}>+</button>
      </div>
    );
  }
}

export default Selector;