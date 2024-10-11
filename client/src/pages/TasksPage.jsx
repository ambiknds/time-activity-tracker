import React, { useEffect, useState } from 'react';
import { getTasks, createTask, startTimer, stopTimer } from '../api';
import TaskList from '../components/TaskList';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [error, setError] = useState(null);

  // const token = localStorage.getItem('token');
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDc1MDkyNDFlNTk3ODA2NjYxMWI0OCIsImlhdCI6MTcyODUzNTQ0NCwiZXhwIjoxNzI4NTM5MDQ0fQ.KNtw7_z2zkcDw6gmIAZYu0K2WY6R7jQt-QINFZAcImw"

  useEffect(() => {
    const fetchTasks = async () => {
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }
      try {
        const res = await getTasks(`Bearer ${token}`);
        setTasks(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch tasks.');
      }
    };
    fetchTasks();
  }, [token]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) {
      setError('Task title cannot be empty.');
      return;
    }
    try {
      const res = await createTask(`Bearer ${token}`, newTaskTitle);
      setTasks([...tasks, res.data]);
      setNewTaskTitle('');
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to create task.');
    }
  };

  const handleStartTimer = async (taskId) => {
    try {
      await startTimer(`Bearer ${token}`, taskId);
      // Optionally re-fetch tasks or update the specific task
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to start timer.');
    }
  };

  const handleStopTimer = async (taskId) => {
    try {
      await stopTimer(`Bearer ${token}`, taskId);
      // Optionally re-fetch tasks or update the specific task
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to stop timer.');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
      <TaskList tasks={tasks} onStartTimer={handleStartTimer} onStopTimer={handleStopTimer} />
    </div>
  );
};

export default TasksPage;