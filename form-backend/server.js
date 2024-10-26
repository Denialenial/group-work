const express = require('express');  
const mysql = require('mysql');  
const bodyParser = require('body-parser');  
const cors = require('cors');  

const app = express();  
const port = 3001;  

app.use(cors());  
app.use(bodyParser.json());  

// MySQL connection setup  
const db = mysql.createConnection({  
  host: 'localhost',  
  user: 'root',  
  password: '1354',  
  database: 'DenialCoding'  
});  

db.connect(err => {  
  if (err) {  
    console.error('Error connecting to MySQL:', err);  
    return;  
  }  
  console.log('Connected to MySQL');  
});  

// Fetch all employees  
app.get('/api/employees', (req, res) => {  
  const sql = 'SELECT * FROM Employees';  
  db.query(sql, (err, results) => {  
    if (err) {  
      console.error('Error fetching employees:', err);  
      return res.status(500).send('Error fetching employees');  
    }  
    res.json(results);  
  });  
});  

// Add a new employee  
app.post('/api/employees', (req, res) => {  
  const { name, idNumber, salary } = req.body;  
  const sql = 'INSERT INTO Employees (name, id_number, salary) VALUES (?, ?, ?)';  
  db.query(sql, [name, idNumber, salary], (err, result) => {  
    if (err) {  
      console.error('Error adding employee:', err);  
      return res.status(500).send('Error adding employee');  
    }  
    res.status(201).send({ id: result.insertId, message: 'Employee added successfully' });  
  });  
});  

// Update an employee  
app.put('/api/employees/:id', (req, res) => {  
  const { id } = req.params;  
  const { name, idNumber, salary } = req.body;  
  const sql = 'UPDATE Employees SET name = ?, id_number = ?, salary = ? WHERE id_number = ?';  
  db.query(sql, [name, idNumber, salary, id], (err, result) => {  
    if (err) {  
      console.error('Error updating employee:', err);  
      return res.status(500).send('Error updating employee');  
    }  
    if (result.affectedRows === 0) {  
      return res.status(404).send('Employee not found');  
    }  
    res.send('Employee updated successfully');  
  });  
});  

// Delete an employee  
app.delete('/api/employees/:id', (req, res) => {  
  const { id } = req.params;  
  const sql = 'DELETE FROM Employees WHERE id_number = ?';  
  db.query(sql, [id], (err, result) => {  
    if (err) {  
      console.error('Error deleting employee:', err);  
      return res.status(500).send('Error deleting employee');  
    }  
    if (result.affectedRows === 0) {  
      return res.status(404).send('Employee not found');  
    }  
    res.send('Employee deleted successfully');  
  });  
});  

// Server listener  
app.listen(port, () => {  
  console.log(`Server running on port ${port}`);  
});