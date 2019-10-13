import React, { Component } from "react";
import "./style.css";
import firebase from "../config/firebase";

class Savings extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      amount: "",
      date: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {};
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      amount: this.state.amount,
      category: this.state.category,
      date: this.state.date
    };
    itemsRef.push(item);
    this.setState({
      category: "",
      amount: "",
      date: ""
    });
  }
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <form onSubmit={this.handleSubmit}>
            <h5>Fill up the following: </h5>

            <div className="input-field">
              <label htmlFor="category">Amount</label>
              <input
                type="text"
                id="amount"
                onChange={this.handleChange}
                value={this.state.amount}
              />
            </div>

            <div className="input-field">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                onChange={this.handleChange}
                value={this.state.category}
              />
            </div>

            <div className="input-field">
              <label htmlFor="date"> Date </label>
              <input
                type="text"
                id="date"
                onChange={this.handleChange}
                value={this.state.date}
              />
            </div>

            <div className="input-field">
              <button className="btn-primary">Submit</button>
            </div>
          </form>
          <button className="btn-primary" onClick={this.props.closePopup}>
            close me
          </button>
        </div>
      </div>
    );
  }
}

export default Savings;
