import React, { useState } from 'react';
import TaskList from './components/taskList';
import NewTaskForm from './components/NewTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <NewTaskForm onTaskSubmit={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;