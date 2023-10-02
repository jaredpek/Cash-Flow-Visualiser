import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
    name: "Expense",
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload);
        },
        updateExpense: (state, action) => {
            const {index, data} = action.payload;
            state[index] = data;
        },
        deleteExpense: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export const { addExpense, updateExpense, deleteExpense } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;