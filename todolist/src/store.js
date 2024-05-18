
import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './reducers/goalsSlice';
import optionReducer from './reducers/optionSlice';
import removeReducer from './reducers/removeSlice';
import taskReducer from './reducers/taskSlice';
import todoReducer from './reducers/todoSlice';

export default configureStore({
    reducer:{
        goals:goalReducer,
        option:optionReducer,
        remove:removeReducer,
        task:taskReducer,
        todo:todoReducer,        
    },
})