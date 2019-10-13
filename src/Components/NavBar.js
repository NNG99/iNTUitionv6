import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/firebase";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  logout() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/home">
              <img
                src="https://previews.123rf.com/images/prostoira777/prostoira7771804/prostoira777180400015/99212133-llama-cartoon-cute-alpaca-lama-animal-vector-isolated-illustration-cute-funny-hand-drawn-art-design-.jpg"
                width="80"
                height="85"
              />
            </Link>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li onClick={this.logout}>
                <Link to="/">Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
