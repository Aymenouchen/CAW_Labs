import React, { useState } from 'react';
import Button from "./components/Button";
import Counter from "./components/Counter";
import DisplayTab from './components/DisplayTab';
import Auth from './components/Auth';
import DynamicDivs from './components/DynamicDivs';

const App = () => {
  const [table1, setTable1] = useState(["hello", "world", "from", "react"]);
  const [table2, setTable2] = useState(["apple", "banana", "cherry"]);

  const handleRemove = (tableIndex, elementIndex) => {
    if (tableIndex === 1) {
      const newTable = table1.filter((_, i) => i !== elementIndex);
      setTable1(newTable);
    } else if (tableIndex === 2) {
      const newTable = table2.filter((_, i) => i !== elementIndex);
      setTable2(newTable);
    }
  };
  const [users, setUsers] = useState([]);

  const handleLogin = ({ username, password }) => {
    // Perform authentication logic here (e.g., API call, check credentials)
    // For simplicity, just add a new user to the list for demonstration purposes
    const newUser = { username, password };
    setUsers([...users, newUser]);
  };

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };
  return (
    <div>
      <h1>exo1</h1>
      <Button></Button>
      <Counter></Counter>
      <h1>exo2</h1>
      <DisplayTab table={table1} onRemove={(index) => handleRemove(1, index)} />
      <DisplayTab table={table2} onRemove={(index) => handleRemove(2, index)} />
      <h1>exo3</h1>
         <Auth onLogin={handleLogin} users={users} onDelete={handleDelete} />
         <h1>exo4</h1>
         <DynamicDivs></DynamicDivs>

    </div>
  );
};

export default App;