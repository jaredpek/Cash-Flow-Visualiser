import { createSlice } from "@reduxjs/toolkit";

const SavingSlice = createSlice({
    name: "Saving",
    initialState: [],
    reducers: {
        setSaving: (state, action) => {
            state = action.payload;
        },
        addSaving: (state, action) => {
            state.push(action.payload);
        },
        deleteSaving: (state, action) => {
            state.splice(
                state.indexOf(action.payload),
                1,
            )
        }
    }
})

export const { setSaving, addSaving, deleteSaving } = SavingSlice.actions;
export default SavingSlice.reducer;