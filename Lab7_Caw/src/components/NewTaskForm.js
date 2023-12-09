import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({ onTaskSubmit }) => {
  const [task, setTask] = useState('');
  const [subtask, setSubtask] = useState('');
  const [subtasks, setSubtasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubtaskChange = (e) => {
    setSubtask(e.target.value);
  };

  const handleAddSubtask = (e) => {
    e.preventDefault();
    if (subtask.trim() !== '') {
      setSubtasks((prevSubtasks) => [...prevSubtasks, subtask]);
      setSubtask('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onTaskSubmit({ task, subtasks });
      setTask('');
      setSubtasks([]);
      setSubtask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        New Task:
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a new task"
        />
      </label>
      <label>
        Subtask:
        <input
          type="text"
          value={subtask}
          onChange={handleSubtaskChange}
          placeholder="Enter a subtask"
        />
      </label>
      <button type="button" onClick={handleAddSubtask}>
        Add Subtask
      </button>
      <ul>
        {subtasks.map((subtask, index) => (
          <li key={index}>{subtask}</li>
        ))}
      </ul>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
