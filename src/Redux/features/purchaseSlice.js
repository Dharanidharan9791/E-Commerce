import { createSlice } from "@reduxjs/toolkit";

const purchaseSlice = createSlice({
    name:"purchases",
    initialState:[],
    reducers:{
        setProducts:(state,action)=>action.payload
    }
}) 
export const {setProducts} = purchaseSlice.actions
export default purchaseSlice.reducer