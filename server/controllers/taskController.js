const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const task = new Task({ title, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.startTimer = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findById(taskId);
    task.timeLogs.push({ startTime: new Date() });
    task.isActive = true;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.stopTimer = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findById(taskId);
    const lastLog = task.timeLogs[task.timeLogs.length - 1];
    lastLog.endTime = new Date();
    task.isActive = false;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
