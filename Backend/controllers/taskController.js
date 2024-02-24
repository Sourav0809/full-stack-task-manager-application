const addTaskService = require("../services/addTaskService");

const taskContoller = {

    // add task 
    addTask: async (req, res) => {
        const { title, description, completed } = req.body
        try {
            const dbRes = await addTaskService(title, description, completed)
            res.send(dbRes)
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' })
            console.log(error);
        }
    }
}

// exports 
module.exports = taskContoller