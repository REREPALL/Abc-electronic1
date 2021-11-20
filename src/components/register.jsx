import React, { Component } from "react";
class Register extends Component {
  render() {
    return (
      <div>
        <h3>Registration Page</h3>
        <div className=" mx-auto  w-50 border border-dark pt-3 pb-3">
          <div className="mb-3 px-5">
            <label for="formGroupExampleInput2" className="form-label">
              Email Id
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3 px-5">
            <label for="formGroupExampleInput2" className="form-label">
              Contact No
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter Last Name"
            />
          </div>

          <div className="mb-3 px-5">
            <label for="formGroupExampleInput2" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3 px-5">
            <label for="formGroupExampleInput2" className="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Confirm password"
            />
          </div>
          <div class="d-grid gap-2 mb-3 px-5">
            <button class="btn btn-primary" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
