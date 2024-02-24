const moment = require('moment');


// add task service for add a new task 
const editTaskService = async (task, title, description) => {
    console.log(task, title, description)
    try {
        const updatedAt = moment().toISOString();
        const dbRes = await task.update({ title, description, updatedAt })
        return dbRes
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

module.exports = editTaskService