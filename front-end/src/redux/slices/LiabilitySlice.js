import { createSlice } from "@reduxjs/toolkit";

const LiabilitySlice = createSlice({
    name: "Liability",
    initialState: [],
    reducers: {
        addLiability: (state, action) => {
            state.push(action.payload);
        },
        updateLiability: (state, action) => {
            const {index, data} = action.payload;
            state[index] = data;
        },
        deleteLiability: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { addLiability, updateLiability, deleteLiability } = LiabilitySlice.actions;
export default LiabilitySlice.reducer;