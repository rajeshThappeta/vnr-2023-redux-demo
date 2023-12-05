//create a slice
import {createSlice} from '@reduxjs/toolkit';

export let counterSlice=createSlice({
    name:'counter',
    initialState:{ counter:100},
    reducers:{}
})

export default counterSlice.reducer;