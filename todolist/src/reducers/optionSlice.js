
import { createSlice } from '@reduxjs/toolkit'

export const optionSlice = createSlice({
    name:'opcion',
    initialState: {
        value: 'goals'
    },
    reducers:{
        changeOption: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {addGoal} = optionSlice.actions;

export default optionSlice.reducer;