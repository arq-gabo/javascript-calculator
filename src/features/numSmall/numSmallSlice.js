import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const numSmallSlice = createSlice({
	name: "numSmall",
	initialState,
	reducers: {
		addOperator: (state, action) => {
			console.log("funciona");
		}
	}
});

export const { addOperator } = numSmallSlice.actions;
export default numSmallSlice.reducer;
