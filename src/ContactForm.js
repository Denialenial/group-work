import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    salary: ''
  });

  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = 'Name is required.';
    }
    if (!formData.idNumber) {
      formErrors.idNumber = 'ID Number is required.';
    }
    if (!formData.salary) {
      formErrors.salary = 'Salary is required.';
    } else if (isNaN(formData.salary)) {
      formErrors.salary = 'Salary must be a number.';
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      if (editingEmployee) {
        await updateEmployee(editingEmployee.id_number, formData);
      } else {
        await addEmployee(formData);
      }

      setMessage(editingEmployee ? 'Employee updated successfully!' : 'Employee added successfully!');
      resetForm();
      fetchEmployees();
    } else {
      setErrors(validationErrors);
    }
  };

  const addEmployee = async (employee) => {
    try {
      await fetch('http://localhost:3001/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const updateEmployee = async (id, employee) => {
    try {
      await fetch(`http://localhost:3001/api/employees/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/employees/${id}`, {
        method: 'DELETE',
      });
      fetchEmployees();
      setMessage('Employee deleted successfully!');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const editEmployee = (employee) => {
    setFormData({
      name: employee.name,
      idNumber: employee.id_number,
      salary: employee.salary,
    });
    setEditingEmployee(employee);
  };

  const resetForm = () => {
    setFormData({ name: '', idNumber: '', salary: '' });
    setEditingEmployee(null);
  };

  return (
    <div className="container">
      <h1>Employee Management</h1>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            className={errors.idNumber ? 'input-error' : ''}
          />
          {errors.idNumber && <p className="error">{errors.idNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className={errors.salary ? 'input-error' : ''}
          />
          {errors.salary && <p className="error">{errors.salary}</p>}
        </div>

        <button type="submit" className="submit-btn">
          {editingEmployee ? 'Update' : 'Add'} Employee
        </button>
        {editingEmployee && <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>}
      </form>

      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map(employee => (
              <tr key={employee.id_number}>
                <td>{employee.name}</td>
                <td>{employee.id_number}</td>
                <td>{employee.salary}</td>
                <td>
                  <button className="edit-btn" onClick={() => editEmployee(employee)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteEmployee(employee.id_number)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No employees available</td>
            </tr>
          )}
        </tbody>
      </table>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .form {
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .input-error {
          border-color: red;
        }

        .error {
          color: red;
          font-size: 12px;
        }

        .submit-btn {
          background-color: green;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .cancel-btn {
          background-color: #555;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 10px;
        }

        .employee-table {
          width: 100%;
          border-collapse: collapse;
        }

        .employee-table th, .employee-table td {
          border: 1px solid black;
          padding: 8px;
        }

        .edit-btn {
          background-color: blue;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          margin-right: 5px;
          border-radius: 4px;
        }

        .delete-btn {
          background-color: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 4px;
        }

        .message {
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
