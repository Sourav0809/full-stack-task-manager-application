

// add task service for add a new task 
const markAsCompletedService = async (task) => {
    try {
        const dbRes = await task.update({ completed: true })
        return dbRes
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = markAsCompletedService