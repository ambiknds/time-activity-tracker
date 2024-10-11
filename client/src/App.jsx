import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/authPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
