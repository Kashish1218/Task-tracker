import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default TaskList;