
const Task = require('../models/Task');


const addTask = async (req, res) => {
  try {
    
    const { text, priority } = req.body;
    
    if (!text) {
      return res.status(400).json({ message: 'Task text is required' });
    }

    const newTask = new Task({
      text,
      priority: priority || 'Medium',
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error adding task', error });
  }
};


const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};

module.exports = { addTask, getTasks };
