import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const operators = ["%", "-", "+", "*", "/"];

export const numSmallSlice = createSlice({
	name: "numSmall",
	initialState,
	reducers: {
		pushEquation: (state, action) => {
			state.push(action.payload);
		},

		clearDisplaySl: () => initialState
	}
});

export const { pushEquation, clearDisplaySl } = numSmallSlice.actions;
export default numSmallSlice.reducer;
