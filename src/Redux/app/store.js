import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/userSlice";
import { productsReducer } from "../features/productsSlice";
import { purchaseReducer } from "../features/purchaseSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        purchase: purchaseReducer
    }
})