const { addTask, getAllTasks, deleteTask, markAsCompleted, onEditTask } = require('../controllers/taskController')

const express = require('express')
const router = express.Router()


router.post('/addtask', addTask)
router.get('/getalltasks', getAllTasks)
router.delete('/deletetask', deleteTask)
router.patch('/markascompleted', markAsCompleted)
router.patch('/edittask', onEditTask)

// exporting the router object
module.exports = router