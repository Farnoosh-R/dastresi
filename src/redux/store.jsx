import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./products/ProductsSlice";

const store = configureStore({
    reducer: {
        data: ProductsSlice.reducer
    }
})
export default store;