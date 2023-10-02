import { createSlice } from "@reduxjs/toolkit";

const InvestmentSlice = createSlice({
    name: "Investment",
    initialState: [],
    reducers: {
        addInvestment: (state, action) => {
            state.push(action.payload);
        },
        deleteInvestment: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { addInvestment, deleteInvestment } = InvestmentSlice.actions;
export default InvestmentSlice.reducer;