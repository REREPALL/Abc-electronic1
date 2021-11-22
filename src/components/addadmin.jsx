import React, { Component } from "react";
import axios from "axios";

class AddAdmin extends React.Component {
  state = {
    admin: {
      emailId: "",
      contactNumber: "",
      password: "",
      role: "",
    },
  };
  handleChange = (event) => {
    const admin = { ...this.state.admin }; // copying student object
    //admin[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    // console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ admin: admin });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const student = {
      contactNo: this.state.admin.contactNumber,

      login: {
        email: this.state.admin.emailId,
        password: this.state.admin.password,
        role: this.state.admin.role,
      },
      rollNo: 0,
    };
    axios
      .post("http://localhost:9090/addadmin", this.state.admin)
      .then((res) => {
        this.props.history.push("/adddmin");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.admin.emailId}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              Contact No
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.admin.contactNumber}
              name="contactNo"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.admin.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.admin.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="student">Client</option>
            <option value="admin">Admin</option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAdmin;
