import { configureStore } from "@reduxjs/toolkit";
import BalanceReducer from "./slices/BalanceSlice";
import ExpenseReducer from "./slices/ExpenseSlice";
import IncomeReducer from "./slices/IncomeSlice";
import InvestmentReducer from "./slices/InvestmentSlice";
import LiabilityReducer from "./slices/LiabilitySlice";

export const Store = configureStore({
    reducer: {
        "Balance": BalanceReducer,
        "Expense": ExpenseReducer,
        "Income": IncomeReducer,
        "Investment": InvestmentReducer,
        "Liability": LiabilityReducer,
    }
})
