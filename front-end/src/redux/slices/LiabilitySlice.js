import { createSlice } from "@reduxjs/toolkit";

const LiabilitySlice = createSlice({
    name: "Liability",
    initialState: [],
    reducers: {
        addLiability: (state, action) => {
            state.push(action.payload);
        },
        deleteLiability: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { addLiability, deleteLiability } = LiabilitySlice.actions;
export default LiabilitySlice.reducer;