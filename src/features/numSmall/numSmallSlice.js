import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const numSmallSlice = createSlice({
	name: "numSmall",
	initialState,
	reducers: {
		pushEquationSl: (state, action) => {
			state.push(action.payload);
		},

		changeOperatorSl: (state, action) => {
			state[state.length - 1] = action.payload;
		},

		clearDisplaySl: () => initialState
	}
});

export const { pushEquationSl, changeOperatorSl, clearDisplaySl } =
	numSmallSlice.actions;
export default numSmallSlice.reducer;
