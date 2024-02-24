import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskSlice",
    initialState: { tasks: [] },
    reducers: {
        addTask(state, action) {
            state.tasks = action.payload
        },

    }
})


// export
export const { addTask } = taskSlice.actions
export default taskSlice.reducer