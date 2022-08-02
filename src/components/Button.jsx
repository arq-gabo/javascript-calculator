import React from "react";
import { useDispatch } from "react-redux";
import { addNum } from "../features/numLarge/numLargeSlice";

import "./Button.scss";

const Button = ({ valBtn }) => {
	const decodeStr = val => {
		const parser = new DOMParser();
		const decodedString = parser.parseFromString(
			`<!doctype html><body>${val}`,
			"text/html"
		).body.textContent;
		return decodedString;
	};

	const dispatch = useDispatch();

	const handleClick = e => {
		dispatch(addNum(valBtn));
	};

	return (
		<div className="buttonContainer">
			<button className="buttonStyle" onClick={handleClick}>
				{valBtn.length > 1 ? decodeStr(valBtn) : valBtn}
			</button>
		</div>
	);
};

export default Button;
