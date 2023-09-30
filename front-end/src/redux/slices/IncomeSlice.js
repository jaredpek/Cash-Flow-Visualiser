import { createSlice } from "@reduxjs/toolkit";

const IncomeSlice = createSlice({
    name: "Income",
    initialState: [],
    reducers: {
        setIncome: (state, action) => {
            state = action.payload;
        },
        addIncome: (state, action) => {
            state.push(action.payload);
        },
        deleteIncome: (state, action) => {
            state.splice(
                state.indexOf(action.payload),
                1,
            )
        }
    }
})

export const { setIncome, addIncome, deleteIncome } = IncomeSlice.actions;
export default IncomeSlice.reducer;