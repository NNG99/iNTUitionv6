import React, { Component } from "react";
import firebase from "../config/firebase";
import "./SignIn.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {

    return (
      <div>
        <img
                src="http://r69.cooltext.com/rendered/cooltext338330233249969.png"
                width="600"
                height="100"
                className="logo"/>
        <img 
          src="https://lh3.googleusercontent.com/lf9TVNpcXzymmNb7X_ynQlqlD65U7i9qhbdE5jRqR9hc1rt-0bo3RGa34iMevCeycl1Y1Hcc9yLmYxFrGD4VLPfEAtxa8azgcnF5klKmo3mmtlAb-2IbMFDbXDDwmexOAZk12I0r49dOv2X7k3HdC3dnWmcYQOJKVNnY4krNqLHdV7PQ3e6vy-GJA1eP_PJw8ohdOx7xtyJYyZ2uDdTzHbpiuYleKCnzCri3nkiy69_uzqSBVsfpX97QoVD2j6prs-PcsP4wmeo_2sdYtiWkbSdAZ0pA-lO2By1IwKAHAon_mUXI9UFWP1jOb1oju6-D8kVajOW8ek14ewZlj1NNFDoseIvd6WRVNjKR0evG6nnMTp37TGdgGjza3CnmOX_SskkDIEDsJ9slpgwhdmV6MJW_yNM7Pd1H0WJdwUK4a8xhVcyEH-bMqTfAeXOqjQEa-Nsa_cJdIKjt_gnaUIq-JIeNxfT_NZ1VkpX6xivHHudPssCEKS-6X0ZNJyGSGc4yBeL-0sQDyOr8i_h650mwOFmiOJRWFlFcAjGycuBEFBk90zptX1FcPUBUHc8_9NH6VnGwCburtQqszluXJtXyNe7IF5cq1ZXXd4fMzam4FTkwhLmWxFCFrEYG_2i7IyjZVufop57YLOLIJYWEFKuI46pvHNxwXF5c_FmVOQhYrk6roQtFHT7PtKA=w353-h321-no"
          width="500"
          height="500"
          className="stupidnatashaa"/>

      <div className="container">
          <h1>Login to Web App</h1>
        <form className="form-group">
          <div>
            <p>
              <input
                className="input-text"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="input-text"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </p>
          </div>
          <button type="submit" onClick={this.login} className="btn-secondary">
            Login
          </button>
          <button
            onClick={this.signup}
            style={{ marginLeft: "25px", marginTop: "25px" }}
            className="btn-secondary"
          >
            Signup
          </button>
        </form>
      </div>
      </div>
    );
  }
}
export default Login;
