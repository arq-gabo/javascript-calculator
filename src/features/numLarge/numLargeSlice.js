import { createSlice } from "@reduxjs/toolkit";

const initialState = ["0"];
const operators = ["0", "%", "+", "*", "/"];

export const numLargeSlice = createSlice({
	name: "numLarge",
	initialState,
	reducers: {
		addNum: (state, action) => {
			if (operators.includes(state[0]) && state.length === 1) {
				state[0] = action.payload;
			} else if (state[0] === "-" && state[1] === "0" && state.length === 2) {
				state[1] = action.payload;
			} else {
				state.push(action.payload);
			}
		},

		addDecimal: (state, action) => {
			if (!state.includes(".")) {
				if (state[0] === "-" && state.length === 1) {
					state.push("0", action.payload);
				} else if (state[0] === "-" && state[1] === "0") {
					state.push(action.payload);
				} else if (operators.includes(state[0]) && state.length === 1) {
					state[0] = "0";
					state.push(action.payload);
				} else {
					state.push(action.payload);
				}
			}
		},

		addMinuSing: (state, action) => {
			if (!state.includes("-")) {
				if (!operators.includes(state[0])) {
					state.unshift(action.payload);
				} else if (state[0] === "0" && state[1] === ".") {
					state.unshift(action.payload);
				} else if (state[0] === "0" && state.length === 1) {
					state[0] = action.payload;
				}
			} else {
				if (state[0] === "-" && state.length === 1) {
					state[0] = "0";
				} else {
					state.shift();
				}
			}
		},

		clearDisplayLg: () => initialState
	}
});

export const { addNum, addDecimal, addMinuSing, clearDisplayLg } =
	numLargeSlice.actions;

export default numLargeSlice.reducer;
