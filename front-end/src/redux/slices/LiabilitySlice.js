import { createSlice } from "@reduxjs/toolkit";

const LiabilitySlice = createSlice({
    name: "Liability",
    initialState: [],
    reducers: {
        setLiability: (state, action) => {
            state = action.payload;
        },
        addLiability: (state, action) => {
            state.push(action.payload);
        },
        deleteLiability: (state, action) => {
            state.splice(
                state.indexOf(action.payload),
                1,
            )
        }
    }
})

export const { setLiability, addLiability, deleteLiability } = LiabilitySlice.actions;
export default LiabilitySlice.reducer;