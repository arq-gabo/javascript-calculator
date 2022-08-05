import { configureStore } from "@reduxjs/toolkit";
import numLargeReducer from "../features/numLarge/numLargeSlice";
import numSmallReducer from "../features/numSmall/numSmallSlice";

export const store = configureStore({
	reducer: {
		numLarge: numLargeReducer,
		numSmall: numSmallReducer
	}
});
