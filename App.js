import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './App.css';
import icon from './icon.png'

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]);
  };

  // Toggle completion
  const toggleTask = (toggledTask) => {
    setTasks(
      tasks.map((task) =>
        task === toggledTask ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter logic
  const getFilteredTasks = () => {
    const now = new Date();

    switch (filter) {
      case "today":
        return tasks.filter((task) => {
          const due = new Date(task.dueDate);
          return due.toDateString() === now.toDateString();
        });
      case "overdue":
        return tasks.filter(
          (task) => new Date(task.dueDate) < now && !task.completed
        );
      case "completed":
        return tasks.filter((task) => task.completed);
      case "incomplete":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="container">
      <h1>
        <img src={icon} alt="Task" style={{ height: 28, verticalAlign: "middle", marginRight: 10 }} />
        Task Tracker
      </h1>
      <TaskForm onAddTask={handleAddTask} />

      <div style={{ marginBottom: '1rem' }}>
        <strong>Filter:</strong>{' '}
        <button className={`filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}> All</button>
        <button className={`filter-button ${filter === 'today' ? 'active' : ''}`} onClick={() => setFilter('today')}> Today</button>
        <button className={`filter-button ${filter === 'overdue' ? 'active' : ''}`} onClick={() => setFilter('overdue')}> Overdue</button>
        <button className={`filter-button ${filter === 'incomplete' ? 'active' : ''}`} onClick={() => setFilter('incomplete')}> Incomplete</button>
        <button className={`filter-button ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}> Completed</button>
      </div>

      <h2>{completedCount} out of {tasks.length} tasks completed </h2>

      <TaskList tasks={getFilteredTasks()} onToggle={toggleTask} />
    </div>
  );
};

export default App;
