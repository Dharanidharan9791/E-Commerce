import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/userSlice";
import { productsReducer } from "../features/productsSlice";
import { purchaseReducer } from "../features/purchaseSlice";
import { ordersReducer } from "../features/ordersSlice";
import { cartReducer } from "../features/cartSlice";
export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        purchase: purchaseReducer,
        orders:ordersReducer,
        cart:cartReducer
    }
})