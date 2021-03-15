const express = require('express');
const router = express.Router();
const {taskList, addTask } = require('../controllers/task.controller')


router.route('/')
.get(taskList)

router.route('/add')
.post(addTask)


module.exports = router

