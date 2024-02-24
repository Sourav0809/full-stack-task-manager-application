// importing tasks model
const Tasks = require('../models/tasks')

// add task service for add a new task 
const getAllTasksService = async () => {
    try {
        const dbRes = await Tasks.findAll()
        return dbRes
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = getAllTasksService