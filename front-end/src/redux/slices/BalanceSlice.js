import { createSlice } from "@reduxjs/toolkit";
import { generateList } from "../../lib/Financials";

const BalanceSlice = createSlice({
    name: "Balance",
    initialState: {
        cash: generateList(false),
        investments: generateList(false),
    },
    reducers: {
        setBalance: (state, action) => {
            Object.assign(state, action.payload);
        }
    }
})

export const { setBalance } = BalanceSlice.actions;
export default BalanceSlice.reducer;