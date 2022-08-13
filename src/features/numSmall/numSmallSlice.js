import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const numSmallSlice = createSlice({
	name: "numSmall",
	initialState,
	reducers: {
		pushEquation: (state, action) => {
			state.push(action.payload);
		},

		changeOperator: (state, action) => {
			state[state.length - 1] = action.payload;
		},

		clearDisplaySl: () => initialState
	}
});

export const { pushEquation, changeOperator, clearDisplaySl } =
	numSmallSlice.actions;
export default numSmallSlice.reducer;
