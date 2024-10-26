import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      await onLogin(username, password);
      setError(''); // Clear any errors
      setIsLoggedIn(true); // Set login status to true on success
    } catch (err) {
      setError(err.message); // Show error message
      setIsLoggedIn(false); // Reset login status on failure
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      {error && <p className="error-message">{error}</p>}

      {isLoggedIn ? (
        <p className="success-message">
          Successfully logged in, so click any page, then go back to the records.
        </p>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      )}

      {/* Styling */}
      <style jsx>{`
        .login-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-family: 'Arial', sans-serif;
          background-color: #f9f9f9;
        }

        .login-title {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        .login-form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          transition: border-color 0.2s ease-in-out;
        }

        .form-input:focus {
          border-color: #007bff;
          outline: none;
        }

        .login-btn {
          background-color: #007bff;
          color: white;
          padding: 10px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }

        .login-btn:hover {
          background-color: #0056b3;
        }

        .error-message {
          color: red;
          font-weight: bold;
          text-align: center;
          margin-bottom: 15px;
        }

        .success-message {
          color: green;
          font-weight: bold;
          text-align: center;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default Login;
