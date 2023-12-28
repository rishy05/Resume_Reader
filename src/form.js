// Form.js
import React, { useState } from 'react';
import Table from './Table';
import './Forms.css'; // Import the stylesheet

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    gender: '',
    location: '',
    salary: '',
  });
  const [tableData, setTableData] = useState(null); // State to store table data

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTable = () => {
    setTableData(formData);
  };

  return (
    <div className="form-container">
      <div className="form">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Phone Number:</label>
        <input type="tel" name="phone" onChange={handleChange} />

        <label>Date of Birth:</label>
        <input type="date" name="dob" onChange={handleChange} />

        <label>Gender:</label>
        <select name="gender" onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>

        <label>Location:</label>
        <input type="text" name="location" onChange={handleChange} />

        <label>Salary:</label>
        <input type="text" name="salary" onChange={handleChange} />

        <button onClick={handleCreateTable}>Create Table</button>
      </div>

      {tableData && <Table data={tableData} />}
    </div>
  );
};

export default Form;
