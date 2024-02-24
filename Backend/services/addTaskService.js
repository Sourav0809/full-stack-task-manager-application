// importing tsak model
const Tasks = require('../models/tasks')

// add task service for add a new task 
const addTaskService = async (title, description, completed) => {
    try {
        const dbRes = await Tasks.create({ title, description, completed })
        return dbRes
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = addTaskService