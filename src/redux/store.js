import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    reducer : {
        cart : CartSlice.reducer,
        // CartSlice.reducer not gives ERROR, without .reducer, ERROR milta hai
    }
});