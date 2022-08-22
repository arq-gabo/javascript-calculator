import { createSlice } from "@reduxjs/toolkit";

const initialState = ["0"];
const operators = ["0", "%", "+", "*", "/"];

export const numLargeSlice = createSlice({
	name: "numLarge",
	initialState,
	reducers: {
		pushElement: (state, action) => {
			state.push(action.payload);
		},

		changeFirstElement: (state, action) => {
			state[0] = action.payload;
		},

		changeLastElement: (state, action) => {
			state[state.length - 1] = action.payload;
		},

		addMinusSing: (state, action) => {
			state.unshift(action.payload);
		},

		quitMinusSing: (state, action) => {
			state.shift(action.payload);
		},

		clearDisplayLg: () => initialState
	}
});

export const {
	pushElement,
	changeFirstElement,
	changeLastElement,
	addMinusSing,
	quitMinusSing,
	clearDisplayLg
} = numLargeSlice.actions;

export default numLargeSlice.reducer;
