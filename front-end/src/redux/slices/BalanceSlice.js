import { createSlice } from "@reduxjs/toolkit";

const BalanceSlice = createSlice({
    name: "Balance",
    initialState: [],
    reducers: {
        setBalance: (state, action) => {
            state = action.payload;
        }
    }
})

export const { setBalance } = BalanceSlice.actions;
export default BalanceSlice.reducer;