import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactsTable = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    salary: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('There was an error fetching the employees!', error);
    }
  };

  const handleEdit = (employee) => {
    setFormData({
      name: employee.name,
      idNumber: employee.id_number,
      salary: employee.salary
    });
    setIsEditing(true);
    setCurrentId(employee.id_number);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('There was an error deleting the employee!', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        await axios.put(`http://localhost:3001/api/employees/${currentId}`, formData);
        fetchEmployees();
        setFormData({ name: '', idNumber: '', salary: '' });
        setIsEditing(false);
        setCurrentId(null);
      } catch (error) {
        console.error('There was an error updating the employee!', error);
      }
    } else {
      try {
        await axios.post('http://localhost:3001/api/employees', formData);
        fetchEmployees();
        setFormData({ name: '', idNumber: '', salary: '' });
      } catch (error) {
        console.error('There was an error adding the employee!', error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          ID Number:
          <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Salary:
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
      </form>

      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id_number}>
              <td>{employee.name}</td>
              <td>{employee.id_number}</td>
              <td>{employee.salary}</td>
              <td>
                <button 
                  onClick={() => handleEdit(employee)} 
                  style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(employee.id_number)} 
                  style={{ backgroundColor: 'red', color: 'white' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
