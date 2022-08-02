import React, { useState } from "react";
import Button from "./Button";
import "./ButtonsArea.scss";

const calObj = [
	{ button: "C" },
	{ button: "&#177;" },
	{ button: "%" },
	{ button: "&#247;" },
	{ button: 7 },
	{ button: 8 },
	{ button: 9 },
	{ button: "x" },
	{ button: 4 },
	{ button: 5 },
	{ button: 6 },
	{ button: "&#8211;" },
	{ button: 1 },
	{ button: 2 },
	{ button: 3 },
	{ button: "+" },
	{ button: 0 },
	{ button: "." },
	{ button: "=" }
];

const ButtonsArea = () => {
	return (
		<div className="buttonAreaContainer">
			{calObj.map((item, idx) => {
				return <Button key={idx} valBtn={item.button} />;
			})}
		</div>
	);
};

export default ButtonsArea;
