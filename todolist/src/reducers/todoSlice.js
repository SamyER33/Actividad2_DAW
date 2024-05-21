
import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name:'todos',
    initialState: {
        value: [],
    },
    reducers:{
        addTodo: (state, action) => {
            console.log(action.payload);
            fetch("http://localhost:3001/tasks/addTasks",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":"cursodedesarrollodeaplicacionesweb"
                },
                body:JSON.stringify(action.payload)
            }).catch((err)=>{
                console.log(err);
            });
        },
        initAddTodo: (state, action) => {
            state.value.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter((task)=>task.id!==action.payload);
            fetch("http://localhost:3001/tasks/removeTasks/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":"cursodedesarrollodeaplicacionesweb"
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
})

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;