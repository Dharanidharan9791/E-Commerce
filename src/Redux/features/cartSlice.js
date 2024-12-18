import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        setCart:(state,action)=>action.payload
    }
}) 
export const {setCart} = cartSlice.actions
export  const cartReducer =  cartSlice.reducer