import { createSlice } from "@reduxjs/toolkit";

const IncomeSlice = createSlice({
    name: "Income",
    initialState: [],
    reducers: {
        addIncome: (state, action) => {
            state.push(action.payload);
        },
        updateIncome: (state, action) => {
            const {index, data} = action.payload;
            state[index] = data;
        },
        deleteIncome: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export const { addIncome, updateIncome, deleteIncome } = IncomeSlice.actions;
export default IncomeSlice.reducer;