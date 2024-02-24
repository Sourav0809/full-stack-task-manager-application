import toast from "react-hot-toast"
import axios from 'axios'
import { ADD_TASK_ENDPOINT, GET_TASKS_ENDPOINT, DELETE_TASK_ENDPOINT, MARK_AS_COMPLETED_ENDPOINT } from "../../api/agent"
import { addTask } from "../reducers/taskSlice"

// add task action for adding a new task
export const addTaskAction = (addedTask) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(ADD_TASK_ENDPOINT, addedTask)
            const { tasks } = getState().taskSlice
            const newTasks = [...tasks, data]
            dispatch(addTask(newTasks))
            toast.success("Task Added")

        } catch (error) {
            console.log(error)
            toast.error("error !")
        }
    }
}



// for getting all tasks
export const getAllTasksAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(GET_TASKS_ENDPOINT)
            dispatch(addTask(data))
        } catch (error) {
            console.log(error)
            toast.error("error !")
        }
    }
}

// for deleting a task 
export const deleteTaskAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.delete(DELETE_TASK_ENDPOINT, { data: { id } })
            const { tasks } = structuredClone(getState().taskSlice)
            const newTasks = tasks.filter((task) => task.id !== data.id)
            dispatch(addTask(newTasks))
        } catch (error) {
            console.log(error)
            toast.error("error  !")
        }
    }
}

// for mark a task as completed
export const markAsCompletedAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = axios.patch(MARK_AS_COMPLETED_ENDPOINT, { id })
            const { tasks } = structuredClone(getState().taskSlice)
            const modifiedTask = tasks.map((task) => {
                if (task.id === id) {
                    task.completed = true
                }
                return task
            })
            dispatch(addTask(modifiedTask))
            toast.success("Task Completed ")
        } catch (error) {
            console.log(error)
            toast.error("error  !")
        }
    }
}