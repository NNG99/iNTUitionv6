import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import Savings from "../Sections/Savings";
class Services extends Component {
  state = {
    services: [
      {
        title: "Spending List",
        info: "Shows how much and what you have spent in total",
        link: "/spendings"
      },

      {
        title: "Saving plans",
        info: "Introduction to different saving schemes",
        link: "/spendingcat"
      }
    ],
    showPopup: false
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <h6>{item.title}</h6>
                <Link to={item.link} className="btn-primary">
                  Click here
                </Link>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
        <div className="service-center">
          <h6>Add Expenditure</h6>
          <button className="btn-primary" onClick={this.togglePopup.bind(this)}>
            Click Here
          </button>
          {this.state.showPopup ? (
            <Savings closePopup={this.togglePopup.bind(this)} />
          ) : null}
        </div>
      </section>
    );
  }
}

export default Services;
