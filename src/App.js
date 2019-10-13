import React, { Component } from 'react';
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Hp from "./Hp"
import Savings from "./Sections/Savings";
import Spendings from "./Sections/Spendings"
import SpendingCat from "./Sections/SpendingCat"
import SignIn from './auth/SignIn'
import firebase from './config/firebase'
import {Link} from 'react-router-dom'
class App extends Component {
  state = {  }
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      //  localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
      //  localStorage.removeItem('user');
      }
    });
  }
  render() { 
    
    return ( 
      <div className="App">
      {this.state.user ? ( <Link to='/home' className="btn-primary"> Login </Link>) : (<Link to = '/'></Link>)}
        </div>,
        <>
            <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/home" component={Hp} />
            <Route exact path="/spendings/" component={Spendings} />
            <Route exact path="/savings/" component = {Savings}/>
            <Route exact path="/spendingcat/" component ={SpendingCat}/> 
          </Switch>
          </>
     );
  }
}
 
export default App;


    
    


