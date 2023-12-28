// EmployeeTable.js
import React from 'react';

const EmployeeTable = ({ employees }) => {
  return (
    <table id="employeeTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee ID</th>
          <th>Date of Birth</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Designation</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Joining Date</th>
          <th>Experience</th>
          <th>Present Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.employeeID}</td>
            <td>{employee.dob}</td>
            <td>{employee.age}</td>
            <td>{employee.gender}</td>
            <td>{employee.designation}</td>
            <td>{employee.phone}</td>
            <td>{employee.address}</td>
            <td>{employee.joiningDate}</td>
            <td>{employee.experience} Years</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
