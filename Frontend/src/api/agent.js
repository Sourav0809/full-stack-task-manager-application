// backend server running port
export const PORT = 4000

// all apis
const apiEndPoints = {
    ADD_TASK_ENDPOINT: `http://localhost:${PORT}/task/addtask`,
    GET_TASKS_ENDPOINT: `http://localhost:${PORT}/task/getalltasks`,
    DELETE_TASK_ENDPOINT: `http://localhost:${PORT}/task/deletetask`,
}


// export
export const {
    ADD_TASK_ENDPOINT,
    GET_TASKS_ENDPOINT,
    DELETE_TASK_ENDPOINT
} = apiEndPoints