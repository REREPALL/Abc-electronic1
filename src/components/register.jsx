import React, { Component } from "react";
class Register extends Component {
  render() {
    return (
      <div>
        <h3>Registration Form</h3>
        <form className="w-50 mx-auto border p-3 ">
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputPassword1" className="form-label">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <select
            className="form-select mb-3 ml-3 px-5"
            aria-label="Default select example"
            name="role"
          >
            <option selected>Select Role</option>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
          </select>
          <div class="d-grid gap-2 mb-3 ">
            <button class="btn btn-primary" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
