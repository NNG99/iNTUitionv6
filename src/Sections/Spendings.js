import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import firebase from "../config/firebase";
import "./style.css";
class Spendings extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          category: items[item].category,
          amount: items[item].amount,
          date: items[item].date
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  state = {};
  render() {
    return (
      <>
        <NavBar />
        <section className="display-item">
          <div className="wrapper">
            <ul className="natasha">
              {this.state.items.map(item => {
                return (
                  <li className="stupidnatasha" key={item.id}>
                    <p className="header3">{item.date}</p>
                    <p className="para1">Amount: {item.amount}</p>
                    <p className="para1">Category: {item.category}</p>
                    <button
                      className="stupidmyat"
                      onClick={() => this.removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Spendings;
