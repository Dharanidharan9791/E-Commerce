import { createSlice } from "@reduxjs/toolkit";

const purchaseSlice = createSlice({
    name:"purchases",
    initialState:{purchases:[]},
    reducers:{
        setPurchases:(state,action)=>action.payload
    }
}) 
export const {setPurchases} = purchaseSlice.actions
export  const purchaseReducer = purchaseSlice.reducer