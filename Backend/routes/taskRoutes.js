const { addTask, getAllTasks, deleteTask } = require('../controllers/taskController')

const express = require('express')
const router = express.Router()


router.post('/addtask', addTask)
router.get('/getalltasks', getAllTasks)
router.delete('/deletetask', deleteTask)

// exporting the router object
module.exports = router