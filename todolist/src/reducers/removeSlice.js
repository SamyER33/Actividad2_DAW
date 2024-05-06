
import { createSlice } from '@reduxjs/toolkit'

export const removeSlice = createSlice({
    name:'remove',
    initialState: {
        value: 'remove'
    },
    reducers:{
        addRemove: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { addRemove } = removeSlice.actions;

export default removeSlice.reducer;