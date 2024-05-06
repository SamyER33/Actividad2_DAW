
import { createSlice } from '@reduxjs/toolkit'

export const optionSlice = createSlice({
    name:'option',
    initialState: {
        value: 'goals'
    },
    reducers:{
        addOption: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {addOption} = optionSlice.actions;

export default optionSlice.reducer;