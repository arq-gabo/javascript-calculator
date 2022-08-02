import React from "react";
import { useSelector } from "react-redux";

import "./DisplayLarge.scss";

const DisplayMajor = () => {
	const num = useSelector(state => state.numLarge);

	return (
		<div className="displayLargeContainer">
			<p className="displayLargeFont">{num}</p>
		</div>
	);
};

export default DisplayMajor;
