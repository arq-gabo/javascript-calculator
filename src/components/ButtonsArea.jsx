import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	pushElement,
	changeFirstElement,
	addMinusSing,
	quitMinusSing,
	clearDisplayLg
} from "../features/numLarge/numLargeSlice";

import {
	pushEquationSl,
	changeOperatorSl,
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

	// Function for transform array of numbers to number float for make anther operations
	const arrToNum = valArr => parseFloat(valArr.join(""));

	// Function for apply format for not exceed 10 decimal
	const formatter = new Intl.NumberFormat("en-IN", {
		maximumFractionDigits: 10
	});

	// Function for calculate the final result
	const calcTotal = arr => {
		let acum = 0;
		let currOp = "";

		arr.forEach((val, idx) => {
			if (idx === 0) {
				acum = val;
			} else if (typeof val === "string") {
				currOp = val;
			} else if (typeof val === "number") {
				if (currOp === "+") {
					acum += val;
				} else if (currOp === "-") {
					acum -= val;
				} else if (currOp === "*") {
					acum *= val;
				} else if (currOp === "/") {
					acum /= val;
				}
			}
		});
		return parseFloat(formatter.format(acum).replace(",", ""));
	};

	// Functionality clear buttom
	const clearButtom = () => {
		dispatch(clearDisplayLg());
		dispatch(clearDisplaySl());
	};

	// Functionality plus/minus button
	const plusMinusButton = val => {
		const operators = ["+", "*", "/"];
		if (!numLg.includes("-")) {
			if (numLg[0] === "0" && numLg.length === 1) {
				dispatch(changeFirstElement(val));
			} else if (numSl.includes("=")) {
				dispatch(clearDisplaySl());
				dispatch(pushEquationSl(arrToNum(numLg) * -1));
				dispatch(clearDisplayLg());
			} else if (numLg[0] === "%") {
				dispatch(changeFirstElement(val));
				dispatch(pushEquationSl(val));
			} else if (numLg[0] === "0" && numLg[1] === ".") {
				dispatch(addMinusSing(val));
			} else if (operators.includes(numLg[0])) {
				dispatch(changeFirstElement(val));
			} else {
				dispatch(addMinusSing(val));
			}
		} else {
			if (numLg.length === 1) {
				dispatch(changeFirstElement("0"));
			} else {
				dispatch(quitMinusSing(val));
			}
		}
	};

	// Functionality when press equal buttom
	const equalButton = () => {
		let result = 0;
		const operators = ["+", "-", "*", "/", "%"];
		if (!numSl.includes("=")) {
			if (numSl.length === 0) {
				dispatch(pushEquationSl(arrToNum(numLg)));
				dispatch(pushEquationSl("="));
				dispatch(pushEquationSl(arrToNum(numLg)));
			} else if (operators.includes(numLg[numLg.length - 1])) {
				if (operators.includes(numSl[numSl.length - 1])) {
					dispatch(changeOperatorSl("="));
					dispatch(pushEquationSl(calcTotal(numSl)));
					dispatch(clearDisplayLg());
					dispatch(changeFirstElement(calcTotal(numSl)));
				} else {
					dispatch(pushEquationSl("="));
					dispatch(pushEquationSl(calcTotal(numSl)));
					dispatch(clearDisplayLg());
					dispatch(changeFirstElement(calcTotal(numSl)));
				}
			} else {
				result = calcTotal([
					calcTotal(numSl),
					numSl[numSl.length - 1],
					arrToNum(numLg)
				]);
				dispatch(pushEquationSl(arrToNum(numLg)));
				dispatch(pushEquationSl("="));
				dispatch(pushEquationSl(result));
				dispatch(clearDisplayLg());
				dispatch(changeFirstElement(result));
			}
		}
	};

	//Functionality of the buttom numbers 0 to 9
	const numButton = val => {
		const operators = ["+", "*", "/"];
		if (numLg.length < 12 && numSl.join("").length < 45) {
			if (numLg[0] === "0") {
				if (numLg[1] === ".") {
					dispatch(pushElement(val));
				} else {
					dispatch(changeFirstElement(val));
				}
			} else if (numLg[0] === "%") {
				dispatch(changeFirstElement(val));
				dispatch(pushEquationSl("*"));
			} else if (numLg[0] === "-") {
				if (numSl[numSl.length - 1] === "-" && numLg.length === 1) {
					dispatch(changeFirstElement(val));
				} else if (numSl[numSl.length - 1] === "-" && numLg.length > 1) {
					dispatch(pushElement(val));
				} else if (val !== "0") {
					dispatch(pushElement(val));
				} else if (val === "0" && numLg.length > 1) {
					dispatch(pushElement(val));
				}
			} else if (operators.includes(numLg[0])) {
				dispatch(changeFirstElement(val));
			} else if (numSl.includes("=")) {
				dispatch(clearDisplayLg());
				dispatch(clearDisplaySl());
				dispatch(changeFirstElement(val));
			} else {
				dispatch(pushElement(val));
			}
		} else {
			showAlert();
		}
	};

	// Function for add dot decimal to nums
	const decimalButtom = val => {
		const operators = ["+", "*", "/"];
		if (numLg.length < 12 && numSl.join("").length < 45) {
			if (!numLg.includes(val)) {
				if (operators.includes(numLg[0])) {
					dispatch(changeFirstElement("0"));
					dispatch(pushElement(val));
				} else if (numLg[0] === "%") {
					dispatch(pushEquationSl("*"));
					dispatch(changeFirstElement("0"));
					dispatch(pushElement(val));
				} else if (numLg[0] === "-") {
					if (numLg.length === 1) {
						dispatch(pushElement("0"));
						dispatch(pushElement("."));
					} else {
						dispatch(pushElement(val));
					}
				} else if (numSl.includes("=")) {
					dispatch(clearDisplaySl());
					dispatch(clearDisplayLg());
					dispatch(pushElement(val));
				} else {
					dispatch(pushElement(val));
				}
			}
		} else {
			showAlert();
		}
	};

	//Functionality of the percentage buttom
	const percentageButton = val => {
		const operator = ["+", "-", "*", "/", "%"];
		if (numLg.length < 12 && numSl.join("").length < 45) {
			if (!operator.includes(numLg[numLg.length - 1])) {
				if (!numSl.includes("=")) {
					dispatch(clearDisplayLg());
					dispatch(changeFirstElement(val));
					dispatch(
						pushEquationSl(
							parseFloat(
								formatter
									.format(parseFloat(numLg.join("")) * 0.01)
									.replace(",", "")
							)
						)
					);
				} else {
					dispatch(clearDisplaySl());
					dispatch(
						pushEquationSl(
							parseFloat(
								formatter
									.format(parseFloat(numLg.join("")) * 0.01)
									.replace(",", "")
							)
						)
					);
					dispatch(changeFirstElement("%"));
				}
			}
		} else {
			showAlert();
		}
	};

	//Functionality of the buttom operator + * /
	const operatorButtom = val => {
		const operators = ["+", "*", "/"];
		if (operators.includes(val)) {
			if (
				operators.includes(numLg[0]) ||
				(numLg[0] === "-" && numLg.length === 1)
			) {
				dispatch(changeOperatorSl(val));
				dispatch(changeFirstElement(val));
			} else if (numLg[0] === "%") {
				dispatch(pushEquationSl(val));
				dispatch(changeFirstElement(val));
			} else if (numSl.includes("=")) {
				dispatch(clearDisplaySl());
				dispatch(pushEquationSl(arrToNum(numLg)));
				dispatch(pushEquationSl(val));
				dispatch(clearDisplayLg());
				dispatch(changeFirstElement(val));
			} else {
				dispatch(pushEquationSl(arrToNum(numLg)));
				dispatch(pushEquationSl(val));
				dispatch(clearDisplayLg());
				dispatch(changeFirstElement(val));
			}
		} else if (val === "-") {
			if (operators.includes(numLg[0])) {
				dispatch(changeFirstElement(val));
			} else if (numLg[0] === "%") {
				dispatch(pushEquationSl(val));
				dispatch(changeFirstElement(val));
			} else if (numSl.includes("=")) {
				dispatch(clearDisplaySl());
				dispatch(pushEquationSl(arrToNum(numLg)));
				dispatch(pushEquationSl(val));
				dispatch(clearDisplayLg());
				dispatch(changeFirstElement(val));
			} else if (!operators.includes(numLg[0]) && numLg[0] !== "-") {
				dispatch(pushEquationSl(arrToNum(numLg)));
				dispatch(pushEquationSl(val));
				dispatch(clearDisplayLg());
				dispatch(changeFirstElement(val));
			}
		}
	};

	// Object whith the property of the buttons of the calculator
	const calObj = [
		{
			button: "C",
			funcClick: () => clearButtom(),
			id: "clear"
		},
		{
			button: "&#177;",
			funcClick: () => plusMinusButton("-"),
			id: "minus"
		},
		{
			button: "%",
			funcClick: () => percentageButton("%"),
			id: "percentage"
		},
		{
			button: "&#247;",
			funcClick: () => operatorButtom("/"),
			id: "divide"
		},
		{
			button: 7,
			funcClick: () => numButton("7"),
			id: "seven"
		},
		{
			button: 8,
			funcClick: () => numButton("8"),
			id: "eight"
		},
		{
			button: 9,
			funcClick: () => numButton("9"),
			id: "nine"
		},
		{
			button: "x",
			funcClick: () => operatorButtom("*"),
			id: "multiply"
		},
		{
			button: 4,
			funcClick: () => numButton("4"),
			id: "four"
		},
		{
			button: 5,
			funcClick: () => numButton("5"),
			id: "five"
		},
		{
			button: 6,
			funcClick: () => numButton("6"),
			id: "six"
		},
		{
			button: "&#8211;",
			funcClick: () => operatorButtom("-"),
			id: "subtract"
		},
		{
			button: 1,
			funcClick: () => numButton("1"),
			id: "one"
		},
		{
			button: 2,
			funcClick: () => numButton("2"),
			id: "two"
		},
		{
			button: 3,
			funcClick: () => numButton("3"),
			id: "three"
		},
		{
			button: "+",
			funcClick: () => operatorButtom("+"),
			id: "add"
		},
		{
			button: 0,
			funcClick: () => numButton("0"),
			id: "zero"
		},
		{
			button: ".",
			funcClick: () => decimalButtom("."),
			id: "decimal"
		},
		{
			button: "=",
			funcClick: () => equalButton(),
			id: "equals"
		}
	];

	return (
		<div className="buttonAreaContainer">
			{calObj.map((item, idx) => {
				return (
					<Button
						key={idx}
						valBtn={item.button}
						clickFunction={item.funcClick}
						id={item.id}
					/>
				);
			})}
		</div>
	);
};

export default ButtonsArea;
