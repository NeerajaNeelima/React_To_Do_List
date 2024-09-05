
const express = require('express');
const { addTask, getTasks } = require('../controllers/taskController');

const router = express.Router();


router.post('/add_tasks', addTask);


router.get('/get_tasks', getTasks);

module.exports = router;
