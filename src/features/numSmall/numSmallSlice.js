import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const numSmallSlice = createSlice({
	name: "numSmall",
	initialState,
	reducers: {
		pushEquation: (state, action) => {
			state.push(action.payload);
		},

		divideOperator: (state, action) => {},

		multiplyOperator: (state, action) => {},

		subtractOperator: (state, action) => {},

		addOperator: (state, action) => {},

		equalsOperator: (state, action) => {},

		clearDisplaySl: () => initialState
	}
});

export const { pushEquation, clearDisplaySl } = numSmallSlice.actions;
export default numSmallSlice.reducer;
