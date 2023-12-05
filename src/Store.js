//create redux store
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'

export let reduxStore=configureStore({
    reducer:{
        counter:counterReducer
    }
})
