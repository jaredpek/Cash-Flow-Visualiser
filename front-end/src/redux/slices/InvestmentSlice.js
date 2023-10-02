import { createSlice } from "@reduxjs/toolkit";

const InvestmentSlice = createSlice({
    name: "Investment",
    initialState: [],
    reducers: {
        addInvestment: (state, action) => {
            state.push(action.payload);
        },
        updateInvestment: (state, action) => {
            const {index, data} = action.payload;
            state[index] = data;
        },
        deleteInvestment: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { addInvestment, updateInvestment, deleteInvestment } = InvestmentSlice.actions;
export default InvestmentSlice.reducer;