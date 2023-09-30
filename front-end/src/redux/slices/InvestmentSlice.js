import { createSlice } from "@reduxjs/toolkit";

const InvestmentSlice = createSlice({
    name: "Investment",
    initialState: [],
    reducers: {
        setInvestment: (state, action) => {
            state = action.payload;
        },
        addInvestment: (state, action) => {
            state.push(action.payload);
        },
        deleteInvestment: (state, action) => {
            state.splice(
                state.indexOf(action.payload),
                1,
            )
        }
    }
})

export const { setInvestment, addInvestment, deleteInvestment } = InvestmentSlice.actions;
export default InvestmentSlice.reducer;