import React from "react";
const EmpTable = (props) => {
  return (
    <div className="container">
      <input
        type="submit"
        value="Add"
        className="btn btn-primary float-end  my-3"
      />
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Emp id</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp) => (
            <tr>
              <td>{emp.empid}</td>
              <td>{emp.empname}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
