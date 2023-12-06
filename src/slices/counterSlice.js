//create a slice
import {createSlice} from '@reduxjs/toolkit';

export let counterSlice=createSlice({
    name:'counter',
    initialState:{ counter:100},
    reducers:{
        incrementCounter:(state,action)=>{
            state.counter=state.counter+1;
        },
        decrementCounter:(state,action)=>{
          //  console.log(action)
            state.counter=state.counter-1;
        },
        changeCounterByValue:(state,action)=>{
           // console.log(action)
            state.counter=state.counter+action.payload;
        }
    }
})

export default counterSlice.reducer;

//create action creator functions
export let {incrementCounter,decrementCounter,changeCounterByValue}=counterSlice.actions