import { configureStore } from "@reduxjs/toolkit";
import BalanceReducer from "./slices/BalanceSlice";
import SavingReducer from "./slices/SavingSlice";
import ExpenseReducer from "./slices/ExpenseSlice";
import IncomeReducer from "./slices/IncomeSlice";
import InvestmentReducer from "./slices/InvestmentSlice";
import LiabilityReducer from "./slices/LiabilitySlice";

export const Store = configureStore({
    reducer: {
        "Balance": BalanceReducer,
        "Saving": SavingReducer,
        "Expense": ExpenseReducer,
        "Income": IncomeReducer,
        "Investment": InvestmentReducer,
        "Liability": LiabilityReducer,
    }
})
