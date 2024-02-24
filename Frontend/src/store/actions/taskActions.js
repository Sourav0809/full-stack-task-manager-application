import toast from "react-hot-toast"
import axios from 'axios'
import { ADD_TASK_ENDPOINT } from "../../api/agent"

// add task action for adding a new task
export const addTaskAction = (addedTask) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(ADD_TASK_ENDPOINT, addedTask)
            console.log(data)
        } catch (error) {
            console.log(error)
            toast.error("error !")
        }
    }
}
