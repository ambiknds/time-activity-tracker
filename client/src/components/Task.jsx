const Task = ({ task, onStartTimer, onStopTimer }) => {
    return (
      <div className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        {task.isActive ? (
          <button
            className="bg-red-500 text-white py-1 px-3 rounded"
            onClick={() => onStopTimer(task._id)}
          >
            Stop
          </button>
        ) : (
          <button
            className="bg-green-500 text-white py-1 px-3 rounded"
            onClick={() => onStartTimer(task._id)}
          >
            Start
          </button>
        )}
        <div className="mt-2">
          {task.timeLogs.map((log, index) => (
            <p key={index} className="text-sm text-gray-600">
              Start: {new Date(log.startTime).toLocaleTimeString()}, End: {log.endTime ? new Date(log.endTime).toLocaleTimeString() : 'Active'}
            </p>
          ))}
        </div>
      </div>
    );
  };
  
  export default Task;
  