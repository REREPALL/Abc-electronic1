import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Admin extends React.Component {
  state = {
    admin: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:9090//addadmin")
      .then((response) => {
        console.log(response);
        this.setState({ students: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <Link to="/admin/add" className="btn btn-primary float-end my-3">
          Add
        </Link>
        <table className="table ">
          <thead>
            <tr>
              <th>Admin Id</th>
              <th>Email Id</th>
              <th>Contact No</th>
            </tr>
          </thead>
          <tbody>
            {this.state.admin.map((admin) => (
              <tr>
                <td>{admin.adminId}</td>
                <td>{admin.emailId}</td>
                <td>{admin.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
