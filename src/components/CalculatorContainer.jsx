import React from "react";
import "./CalculatorContainer.scss";

import CurrentTime from "./CurrentTime";
import DisplayLarge from "./DisplayLarge";
import DisplaySmall from "./DisplaySmall";
import ButtonsArea from "./ButtonsArea";

const CalculatorContainer = ({ img }) => {
	return (
		<div className="calculator-container">
			<CurrentTime />
			<img src={img} alt="Iphone BG" />
			<DisplaySmall />
			<DisplayLarge />
			<ButtonsArea />
		</div>
	);
};

export default CalculatorContainer;
