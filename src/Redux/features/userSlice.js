import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{isLoggedIn:false,userID: '', userName: ''},
    reducers:{
        setUsers:(state,action)=>action.payload
    }
}) 
export const {setUsers} = userSlice.actions
export const userReducer = userSlice.reducer