import React, { Component } from "react";

import axios from "axios";
class Complaints extends Component {
  state = {
    complaints: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:9090//api//getcomplaints")
      .then((res) => {
        console.log(res);
        this.setState({ complaints: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <input
          type="submit"
          value="Add"
          className="btn btn-primary float-end my-3"
        />
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Complaint Id</th>
              <th>Client Id</th>
              <th>Complaint Name</th>
              <th>EngineerId</th>
              <th>Product Model Number</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.complaints.map((complaint) => (
              <tr>
                <td>{complaint.complaintId}</td>
                <td>{complaint.clientId}</td>
                <td>{complaint.complaintName}</td>
                <td>{complaint.engineerId}</td>
                <td>{complaint.productModelNumber}</td>
                <td>{complaint.status}</td>

                <td>
                  <input
                    type="button"
                    value="Update"
                    className="btn btn-secondary"
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Complaints;
