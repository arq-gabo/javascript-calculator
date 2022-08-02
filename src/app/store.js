import { configureStore } from "@reduxjs/toolkit";
import numLargeReducer from "../features/numLarge/numLargeSlice";

export const store = configureStore({
	reducer: {
		numLarge: numLargeReducer
	}
});
