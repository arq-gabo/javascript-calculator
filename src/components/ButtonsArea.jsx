import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addNum,
	addDecimal,
	clearDisplayLg,
	addMinuSing
} from "../features/numLarge/numLargeSlice";

import {
	pushEquation,
	changeOperator,
	clearDisplaySl
} from "../features/numSmall/numSmallSlice";

import Button from "./Button";
import "./ButtonsArea.scss";

const ButtonsArea = () => {
	// for get state from redux
	const dispatch = useDispatch();
	const numLg = useSelector(state => state.numLarge);
	const numSl = useSelector(state => state.numSmall);

	// Show alert in case exced num of array
	const showAlert = () => {
		alert("Exceeded the number of digits");
	};

	//Function for dispatch to the state if the num length is less of 14
	const clickBtn = (state, val, func) => {
		state.length < 14 ? dispatch(func(val)) : showAlert();
		if (numLg[0] === "%") dispatch(pushEquation("*"));
	};

	// Function for transform array of numbers to number float for make anther operations
	const arrToNum = valArr => parseFloat(valArr.join(""));

	// Function for apply format for not exceed 10 decimal
	const formatter = new Intl.NumberFormat("en-IN", {
		maximumFractionDigits: 10
	});

	// Function to apply functionality on the big screen when an operator button is pressed
	const clearAndSendLg = val => {
		dispatch(clearDisplayLg());
		dispatch(addNum(val));
	};

	const operators = ["%", "+", "-", "*", "/"];

	const dispatchStateSm = val => {
		if (!operators.includes(numLg[numLg.length - 1])) {
			dispatch(pushEquation(parseFloat(numLg.join(""))));
			dispatch(pushEquation(val));
		} else if (numLg[0] === "%") {
			dispatch(pushEquation(val));
		} else if (numLg[0] === numSl[numSl.length - 1]) {
			dispatch(addNum(val));
			dispatch(changeOperator(val));
		}
	};

	// Object whith the property of the buttons of the calculator
	const calObj = [
		{
			button: "C",
			funcClick: () => {
				dispatch(clearDisplayLg());
				dispatch(clearDisplaySl());
			}
		},
		{
			button: "&#177;",
			funcClick: () => clickBtn(numLg, "-", addMinuSing)
		},
		{
			button: "%",
			funcClick: () => {
				if (
					!operators.includes(numLg[0]) ||
					(numLg[0] === "-" && numLg.length > 0)
				) {
					dispatch(
						pushEquation(
							parseFloat(
								formatter.format(arrToNum(numLg) * 0.01).replace(",", "")
							)
						)
					);
					clearAndSendLg("%");
				}
			}
		},
		{
			button: "&#247;",
			funcClick: () => {
				dispatchStateSm("/");
				clearAndSendLg("/");
			}
		},
		{
			button: 7,
			funcClick: () => clickBtn(numLg, "7", addNum)
		},
		{
			button: 8,
			funcClick: () => clickBtn(numLg, "8", addNum)
		},
		{
			button: 9,
			funcClick: () => clickBtn(numLg, "9", addNum)
		},
		{
			button: "x",
			funcClick: () => {
				dispatchStateSm("*");
				clearAndSendLg("*");
			}
		},
		{
			button: 4,
			funcClick: () => clickBtn(numLg, "4", addNum)
		},
		{
			button: 5,
			funcClick: () => clickBtn(numLg, "5", addNum)
		},
		{
			button: 6,
			funcClick: () => clickBtn(numLg, "6", addNum)
		},
		{
			button: "&#8211;",
			funcClick: () => {
				dispatchStateSm("-");
				clearAndSendLg("-");
			}
		},
		{
			button: 1,
			funcClick: () => clickBtn(numLg, "1", addNum)
		},
		{
			button: 2,
			funcClick: () => clickBtn(numLg, "2", addNum)
		},
		{
			button: 3,
			funcClick: () => clickBtn(numLg, "3", addNum)
		},
		{
			button: "+",
			funcClick: () => {
				dispatchStateSm("+");
				clearAndSendLg("+");
			}
		},
		{
			button: 0,
			funcClick: () => clickBtn(numLg, "0", addNum)
		},
		{
			button: ".",
			funcClick: () => clickBtn(numLg, ".", addDecimal)
		},
		{ button: "=", funcClick: () => console.log(numSl, "----", numLg) }
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
