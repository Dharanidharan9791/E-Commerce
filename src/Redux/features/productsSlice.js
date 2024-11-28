import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:"purchases",
    initialState:{products:[]},
    reducers:{
        setProducts:(state,action)=>action.payload
    }
}) 
export const {setProducts} = productsSlice.actions
export  const productsReducer =  productsSlice.reducer