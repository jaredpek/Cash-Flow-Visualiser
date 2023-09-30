import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
    name: "Expense",
    initialState: [],
    reducers: {
        setExpense: (state, action) => {
            state = action.payload;
        },
        addExpense: (state, action) => {
            state.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.splice(
                state.indexOf(action.payload),
                1,
            )
        }
    }
})

export const { setExpense, addExpense, deleteExpense } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;