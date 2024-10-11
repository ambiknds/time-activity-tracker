import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onStartTimer, onStopTimer }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onStartTimer={onStartTimer} onStopTimer={onStopTimer} />
      ))}
    </div>
  );
};

export default TaskList;


