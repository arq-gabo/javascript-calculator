import React from "react";
import "./App.scss";
import Header from "./components/Header";
import CalculatorContainer from "./components/CalculatorContainer";
import Footer from "./components/Footer";

// Redux

import iphonePic2 from "./iphoneBG2.jpg";

function App() {
	return (
		<div className="App">
			<Header />
			<div style={{ display: "flex" }}>
				{/* <CalculatorContainer img={iphonePic1} /> */}
				<CalculatorContainer img={iphonePic2} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
