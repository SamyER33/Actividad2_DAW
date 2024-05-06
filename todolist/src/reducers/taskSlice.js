
import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name:'task',
    initialState: {
        value: 'task'
    },
    reducers:{
        addTask: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;