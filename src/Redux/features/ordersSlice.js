import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        setOrders:(state,action)=>action.payload
    }
}) 
export const {setOrders} = ordersSlice.actions
export  const ordersReducer =  ordersSlice.reducer