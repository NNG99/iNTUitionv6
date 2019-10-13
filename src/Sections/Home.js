import React, { Component } from "react";
import Services from "../Components/Services";
import NavBar from "../Components/NavBar";
import "../App.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictorySharedEvents,
  VictoryLabel,
  VictoryPie
} from "victory";
import firebase from "../config/firebase";

class Home extends Component {
  constructor(props) {
    super(props);
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
          category: items[item].category,
          amount: items[item].amount
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  state = {};

  render() {
    const data_dist = this.state.items.map( item => ({x: item.category,y: item.amount}));
    return (
      <>
        <NavBar />
        <VictoryPie
          data={data_dist}
          labels={({ datum }) => `${datum.x}: $${datum.y}`}
          innerRadius={120}
          width={580}
          padding={{ top: 60, bottom: 60 }}
          
        />
        <Services />
      </>
    );
  }
}

export default Home;
