const addTaskService = require("../services/addTaskService");
const deleteTaskService = require("../services/deleteTaskService");
const getAllTasksService = require("../services/getAllTasksService");

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
    }
}

// exports 
module.exports = taskContoller