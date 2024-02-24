import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskSlice",
    initialState: { tasks: [], isEditingTask: false, editTask: {} },
    reducers: {
        addTask(state, action) {
            state.tasks = action.payload
        },
        setIsEditingTask(state, action) {
            state.isEditingTask = true
        },
        setEditingFalse(state, action) {
            state.isEditingTask = false
        },
        editTask(state, action) {
            state.editTask = action.payload
        },
        removeEditTask(state) {
            state.editTask = {}
        },
        ondeleteTask(state) {
            state.isEditingTask = false
            state.editTask = {}
        }

    }
})


// export
export const { addTask, setIsEditingTask, setEditingFalse, editTask, removeEditTask, ondeleteTask } = taskSlice.actions
export default taskSlice.reducer