//create redux store
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'
import usersReducer from './slices/usersSlice'


export let reduxStore=configureStore({
    reducer:{
        counter:counterReducer,
        users:usersReducer
    }
})
