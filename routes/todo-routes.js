// routes/todo-routes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

// API Endpoints
router.get('/tasks', todoController.getAllTasks);
router.post('/tasks', todoController.createTask);
router.put('/tasks/:id', todoController.updateTask);
router.delete('/tasks/:id', todoController.deleteTask);

module.exports = router;
