// importing tasks model
const Tasks = require('../models/tasks')

// add task service for add a new task 
const deleteTaskService = async (id) => {
    try {
        const dbRes = await Tasks.findOne({ where: { id: id } })
        await dbRes.destroy()
        return { success: true, id: id }

    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = deleteTaskService