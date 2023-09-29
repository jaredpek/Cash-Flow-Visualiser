import { configureStore } from "@reduxjs/toolkit";
import BalanceReducer from "./slices/BalanceSlice";
import SavingReducer from "./slices/SavingSlice";

export const Store = configureStore({
    reducer: {
        "Balance": BalanceReducer,
        "Saving": SavingReducer,
    }
})
