import { createSlice } from "@reduxjs/toolkit";

const initialState = ["0"];

export const numLargeSlice = createSlice({
	name: "numLarge",
	initialState,
	reducers: {
		addNum: (state, action) => {
			if (state.length === 1 && state[0] === "0") {
				state[0] = action.payload;
			}
		}
	}
});

export const { addNum } = numLargeSlice.actions;

export default numLargeSlice.reducer;
