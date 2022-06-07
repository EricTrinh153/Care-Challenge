import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/apiRequest";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
    }
})