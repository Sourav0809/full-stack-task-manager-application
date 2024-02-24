const { addTask, getAllTasks, deleteTask, markAsCompleted } = require('../controllers/taskController')

const express = require('express')
const router = express.Router()


router.post('/addtask', addTask)
router.get('/getalltasks', getAllTasks)
router.delete('/deletetask', deleteTask)
router.patch('/markascompleted', markAsCompleted)

// exporting the router object
module.exports = router