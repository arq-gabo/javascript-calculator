import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addNum,
	addDecimal,
	clearDisplayLg,
	addMinuSing
} from "../features/numLarge/numLargeSlice";

import { addOperator } from "../features/numSmall/numSmallSlice";

import Button from "./Button";
import "./ButtonsArea.scss";

const ButtonsArea = () => {
	// for get state from redux
	const dispatch = useDispatch();
	const num = useSelector(state => state.numLarge);

	// Show alert in case exced num of array
	const showAlert = () => {
		alert("Exceeded the number of digits");
	};

	// Function for dispatch to the state if the num length is less of 14
	const clickNum = val => {
		if (num.length < 14) {
			dispatch(addNum(val));
		} else {
			showAlert();
		}
	};

	// Object whith the property of the buttons of the calculator
	const calObj = [
		{ button: "C", funcClick: () => dispatch(clearDisplayLg()) },
		{
			button: "&#177;",
			funcClick: () =>
				num.length < 14 ? dispatch(addMinuSing("-")) : showAlert()
		},
		{ button: "%", funcClick: () => dispatch(addOperator()) },
		{ button: "&#247;" },
		{
			button: 7,
			funcClick: () => clickNum("7")
		},
		{
			button: 8,
			funcClick: () => clickNum("8")
		},
		{
			button: 9,
			funcClick: () => clickNum("9")
		},
		{ button: "x" },
		{
			button: 4,
			funcClick: () => clickNum("4")
		},
		{
			button: 5,
			funcClick: () => clickNum("5")
		},
		{
			button: 6,
			funcClick: () => clickNum("6")
		},
		{ button: "&#8211;" },
		{
			button: 1,
			funcClick: () => clickNum("1")
		},
		{
			button: 2,
			funcClick: () => clickNum("2")
		},
		{
			button: 3,
			funcClick: () => clickNum("3")
		},
		{ button: "+" },
		{
			button: 0,
			funcClick: () => clickNum("0")
		},
		{
			button: ".",
			funcClick: () =>
				num.length < 14 ? dispatch(addDecimal(".")) : showAlert()
		},
		{ button: "=" }
	];

	return (
		<div className="buttonAreaContainer">
			{calObj.map((item, idx) => {
				return (
					<Button
						key={idx}
						valBtn={item.button}
						clickFunction={item.funcClick}
					/>
				);
			})}
		</div>
	);
};

export default ButtonsArea;
