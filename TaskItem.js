import React from 'react';
import { formatTimeLeft } from '../helpers/timeFormatter';

function TaskItem({ task, onToggle }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginBottom: '1rem',
      textDecoration: task.completed ? 'line-through' : 'none'
    }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
        style={{ marginRight: '1rem' }}
      />
      <strong>{task.title}</strong>
      <p>{formatTimeLeft(task.dueDate)}</p>
    </div>
  );
}

export default TaskItem;