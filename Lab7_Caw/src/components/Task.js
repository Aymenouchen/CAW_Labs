import React, { useState } from 'react';

const Subtask = ({ subtask, onDoneClick }) => {
  const handleDoneClick = () => {
    onDoneClick(subtask);
  };

  return (
    <div>
      <p>{subtask.description}</p>
      {!subtask.done && <button onClick={handleDoneClick}>Done</button>}
    </div>
  );
};

const Task = ({ task, onDeleteClick }) => {
  const [subtasks, setSubtasks] = useState([]);

  const addSubtask = (newSubtask) => {
    setSubtasks((prevSubtasks) => [...prevSubtasks, newSubtask]);
  };

  const handleDoneClick = (clickedSubtask) => {
    const updatedSubtasks = subtasks.map((subtask) =>
      subtask === clickedSubtask ? { ...subtask, done: true } : subtask
    );
    setSubtasks(updatedSubtasks);
  };

  return (
    <div>
      <p>{task.task}</p>
      <button onClick={() => onDeleteClick(task)}>Delete Task</button>
      <div>
        Sub-Tasks:
        {subtasks.map((subtask, index) => (
          <Subtask key={index} subtask={subtask} onDoneClick={handleDoneClick} />
        ))}
      </div>
      <button onClick={() => addSubtask({ description: 'New Subtask', done: false })}>
        Add Subtask
      </button>
    </div>
  );
};

export default Task;