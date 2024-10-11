const express = require('express');
const { createTask, getTasks, startTimer, stopTimer } = require('../controllers/taskController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createTask);
router.get('/', authMiddleware, getTasks);
router.post('/:taskId/start', authMiddleware, startTimer);
router.post('/:taskId/stop', authMiddleware, stopTimer);

module.exports = router;


