import React from "react";

import "./Button.scss";

const Button = ({ valBtn, clickFunction, id }) => {
	const decodeStr = val => {
		const parser = new DOMParser();
		const decodedString = parser.parseFromString(
			`<!doctype html><body>${val}`,
			"text/html"
		).body.textContent;
		return decodedString;
	};

	return (
		<div className="buttonContainer">
			<button className="buttonStyle" onClick={clickFunction} id={id}>
				{valBtn.length > 1 ? decodeStr(valBtn) : valBtn}
			</button>
		</div>
	);
};

export default Button;
