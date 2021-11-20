import React from "react";
const Login = (props) => {
  return (
    <div>
      <h3>Login Page</h3>
      <form className=" mx-auto  w-25 border border-dark pt-3 pb-3 ">
        <div className="mb-3 px-5">
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
        <div className="mb-3 px-5">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="dropdown  d-grid gap-2 mb-3 px-5 ">
          <a
            class="btn btn-secondary dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink ">
            <li>
              <a class="dropdown-item" href="#">
                Client
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Admin
              </a>
            </li>
          </ul>
        </div>
        <div class="d-grid gap-2 mb-3 px-5">
          <button class="btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
