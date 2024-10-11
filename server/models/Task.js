const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  timeLogs: [{ startTime: Date, endTime: Date }],
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
