const Task = require("../models/task.model");

// list all tasks
exports.taskList = async (req, res) => {
    await Task.find()
      .then(tasks => res.json(tasks))
      .catch(err => res.status(400).json('Error: ' + err))
} 


// add task
exports.addTask = async (req, res) => {

    const text = req.body.text
    const day = req.body.day
    const reminder = req.body.reminder
  
    // add new task
    const newTask = new Task({
      text,
      day,
      reminder
    })
  
    newTask.save()
    .then(() => res.json({"Response":`Task ${text} added for tasks`}))
    .catch(err => res.status(400).json('Error: ' + err));
  
  }
  