// importing tasks model
const Tasks = require('../models/tasks')

// add task service for add a new task 
const findTaskService = async (id) => {
    try {
        const dbRes = await Tasks.findOne({ where: { id: id } })
        return dbRes
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = findTaskService