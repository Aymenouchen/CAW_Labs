import React, { useState } from 'react';

const UserList = ({ users, onDelete }) => (
  <ul>
    {users.map((user, index) => (
      <li key={index}>
        {user.username}{' '}
        <button onClick={() => onDelete(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

const AuthForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

const Auth = ({ onLogin, users, onDelete }) => (
  <div>
    <h1>User Authentication and List</h1>
    <AuthForm onLogin={onLogin} />
    <UserList users={users} onDelete={onDelete} />
  </div>
);

export default Auth;
