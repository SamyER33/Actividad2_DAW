
import { createSlice } from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value: [
            {
            'name':'',
            'description':'',
            'dueDate':''
            }
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter(goal => goal.name !== action.payload);
        },
        editGoal: (state, action) => {
            const { name, description, dueDate } = action.payload;
            const goal = state.value.find((goal) => goal.name === name);
            if (goal) {
                goal.description = description;
                goal.dueDate = dueDate;
            }
        }
    }
})

export const { addGoal, removeGoal, editGoal } = goalsSlice.actions;

export default goalsSlice.reducer;