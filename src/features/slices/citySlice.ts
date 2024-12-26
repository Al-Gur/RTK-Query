import {createSlice} from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: "city",
    initialState: '',
    reducers: {
        setCity: (_state, action) => action.payload,
    }
})

export const {setCity} = citySlice.actions;
export default citySlice.reducer;