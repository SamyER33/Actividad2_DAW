
import { createSlice } from '@reduxjs/toolkit'
import { initAddTodo } from './todoSlice';

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value: []
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoals",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "cursodedesarrollodeaplicacionesweb"
                },
                body: JSON.stringify(action.payload)
            }).catch((err) => {
                console.log(err);
            });
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter(goal => goal.name !== action.payload);
            fetch("http://localhost:3001/goals/removeGoals/"+action.payload,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "cursodedesarrollodeaplicacionesweb"
                }
            }).catch((err) => {
                console.log(err);
            });
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