import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Home from "./Sections/Home";
import Wallet from "./Sections/Wallet";
import Savings from "./Sections/Savings";
import Spendings from "./Sections/Spendings"
import SpendingCat from "./Sections/SpendingCat"
import { Route, Switch } from "react-router-dom";

function Hp() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/spendings/" component={Spendings} />
        <Route exact path="/savings/" component = {Savings}/>
        <Route exact path="/spendingcat/" component ={SpendingCat}/> 
      </Switch>

    </>
  );
}

export default Hp;