import React, { Component } from "react";
import EmpTable from "./emptable";

class Home1 extends Component {
  state = {
    count: 0,
    emp: {
      empid: 101,
      empname: "revanth",
      salary: 250000,
    },
    employees: [
      {
        empid: 101,
        empname: "revanth",
        salary: 25000,
      },
      {
        empid: 102,
        empname: "sai",
        salary: 50000,
      },
      {
        empid: 103,
        empname: "repalle",
        salary: 75000,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Home</h1>

        <EmpTable employees={this.state.employees} />
      </div>
    );
  }
}

export default Home1;
