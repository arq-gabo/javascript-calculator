import React from "react";
import { useSelector } from "react-redux";
import "./DisplaySmall.scss";

const DisplaySmall = () => {
	const num = useSelector(state => state.numSmall);
	return (
		<div className="displaySmallContainer">
			<p className="displaySmallFont">{num}</p>
		</div>
	);
};

export default DisplaySmall;
