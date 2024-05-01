
import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './reducers/goalsSlice';
import optionReducer from './reducers/optionSlice';

export default configureStore({
    reducer:{
        goals:goalReducer,
        option:optionReducer        
    }
})