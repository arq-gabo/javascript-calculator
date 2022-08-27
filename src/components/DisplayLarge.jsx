import React from "react";
import { useSelector } from "react-redux";

import "./DisplayLarge.scss";

const DisplayMajor = () => {
	// Get state from redux
	const num = useSelector(state => state.numLarge);

	// Conditionals for reduce front size when num length is increment
	let classNameFont;

	if (num.length < 7) {
		classNameFont = "displayLargeFont";
	} else if (num.length >= 7 && num.length < 10) {
		classNameFont = "displayLargeFont fontMedium";
	} else {
		classNameFont = "displayLargeFont fontSmall";
	}

	return (
		<div className="displayLargeContainer">
			<p className={classNameFont} id="display">
				{num}
			</p>
		</div>
	);
};

export default DisplayMajor;
