const { addTask } = require('../controllers/taskController')
const Tasks = require('../models/tasks')
const express = require('express')
const router = express.Router()


router.post('/addtask', addTask)


// exporting the router object
module.exports = router