import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
    name: "Expense",
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export const { addExpense, deleteExpense } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;