import { createSlice } from "@reduxjs/toolkit";

const IncomeSlice = createSlice({
    name: "Income",
    initialState: [],
    reducers: {
        addIncome: (state, action) => {
            state.push(action.payload);
        },
        deleteIncome: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export const { addIncome, deleteIncome } = IncomeSlice.actions;
export default IncomeSlice.reducer;