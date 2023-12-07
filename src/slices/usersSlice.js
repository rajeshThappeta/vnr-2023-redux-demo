import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//make API req
export let usersPromise = createAsyncThunk("users-data", async (thunkApi) => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let usersList = await res.json();
    return usersList;
  } catch (err) {
    return thunkApi.rejectWithValue(err)
  }
});

export let usersSlice = createSlice({
  name: "users",
  initialState: { users: [], isPending: false, errMessage: "" },
  reducers: {
    clearState: (state, action) => {
      state.users = [];
      state.isPending = false;
      state.errMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersPromise.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(usersPromise.fulfilled, (state, action) => {
        //update users array
        state.users = action.payload;
        state.isPending = false;
      })
      .addCase(usersPromise.rejected, (state, action) => {
        console.log(action)
        state.errMessage = action.error;
        state.isPending = false;
      });
  },
});

//export root reducer
export default usersSlice.reducer;

//export action crteator functions
export let { clearState } = usersSlice.actions;
