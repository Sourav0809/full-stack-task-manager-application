const addTaskService = require("../services/addTaskService");
const deleteTaskService = require("../services/deleteTaskService");
const findTaskService = require("../services/findTaskService");
const getAllTasksService = require("../services/getAllTasksService");
const markAsCompletedService = require("../services/markAsCompletedService");

const taskContoller = {

    // add task 
    addTask: async (req, res) => {
        const { title, description, completed } = req.body
        try {
            const dbRes = await addTaskService(title, description, completed)
            return res.send(dbRes)
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' })
            console.log(error);
        }
    },

    // for getting all the task
    getAllTasks: async (req, res) => {
        try {
            const dbRes = await getAllTasksService()
            return res.send(dbRes)
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' })
            console.log(error);
        }
    },


    // delete task
    deleteTask: async (req, res) => {
        const { id } = req.body
        try {
            const dbRes = await deleteTaskService(id)
            res.send(dbRes)
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' })
            console.log(error);
        }
    },

    // for mark a task as completed
    markAsCompleted: async (req, res) => {
        const { id } = req.body
        try {
            const findedTask = await findTaskService(id)
            await markAsCompletedService(findedTask)
            res.send({ success: true, id: id })
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' })
            console.log(error);
        }
    }
}

// exports 
module.exports = taskContoller