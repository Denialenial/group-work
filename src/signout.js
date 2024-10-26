import React, { useState } from 'react';

const Signout = ({ onSignout }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignout = (event) => {
    event.preventDefault();
    onSignout(email, password);
  };

  return (
    <form onSubmit={handleSignout}>
      <h2>Sign Out</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default Signout;
